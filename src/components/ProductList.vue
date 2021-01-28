<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <h3>Categories</h3>
        <category-list />
      </div>
      <div class="col-md-9">
        <div class="row" v-if="products.length > 0">
          <product-card
            v-for="product in products"
            :key="product.id"
            :product="product"/>
        </div>
        <div class="row" v-else>
          <div class="col-md-12 text-center" style="min-height: 100vh;">
            <h1>No Products</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import CategoryList from './CategoryList.vue'

export default {
  name: 'ProductList',
  components: {
    ProductCard,
    CategoryList
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    products () {
      return this.$store.getters.filterByCategory
    }
  }
}
</script>

<style>

</style>
