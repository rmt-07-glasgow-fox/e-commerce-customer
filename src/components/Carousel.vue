<template>
<div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style="object-fit:cover">
      <img
      src="https://images.pexels.com/photos/5706277/pexels-photo-5706277.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      style="height:400px;object-fit:cover"
      class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img
      src="https://images.pexels.com/photos/949674/pexels-photo-949674.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      style="height:400px;object-fit:cover"
      class="d-block w-100">
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      style="height:400px;object-fit:cover;"
      class="d-block w-100">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselControls" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselControls" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
</template>

<script>
export default {
  name: 'Carousel'

}
</script>

<style scoped>

</style>
