<template>
  <img :src="banner.image_url" class="d-block w-100 img-carousel" :alt="banner.title">
</template>

<script>
export default {
  name: 'BannerList',
  props: ['banner']
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
