<template>
  <div class="home">
    <ProductList></ProductList>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('fetchWishlist')
    }
  }
}
</script>
