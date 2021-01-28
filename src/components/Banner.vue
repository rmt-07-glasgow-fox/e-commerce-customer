<template>
   <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
      v-for="banner in banners"
      :key="banner.id">
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            :src="banner.image_url"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  created () {
    this.$store.dispatch('fetchBanner')
  }
}
</script>

<style>
  .carousel-inner {
    height: 50vh;
  }
</style>
