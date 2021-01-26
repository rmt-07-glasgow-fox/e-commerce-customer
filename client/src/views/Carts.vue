<template>
  <div>
    <Navbar />
    <ListCarts />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import ListCarts from '../components/ListCarts.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    ListCarts,
    Navbar,
    Footer
  },
  name: 'Carts'
}
</script>

<style scoped>
footer {
  margin-top: 16rem;
}
</style>
