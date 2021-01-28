<template>
  <div class="container">
    <div class="row">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"></ProductCard>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductCard from './ProductCard'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  computed: mapState(['products']),
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style scoped>

</style>
