<template>
  <div class="home">
    <div class="container mx-auto">
      <div class="row justify-content-around m-3">
        <!-- loop this card -->
        <ProductCard
          v-for="product in allProduct"
          :key="product.id"
          :product="product"
        />
        <!-- loop this card -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  computed: {
    allProduct () {
      return this.$store.state.allProduct
    }
  },
  methods: {
  },
  created () {
    this.$store.dispatch('getAllProduct')
  }
}
</script>
