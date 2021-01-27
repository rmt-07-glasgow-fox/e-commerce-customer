<template>
  <div class="home">
    Home
    <ProductList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/products/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>
