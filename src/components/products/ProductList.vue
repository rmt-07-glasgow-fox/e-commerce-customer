<template>
  <div class="">
    <v-row v-if="products.length > 0" align="center" justify="center">
      <ProductItem v-for="product in products" :key="product.id" :product="product"/>
    </v-row>
    <v-row v-else>
      <v-col cols="12" align="center" justify="center">
        NO DATA
      </v-col>
    </v-row>
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
