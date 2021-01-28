<template>
  <div class="center grid">
    <vs-row>
      <product-card v-for="(product, i) in products" :key="i" :product="product"></product-card>
    </vs-row>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
  name: 'ProductList',
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchProduct', 1)
    this.$store.dispatch('fetchBanners')
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    product () {
      return this.$store.state.product
    },
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style>
</style>
