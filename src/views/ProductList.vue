<template>
  <div class="container">
    <div class="row"></div>
    <div class="row">
      <ProductCard />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  }
}
</script>

<style>
</style>
