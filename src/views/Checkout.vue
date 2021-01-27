<template>
  <div class="container">
    <div class="row row justify-content-md-center">
      <CartItemCard/>
      <CheckoutCard/>
    </div>
  </div>
</template>

<script>
import CartItemCard from '../components/CartItemCard'
import CheckoutCard from '../components/CheckoutCard'

export default {
  name: 'Checkout',
  components: {
    CartItemCard,
    CheckoutCard
  },
  data () {
    return {

    }
  },
  methods: {

  },
  created () {
    this.$store.dispatch('fetchCartItems')
  }
}
</script>

<style>

</style>
