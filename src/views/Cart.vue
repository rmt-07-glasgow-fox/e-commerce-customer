<template>
    <section>
    <div class="container mt-5">
        <div class="row row-cols-3">
            <ShoppingCart v-for="item in $store.state.cartItems" :key="item.id" :dataCart="item" />
        </div>
    </div>
    </section>

</template>

<script>
import ShoppingCart from '../components/ShoppingCart.vue'

export default {
  name: 'Cart',
  components: {
    ShoppingCart
  },
  created () {
    this.$store.dispatch('fetchCart')
    console.log('created')
  }
}
</script>

<style>

</style>
