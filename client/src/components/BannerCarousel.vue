<template>
  <div class="carousel-item " :class="active" data-bs-interval="3000">
  <img :src="banner.image_url" class="d-block w-100 imgCar" alt="" style="margin-top: 30px;">
  </div>
</template>

<script>
export default {
  name: 'BannerCarousel',
  props: ['banner', 'id'],
  computed: {
    active () {
      if (this.id === 0) {
        return 'active'
      } else {
        return ''
      }
    }
  }
}
</script>

<style>

</style>
