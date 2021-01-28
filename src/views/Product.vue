<template>
  <div class="container">
    <slider></slider>
    <div class="row d-flex justify-content-center">
      <div v-if="products.length < 1" class="fs-3">No Product Available</div>
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Slider from '../components/Slider.vue'

export default {
  components: { ProductCard, Slider },
  name: 'Product',
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    }
  },
  computed: {
    products () {
      return this.$store.getters.filterProducts
    },
    filter () {
      return this.$store.state.filter
    },
    categories () {
      return this.$store.state.categories
    }
  },
  created () {
    this.fetchProduct()
    this.fetchBanner()
  }
}
</script>

<style scoped>

</style>
