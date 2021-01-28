<template>
  <v-container fluid>
    <div>
      <div class="text-body-1 font-weight-medium mx-5">Recomendations</div>
      <v-divider class="mx-5 mb-3"></v-divider>
      <ProductList/>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/products/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  },
  created () {
    localStorage.access_token &&
    this.$store.dispatch('fetchCart', null, true)
  }
}
</script>
