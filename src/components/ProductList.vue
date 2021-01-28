<template>
    <div class="row">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard'
import { mapState } from 'vuex'

export default {
  components: {
    ProductCard
  },
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>

<style>

</style>
