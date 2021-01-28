<template>
  <v-container fluid>
    <Banner/>
    <div>
      <div class="text-body-1 font-weight-medium mx-5">Recomendations</div>
      <v-divider class="mx-5 mb-3"></v-divider>
      <ProductList/>
    </div>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import ProductList from '@/components/products/ProductList.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    ProductList
  },
  created () {
    localStorage.access_token &&
    this.$store.dispatch('fetchCart', null, true)
    localStorage.access_token &&
    this.$store.dispatch('fetchWishlist', null, true)
    localStorage.access_token &&
    this.$store.dispatch('fetchAllProducts', null, true)
  }
}
</script>
