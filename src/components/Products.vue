<template>
    <div class="row mb-2">
        <product-card v-for="product in productList" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
export default {
  name: 'Products',
  components: {
    ProductCard
  },
  computed: {
    productList () {
      return this.$store.state.productList
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  }

}
</script>

<style>

</style>
