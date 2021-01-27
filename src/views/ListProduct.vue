<template>
	<div>
		<h1>product</h1>
		<ProductCard v-for="product in products" :key="product.id" :product="product"/>
	</div>
</template>

<script>
import ProductCard from '../components/ProductCard'	
export default {
	name: 'ListProduct',
	components: {
		ProductCard
	},
	created () {
		this.$store.dispatch('fetchProduct')
	},
	computed: {
		products () {
			return this.$store.state.products
		}
	}
}
</script>

<style>

</style>
