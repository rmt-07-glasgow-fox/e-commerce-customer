<template>
<div class="home">
<h1>Our Products</h1>
	<ProductCard/>
</div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  name: 'Home',
  components: {
    ProductCard
  },
  created () {
    this.$store.dispatch('fetchProd')
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>

</style>
