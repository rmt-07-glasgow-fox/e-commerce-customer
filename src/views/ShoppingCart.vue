<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-4">Shopping Cart</h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col" class="pb-2" style="width:50px;">#</th>
              <th scope="col" class="pb-2 px-0" style="width:50px;">
                <div class="d-flex justify-content-center">
                  <img :src="checkIcon" alt="C" height="25px">
                </div>
              </th>
              <th scope="col" class="text-center" style="width:550px;">Product Name</th>
              <th scope="col" class="text-center">Price</th>
              <th scope="col" class="text-center" style="width:250px;">Quantity</th>
              <th scope="col" class="p-0 m-0" style="width:75px;">
                <div class="d-flex justify-content-center mt-1">
                  <p class="mb-2">Action</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <cart-list v-for="(cart, idx) in carts"
            :key="cart.id"
            :cart="cart"
            :idx="idx"
            @updateTotalPrice="totalPriceFilter"
            ></cart-list>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>Total Amount</td>
              <td class="text-center">{{ formatRp(total) }}</td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="row justify-content-end">
      <div class="col-1 mt-3 me-5">
        <button class="btn btn-success" type="button" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import eCommerceAPI from '../api/eCommerce'
import CartList from '../components/CartList'
import formatRp from '../helpers/formatRp'

export default {
  name: 'ShoppingCart',
  components: {
    CartList
  },
  data () {
    return {
      checkIcon: require('../assets/check-blue.png')
    }
  },
  computed: {
    carts () {
      return this.$store.state.cart
    },
    total () {
      return this.$store.state.totalPrice
    },
    toBePurchased () {
      return this.$store.state.cart.filter(e => {
        if (e.status) {
          return e
        }
      })
    }
  },
  methods: {
    totalPriceFilter () {
      let totalPrice = 0
      this.carts.forEach(e => {
        if (e.status) {
          totalPrice += e.Product.price * e.quantity
        }
      })

      this.$store.commit('setTotalPrice', totalPrice)
    },
    formatRp (value) {
      return formatRp(value)
    },
    checkout () {
      console.log(this.toBePurchased, 'checkout')
      let totalPrice = 0
      this.toBePurchased.forEach((e, i) => {
        const obj = {
          quantity: e.quantity,
          totalPrice: this.total
        }
        totalPrice += obj.totalPrice
        eCommerceAPI.patch(`/products/${e.productId}`, obj, {
          headers: { access_token: localStorage.access_token }
        })
          .then(({ data }) => {
            // console.log(data, 'updated products')
            return eCommerceAPI.delete(`/cart/${e.id}`, {
              headers: { access_token: localStorage.access_token }
            })
              .then(data => {
                this.$store.dispatch('checkBalance')
                this.totalPrice()
              })
              .catch(err => {
                console.log(err, 'error deleteFromCart')
              })
          })
      })
      totalPrice = totalPrice / (this.toBePurchased.length)
      eCommerceAPI.patch('/user/balance/reduce', { balance: totalPrice }, {
        headers: { access_token: localStorage.access_token }
      })
        .then(data => {
          this.$store.dispatch('fetchProducts')
          this.$store.commit('setBalance', this.$store.state.totalPrice)
          this.$store.commit('setTotalPrice', 0)
          this.$store.dispatch('checkBalance')
        })
      this.$router.push('/')
    }
  },
  watch: {
    total (oldTotal, newTotal) {
      console.log(oldTotal, newTotal, 'old new')
    }
  },
  mounted () {
    this.totalPriceFilter()
  },
  updated () {
    this.totalPriceFilter()
  }
}
</script>
