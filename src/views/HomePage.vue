<template>
  <div>
    <div class="img-slider"
      @click.prevent="hello">
    <b-carousel
      id="carousel-fade"
      :interval="4000"
      fade
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;">
      <b-carousel-slide
        v-for="banner in banners"
        :key="banner.id"
        :img-src="banner.image_url"
      ></b-carousel-slide>
    </b-carousel>
    </div>
    <div class="container mt-4">
      <h3>Recommended Products</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  methods: {
    hello () {
      this.$router.push('/products')
    }
  },
  created () {
    this.$store.dispatch('fetchBanners')
  }
}
</script>

<style scoped>
.VueCarousel-slide {
  position: relative;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
}
.img-slider:hover {
  cursor: pointer;
}
/*
.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
</style>
