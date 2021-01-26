<template>
  <div class="home">
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

export default {
  name: 'Home',
  components: {
    Carousel,
    Categories,
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
