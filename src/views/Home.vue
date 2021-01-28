<template>
  <div class="home">
    <Navbar/>
    <Jumbotron/>
    <strong><h1 class="mt-4">All Products</h1></strong>
    <div class="container mt-5 mx-auto d-flex justify-content-center">
            <div class="row">
                <ProductCard v-for="product in products" :key="product.id" :product="product"/>
            </div>
        </div>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron.vue'
import Navbar from '../components/Navbar.vue'
import ProductCard from '../components/ProductCard.vue'
// @ is an alias to /src

export default {
  components: { Navbar, ProductCard, Jumbotron },
  name: 'Home',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
    if (localStorage.access_token) {
      this.$store.commit('changeIsLogin', true)
    }
  }
}
</script>
