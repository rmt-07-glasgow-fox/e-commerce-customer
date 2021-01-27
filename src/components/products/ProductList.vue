<template>
  <div>
    Products Recomendation
    <ProductItem v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import ProductItem from '@/components/products/ProductItem.vue'
import { mapState } from 'vuex'

export default {
  components: {
    ProductItem
  },
  computed: {
    ...mapState({
      products: state => state.mProducts.products
    })
  },
  created () {
    this.$store.dispatch('fetchAllProducts', null, true)
  }
}
</script>

<style>

</style>
