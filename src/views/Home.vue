<template>
  <div>
    <carousel />
    <div class="container mt-5">
    <products />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '../components/Products.vue'
import Carousel from '../components/Carousel'
export default {
  name: 'Home',
  components: {
    Carousel,
    Products
  }
}
</script>
