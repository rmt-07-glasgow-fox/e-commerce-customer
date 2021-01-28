<template>
  <div>
    <carousel
      :per-page="2"
      :mouse-drag="true"
      :autoplay="true"
      :paginationSize="0"
      :loop="true"
      :speed="2000"
      :autoplayTimeout="5000"
      :centerMode="true"
    >
      <slide v-for="banner in banners" :key="banner.id">
        <img :src="banner.image_url" height="200px">
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  name: 'Slider',
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style>

</style>
