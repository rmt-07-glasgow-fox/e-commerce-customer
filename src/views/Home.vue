<template>
  <div class="home">
    <banner-carousel />
    <product-list />
  </div>
</template>

<script>
import BannerCarousel from '../components/BannerCarousel.vue'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    BannerCarousel,
    ProductList
  }
}
</script>
