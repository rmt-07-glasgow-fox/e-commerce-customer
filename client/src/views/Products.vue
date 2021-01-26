<template>
  <div>
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

export default {
  name: 'Products',
  components: {
    Carousel,
    ListProducts,
    Footer
  },
  // created () {
  //   this.$store.dispatch('fetchBanners')
  //   this.$store.dispatch('fetchCategories')
  // },
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>
