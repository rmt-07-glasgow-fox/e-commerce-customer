<template>
  <div>
    <!-- navbar -->
    <Navbar/>
    <div class="container mx-auto">
      <carousel class="mt-20 pt-5">
         <slide
          v-for="banner in banners"
          :key="banner.id"
          >
          <Banner
          :banner="banner"/>
          </slide>
      </carousel>
      <div class="container px-4 mt-5 mb-20 flex flex-row flex-wrap justify-center items-center ">
        <Card
        v-for="product in products"
        :key="product.id"
        :product="product"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Products',
  components: {
    Card,
    Navbar,
    Footer,
    Carousel,
    Banner,
    Slide
  },
  created () {
    this.$store.dispatch('fetchAllProducts')
    this.$store.dispatch('fetchAllBanners')
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    banners () {
      return this.$store.state.banners
    }
  }
}

</script>
