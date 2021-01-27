<template>
	<div class="home">
		<h1>this is product</h1>
		<!-- <ProductCard v-for="product in products" :key="product.id" :product="product"/> -->
		<ProductCard/>
		<!-- <ProductCard/> -->
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ProductCard from '../components/ProductCard'
export default {
  name: 'Home',
  components: {
    ProductCard
  },
  // methods: {
  // 	fetch () {
  // 		this.$store.dispatch('fetchProd')
  // 	}
  // },
  created () {
    // this.$store.dispatch('fetchProd')
    // this.fetch()
    this.getProducts()
  },
  computed: {
    // products () {
    // 	return this.$store.state.products
    // }
    // products () {
    //   return this.$store.state.products
    // }
    ...mapState('products', ['products'])
  },
  methods: {
    ...mapActions('products', ['getProducts'])
  }
}
</script>

<style>

</style>
