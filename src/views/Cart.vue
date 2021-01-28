<template>
  <div class="px-5">
    <div v-if="carts.length < 1">
      <div class="fs-3">Cart empty</div>
      <button class="btn btn-outline-success" @click="$router.push('/')">Buy Now</button>
    </div>
    <table class="table" v-else>
      <tr>
        <th class="text-start" width="40%">Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Action</th>
      </tr>
      <cart-card v-for="cart in carts" :key="cart.id" :cart="cart"/>
    </table>
    <div v-if="carts.length > 0" class="bg-light d-flex justify-content-center align-items-center py-2 px-4">
      <div>
        <div class="fs-5 mb-2 fw-bold">Total Payment : {{ totalPayment }}</div>
        <button class="btn btn-outline-success" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartCard from '../components/CartCard.vue'
export default {
  components: { CartCard },
  name: 'Cart',
  computed: {
    carts () {
      return this.$store.getters.sortedCart
    },
    totalPayment () {
      const carts = this.$store.state.carts
      return (Object.values(carts).reduce((a, { quantity, Product }) => {
        return a + quantity * Product.price
      }, 0)).toLocaleString('id', { style: 'currency', currency: 'IDR' })
    }
  },
  methods: {
    checkout () {
      this.$store.dispatch('checkout', this.carts)
    }
  },
  beforeRouteEnter (to, from, next) {
    if (to.path === '/cart' && !localStorage.access_token) next({ name: 'Login' })
    else next()
  }
}
</script>

<style scoped>
  tr{
    border-bottom: 1px solid #e3e3e3;
  }
</style>
