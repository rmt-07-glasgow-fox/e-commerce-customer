<template>
  <b-container fluid class="bg-primary h-100 w-100 py-5">
    <div class="container text-center">
      <h1>Products</h1>
    </div>
    <div class="row justify-content-start bg-danger">
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
  },
  computed: { ...mapState(['products', 'banners']) },
  components: { CardProduct }
}
</script>
