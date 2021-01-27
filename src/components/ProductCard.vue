<template>
	<div class="container">
	<div class="row">
		<div class="column is-one-fifth" v-for="product in products" :key="product.id" :product="product">
		<div class="card" >
  <div class="card-image">
    <figure class="image">
      <img :src="product.imageUrl" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{{ product.name }}</p>
        <p class="subtitle is-6">Rp {{ product.price }}</p>
				<p class="subtitle is-6">Stock: {{ product.stock }}</p>
      </div>
    </div>

    <div class="content">
			<!-- <button v-if="status === 'loggedIn'" @click.prevent="doCreateUpdate" :disabled="product.stock === 0"></button> -->
      <b-button variant="primary" v-if="status === 'loggedIn'" @click.prevent="doCreateUpdate" :disabled="product.stock === 0"><b-icon icon="plus-square" ></b-icon>Add to cart</b-button>
      <br>
    </div>
  </div>
</div>
	</div>
	</div>
	</div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  computed: {
    status () {
      return this.$store.state.status
    },
     products () {
    	return this.$store.state.products
    }
  },
  methods: {
    doCreateUpdate () {
      const payload = {
        productId: this.product.id,
        quantity: 1
      }
      this.$store.dispatch('changeQuantity', payload)
      this.$toasted.success('added')
    }
  },
}
</script>

<style>

</style>
