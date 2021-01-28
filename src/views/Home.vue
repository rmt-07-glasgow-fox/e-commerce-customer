<template>
  <div class="home">
    <div class="container-xl bg-light shadow rounded">
      <div class="row row-cols-5 g-4 justify-content-center pb-4 rounded" style="min-height: 70vh; background-color: lightslategray;">
      <ProductCard
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
import ProductCard from '@/components/ProductCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    ...mapState([
      'products'
    ])
  },
  components: {
    ProductCard
  }
}
</script>
