<template>
  <div class="container">
    <button class="btn btn-danger mt-2" @click="logout">Logout</button>
    <div class="row">
      <ProductCard v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/users/login')
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>
</style>
