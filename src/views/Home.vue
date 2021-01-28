<template>
  <div>
    <h1>Welcome to Danuspedia!</h1>
    <div>
      <div class="row productContainer m-3">
        <ProductCard
        v-for="(product) in products"
        :key="product.id"
        :product="product"/>
      </div>
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
  }
}
</script>

<style>
.productContainer {
  justify-content: center;
}
</style>
