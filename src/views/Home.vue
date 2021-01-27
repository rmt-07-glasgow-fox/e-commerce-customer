<template>
  <b-container fluid class="h-100 w-100 py-5 bg-image">
    <div class="container text-center">
      <h1>Products</h1>
    </div>
    <div class="row justify-content-start">
      <CardProduct v-for="(product, index) in products"
      :key="index"
      :product="product"
      />
    </div>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
import CardProduct from '../components/CardProduct'

export default {
  created () {
    this.$store.dispatch('getAllProducts')
    this.$store.dispatch('getAllBanners')
    this.$store.dispatch('isUserLogin')
  },
  computed: { ...mapState(['products', 'banners']) },
  components: { CardProduct }
}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/background-01.jpg");
  background-size: cover;
  background-position: center;
}
</style>
