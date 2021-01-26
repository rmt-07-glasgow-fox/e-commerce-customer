<template>
  <div id="FrontPage">
    <div class="container-fluid" style="padding: 0">
      <div class="row" style="margin: 36px">
        <!-- carousel -->
        <carousel />
        <!-- carousel// -->
        <h1 style="margin-bottom: 32px">Our Products</h1>
        <!-- product-card -->
        <product-card />
        <!-- product-card// -->
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './frontPage/Carousel.vue'
import ProductCard from './frontPage/ProductCard.vue'

export default {
  name: 'FrontPage',
  components: {
    Carousel,
    ProductCard
  }
}
</script>
