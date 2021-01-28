<template>
  <div>
    <Navbar/>
    <div class="container">
      <h4 class="card-title text-center">Your Cart</h4>
      <div class="row">
        <div class="col-8">
          <CartItemCard v-for="item in getCartItems" :key="item.id"
            v-bind:item="item"
          />
        </div>

        <div class="col-4">
          <CheckoutCard v-bind:totalCart="getTotalCart"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItemCard from '../components/CartItemCard'
import CheckoutCard from '../components/CheckoutCard'
import Navbar from '../components/Navbar'

export default {
  name: 'Checkout',
  components: {
    CartItemCard,
    CheckoutCard,
    Navbar
  },
  data () {
    return {

    }
  },
  methods: {

  },
  created () {
    this.$store.dispatch('fetchCartItems')
  },
  computed: {
    getCartItems () {
      return this.$store.state.cartItems
    },

    getTotalCart () {
      return this.$store.state.totalCart
    }
  }
}
</script>

<style>

</style>
