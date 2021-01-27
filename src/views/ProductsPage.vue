<template>
  <div class="row mt-4">
    <div class="col col-md-2">
      <category-page></category-page>
    </div>
    <div class="col col-md-10">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <product-card
        v-for="product in products"
        :product="product"
        :key="product.id">
      </product-card>
    </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import CategoryPage from '../components/CategoryPage'
export default {
  name: 'ProductsPage',
  components: {
    ProductCard,
    CategoryPage
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
