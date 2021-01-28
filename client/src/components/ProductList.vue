<template>
<div class="flex flex-row">
  <CardProduct
    v-for="product in products"
    :key="product.id"
    :product="product"/>
</div>
</template>

<script>
import { mapState } from 'vuex'
import CardProduct from './CardProduct'
export default {
  name: 'ProductList',
  methods: {
    listProduct () {
      this.$store.dispatch('listProduct')
    }
  },
  created () {
    this.listProduct()
  },
  computed: {
    ...mapState([
      'products'
    ])
  },
  components: {
    CardProduct
  }
}
</script>

<style>

</style>
