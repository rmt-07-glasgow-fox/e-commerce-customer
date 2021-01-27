<template>
  <div class="container mt-3">
  <carousel :per-page="1" :navigate-to="someLocalProperty" :mouse-drag="true" :autoplay="true">
    <slide v-for="banner in banners" :key="banner.id">
      <BannerList :banner="banner" />
    </slide>
  </carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BannerList from './BannerList'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Banner',
  methods: {
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    }
  },
  components: {
    BannerList,
    Carousel,
    Slide
  },
  created () {
    this.fetchBanner()
  },
  computed: {
    ...mapState([
      'banners'
    ])
  }
}
</script>

<style>
.img-carousel{
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: 50% 0%;
}
</style>
