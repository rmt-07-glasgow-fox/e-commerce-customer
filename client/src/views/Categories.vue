<template>
  <div class="mh-100">
    <Navbar />
    <!-- <Carousel /> -->
    <ListProducts
      :products="products"
    ></ListProducts>
    <Footer />
  </div>
</template>

<script>
import $ from 'jquery'
import { mapState } from 'vuex'
// import Carousel from '@/components/Carousel.vue'
import ListProducts from '@/components/ListProducts.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Categories',
  components: {
    Navbar,
    // Carousel,
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
  },
  updated () {
    console.log('updated')
    $('#search-task').on('keyup', function () {
      const value = $(this).val().toLowerCase()
      $('.product-list').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      })
    })
  }
}
</script>

<style scoped>
footer {
  margin-top: 7rem;
  /* position: fixed; */
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
