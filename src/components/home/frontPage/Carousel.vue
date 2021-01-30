<template>
  <div
    id="bannerIndicator"
    class="carousel slide"
    data-bs-ride="carousel"
    style=" margin-bottom: 32px"
  >
    <ol class="carousel-indicators">
      <li
        v-for="(Banner, i) in fetchBanners"
        :key="Banner.id"
        data-bs-target="#bannerIndicator"
        :data-bs-slide-to="i"
        :class="{ active: i === 0 }"
      ></li>
    </ol>
    <div class="carousel-inner shadow" style="border-radius: 0.8em">
      <div
        class="carousel-item"
        v-for="(Banner, i) in fetchBanners"
        :key="Banner.id"
        :class="{ active: i === 0 }"
      >
        <img :src="Banner.image_url" class="d-block w-100" alt="..." />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#bannerIndicator"
      role="button"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#bannerIndicator"
      role="button"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Carousel',
  computed: {
    ...mapGetters([
      'fetchBanners'
    ])
  },
  created () {
    this.$store.dispatch('fetchBanners')
  }
}
</script>

<style scoped>
.carousel-inner img {
  object-fit: cover !important;
  height: 68vh;
  max-width: 100%;
}
@media screen and (max-width: 720px) {
  .carousel-inner img {
    height: 48vh;
  }
}
@media screen and (max-width: 480px) {
  .carousel-inner img {
    height: 36vh;
  }
}
@media screen and (max-width: 320px) {
  .carousel-inner img {
    height: 24vh;
  }
}
</style>
