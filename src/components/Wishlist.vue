<template>
  <div class="container">
    <div class="row">
      <ProductCard
        v-for="product in wishlist"
        :key="product.id"
        :product="product"></ProductCard>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from './ProductCard'

export default {
  name: 'Wishlist',
  components: {
    ProductCard
  },
  computed: mapState(['wishlist']),
  created () {
    this.$store.dispatch('fetchWishlist')
  }
}
</script>

<style scoped>

</style>
