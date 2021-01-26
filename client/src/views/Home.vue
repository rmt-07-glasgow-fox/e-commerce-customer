<template>
  <div class="home">
    <Navbar />
    <Carousel />
    <Categories
      v-for="category in filterCategories"
      :key="category.id"
      :category="category"
    ></Categories>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Carousel from '@/components/Carousel.vue'
import Categories from '@/components/Categories.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Categories,
    Navbar,
    Footer
  },
  created () {
    this.$store.dispatch('getBanners')
    this.$store.dispatch('getCategories')
  },
  computed: {
    ...mapState([
      'categories'
    ]),
    filterCategories () {
      return this.categories.filter(el => el.Products.length > 0)
    }
  }
}
</script>
