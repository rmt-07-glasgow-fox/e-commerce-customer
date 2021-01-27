<template>
  <div class="home">
    <Banner/>
    <div class="container mb-4">
      <div class="row">
        <ProductList
          class="d-flex justify-content-center"
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'
import ProductList from '../components/ProductList'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Banner,
    ProductList
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>

<style scoped>
/* .row {
  display: flex;
  justify-content: center;
  align-items: center;
} */
</style>
