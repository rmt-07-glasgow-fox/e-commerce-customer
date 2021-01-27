<template>
  <div id="FrontPage">
    <div class="container-fluid" style="padding: 0">
      <div class="row row-style">
        <!-- carousel -->
        <carousel />
        <!-- carousel// -->
        <h1 style="margin-bottom: 32px">Our Categories</h1>
        <!-- category-card -->
        <category-card />
        <!-- category-card// -->
        <h1 style="margin-top: 12px; margin-bottom: 32px">Our Products</h1>
        <!-- product-card -->
        <product-card />
        <!-- product-card// -->
        <button
          class="btn btn-primary"
          style="margin: 32px auto; width: 240px; border-radius: 2.4em"
        >
          See More <chevron-right-icon size="1x"></chevron-right-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './frontPage/Carousel.vue'
import CategoryCard from './frontPage/CategoryCard.vue'
import ProductCard from './frontPage/ProductCard.vue'
import { ChevronRightIcon } from 'vue-feather-icons'

export default {
  name: 'FrontPage',
  components: {
    Carousel,
    CategoryCard,
    ProductCard,
    ChevronRightIcon
  }
}
</script>

<style scoped>
.row-style {
  margin: 36px;
}

@media screen and (max-width: 420px) {
  .row-style {
    margin: 36px 12px;
  }
}
</style>
