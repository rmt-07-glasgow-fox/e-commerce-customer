<template>
  <div>
    <Navbar />
    <Carousel />
    <ListProducts
      :products="products"
    ></ListProducts>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Carousel from '@/components/Carousel.vue'
import ListProducts from '@/components/ListProducts.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Categories',
  components: {
    Navbar,
    Carousel,
    ListProducts,
    Footer
  },
  created () {
    this.$store.dispatch('getCategoriesId', {
      id: this.$route.params.id
    })
    this.$store.dispatch('getBanners')
  },
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>
