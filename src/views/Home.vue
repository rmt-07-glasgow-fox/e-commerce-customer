<template>
  <div class="home">
    <sidebar></sidebar>
    <router-view id="routerView"></router-view>
    <!-- <div>
      <product-list></product-list>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
// import ProductList from '@/components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    Sidebar
  },
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchProduct', 1)
    this.$store.dispatch('fetchBanners')
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    product () {
      return this.$store.state.product
    },
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>
<style>
  #routerView {
    margin-top: 50px;
  }
</style>
