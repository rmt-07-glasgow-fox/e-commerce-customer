<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>Cart</h1>
          <div class="row" v-if="carts.length > 0">
            <cart-card
              v-for="cart in carts"
              :key="cart.id"
              :cart="cart"/>
          </div>
          <div v-else>
            <h1>No Data</h1>
          </div>
        </div>
        <div class="col-md-3 d-flex flex-column">
          <h1>Total Price</h1>
          {{ this.maskPrice() }}
          <button
            class="btn btn-primary"
            :disabled="!carts.length > 0"
            @click="checkoutCart">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCard from '../components/CartCard.vue'
export default {
  components: { CartCard },
  name: 'Cart',
  methods: {
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    },
    maskPrice () {
      return `Rp. ${this.totalPrice.toLocaleString('id', 'ID')}`
    },
    checkoutCart () {
      this.$store.dispatch('checkoutCart')
    }
  },
  created () {
    this.fetchCarts()
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    totalPrice () {
      let totalProducts
      if (this.carts) {
        totalProducts = this.$store.state.carts.map(product => {
          return product.amount * product.Product.price
        })
      }
      return (totalProducts.reduce((a, b) => {
        return a + b
      }, 0))
    }
  }
}
</script>

<style scoped>

</style>
