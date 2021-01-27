<template>
  <div class="carousel-item active" data-bs-interval="2000">
    <img :src="banner.image_url" class="d-block w-100" alt="...">
  </div>
</template>

<script>
export default {
  name: 'BannerList',
  props: ['banner']
}
</script>

<style>

</style>
