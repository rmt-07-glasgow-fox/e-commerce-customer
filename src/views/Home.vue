<template>
  <div class="container">
    <ProductCard  />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
// @ is an alias to /src
export default {
  components: { ProductCard },
  name: 'Home'
}
</script>
