<template>
  <div class="container d-flex justify-content-start">
    <product-card
    v-for="product in products"
    :key="product.id"
    :product="product"
    :cart="cart"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  computed: {
    ...mapState([
      'products', 'cart'
    ])
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>
