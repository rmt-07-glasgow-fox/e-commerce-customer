<template>
  <section class="featured section" id="featured">
    <h2 class="section-title">All Product</h2>

    <div class="featured__container bd-grid">
      <cart-product v-for="product in listProduct.data" :key="product.id" :product="product"/>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CartProduct from './CartProduct.vue'
export default {
  name: 'Feature',
  computed: {
    ...mapState('product', ['listProduct'])
  },
  components: {
    CartProduct
  },
  methods: {
    ...mapActions('product', ['getAllProduct'])
  },
  created () {
    this.getAllProduct()
  }
}
</script>

<style>

</style>
