<template>
  <div>
    <div
     v-if="page === 'products'">
      <product-card
       v-for="product in products"
       :key="product.id" :item="product"/>
    </div>
    <product-details
     v-else/>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import ProductDetails from '../components/ProductDetails.vue'

export default {
  components: { ProductCard, ProductDetails },
  name: 'Home',
  data () {
    return {
      page: 'products'
    }
  },
  methods: {
    setupProducts () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.setupProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
