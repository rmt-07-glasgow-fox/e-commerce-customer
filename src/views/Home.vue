<template>
  <div class="home">
    <Navbar ></Navbar>
    <Banner></Banner>
    <div class="container mt-5">
        <div class="row justify-content-center">
          <ProductCard v-for="product in products" :key="product.id" :productList="product"></ProductCard>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '../components/ProductCard.vue'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductCard,
    Banner
  },
  computed: {
    products () {
      return this.$store.state.product
    }
  },
  created () {
    this.$store.commit('setAccessToken', localStorage.access_token)
    this.$store.dispatch('fetchProduct')
    this.$store.dispatch('fetchBanner')
    console.log(this.products, '<<<< dari product')
  }
}
</script>
<style scoped>
  .carousel-inner {
    height: 50vh;
    background-size: cover;
  }
</style>
