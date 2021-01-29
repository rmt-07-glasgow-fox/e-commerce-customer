<template>
  <div class="mt-5">
    <div
     v-if="cart.length > 0">
      <product-card
       v-for="item in cart"
       :key="item.id" :item="item"/>
    </div>
    <h2 v-else>You dont have any item on your cart</h2>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  components: { ProductCard },
  name: 'UserCart',
  computed: {
    cart () {
      return this.$store.state.cart
    }
  },
  created () {
    this.$store.dispatch('getUserCart')
  }
}
</script>

<style>

</style>
