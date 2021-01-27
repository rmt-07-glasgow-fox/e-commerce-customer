<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style="overflow: hidden;">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img height="200vh" src="https://global-uploads.webflow.com/5f0d53c042a9ed6288de7f8d/5f68150db527de25e82c86f1_Hacktiv8%20logo%20horizontal%2001%20black.png" class="d-block w-100" alt="first">
      </div>
      <div v-for="banner in $store.state.banners" :key="banner.id" class="carousel-item">
        <img :src="banner.image_url" class="d-block w-100" :alt="banner.title" height="200vh">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Slider'
}
</script>

<style>
</style>
