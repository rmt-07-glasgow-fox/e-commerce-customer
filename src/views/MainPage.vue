<template>
  <div class='container-fluid'>
    <Navbar />
      <h1>Welcome to Lajada!</h1>
      <i><strong>L</strong>oe m<strong>a</strong>u apa a<strong>ja</strong> a<strong>da</strong></i>
      <div class='d-flex flex-row mt-4 flex-wrap justify-content-center'>
        <ContentCard v-for='product in products' :key='product.id' :product='product'/>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import ContentCard from '../components/ContentCard'
export default {
  name: 'MainPage',
  components: {
    Navbar,
    ContentCard
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

<style scoped>
</style>
