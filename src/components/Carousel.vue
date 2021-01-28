<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      :interval="1200"
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        v-for="(banner, index) in banners"
        :key="index"
        :caption="banner.title"
        :img-src="baseURL + banner.image_url"
      />
    </b-carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: { ...mapState(['banners', 'baseURL']) }
}
</script>
