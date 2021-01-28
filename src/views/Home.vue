<template>
  <div class="home">
    <div class="row">
      <ProductCard
      class="card"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchCarts')
  }
}
</script>

<style scoped>
  .row {
    padding: 0px 25px;
  }
</style>
