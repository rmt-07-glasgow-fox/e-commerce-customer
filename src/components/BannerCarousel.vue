<template>
  <div id="bannerCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        v-for="(banner, idx) in banners"
        :key="banner.id"
        :class="{ active: idx === 0 }"
        :data-slide-to="idx"
        data-target="#bannerCarousel"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item" v-for="(banner, idx) in banners" :key="banner.id" :class="{ active: idx === 0 }">
        <img class="d-block w-100" :src="banner.image_url" :alt="banner.title" style="max-height: 60vh;">
        <div class="carousel-caption d-none d-md-block">
          <h3>{{ banner.title }}</h3>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#bannerCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#bannerCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BannerCarousel',
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    }
  },
  created () {
    this.fetchBanners()
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style>

</style>
