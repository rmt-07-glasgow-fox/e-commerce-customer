<template>
  <b-container fluid class="h-100 w-100 py-2 bg-image">
    <Carousel/>
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
import Carousel from '../components/Carousel'

export default {
  created () {
    this.$store.dispatch('getAllProducts')
    this.$store.dispatch('getAllBanners')
    this.$store.dispatch('isUserLogin')
  },
  computed: { ...mapState(['products', 'banners']) },
  components: { CardProduct, Carousel }
}
</script>

<style scoped>
.bg-image {
  background-image: url("../assets/background-01.jpg");
  background-size: cover;
  background-position: center;
}
</style>
