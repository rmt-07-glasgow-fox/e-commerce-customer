<template>
  <div class='container'>
    <div class='container'>
      <Navbar />
    </div>
    <div class='container mt-4'>
      <h1>Welcome to Lajada!</h1>
      <i><strong>L</strong>oe m<strong>a</strong>u apa a<strong>ja</strong> a<strong>da</strong></i>
      <div class='row mt-4'>
      <ContentCard v-for='product in products' :key='product.id' :product='product'/>
      </div>
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
