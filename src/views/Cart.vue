<template>
  <div id="cart">
    <div class="container-fluid">
      <Navbar />

      <div class="content">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <CartContent
              v-for="(cart, n) in carts"
              :key="cart.id"
              :cart="cart"
              :n="n + 1"
            />
          </tbody>
          <tr class="table">
            <th scope="row"></th>
            <td colspan="2">Total</td>
            <td>{{'Rp ' + price.toLocaleString('id-ID')}}</td>
            <td><button type="button" class="btn btn-sm btn-outline-primary">Checkout</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CartContent from '@/components/CartContent.vue'

export default {
  name: 'Cart',
  components: {
    Navbar,
    CartContent
  },
  methods: {
    checkout (id) {
      this.$store.dispatch('buy', id)
    }
  },
  computed: {
    carts () {
      return this.$store.getters.unpaid
    },
    price () {
      return this.$store.state.price
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
    this.$store.dispatch('totalPrice')
  }

}
</script>

<style scoped>
.content {
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
}
</style>
