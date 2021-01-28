<template>
  <div class="home">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <Carousel :per-page="1" :autoplay="true" :autoplay-timeout="3000">
        <ListBanners
        v-for="banner in banners"
        :key="banner.id"
        :banner='banner'
        />
      </Carousel>
    </div>
    <img alt="Beautiv Logo" src="../assets/beautiv.png" style="width:30%; height:30%">
    <ListProducts/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListProducts from '@/components/ListProducts.vue'
import { Carousel } from 'vue-carousel'
import ListBanners from '../components/ListBanners.vue'
export default {
  name: 'Home',
  components: {
    ListProducts,
    Carousel,
    ListBanners
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    this.$store.dispatch('fetchBanners')
  }
}
</script>
