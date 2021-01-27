<template>
  <div class="mt-5 d-flex justify-content-around flex-wrap">
    <CartCard v-for="cart in $store.state.carts.Products" :key="cart.id" :cart="cart"/>
  </div>
</template>

<script>
import CartCard from './CartCard.vue'

export default {
  name: 'Cart',
  components: {
    CartCard
  },
  created () {
    this.$store.dispatch('fetchCarts')
  },
  beforeRouteEnter (to, from, next) {
    if (!localStorage.access_token) {
      return next({ name: 'Login' })
    } else {
      return next()
    }
  }
}
</script>

<style>

</style>
