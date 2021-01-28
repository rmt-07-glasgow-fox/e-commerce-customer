<template>
  <div class="home">
    <Navbar />
    <div class="container mt-5 pt-5">
        <h1 class="text-center">Temukan Barang Random Mu</h1>
      <div class="row">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
export default {
  name: 'Home',
  components: {
    Navbar,
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    getProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
