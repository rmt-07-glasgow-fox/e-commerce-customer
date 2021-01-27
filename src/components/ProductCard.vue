<template>
	<div class="container">
		<!-- <h1>prods</h1> -->
		<!-- <div class="columns">
  <div class="column is-one-third">is-one-third</div>
  <div class="column">Auto</div>
  <div class="column">Auto</div>
</div> -->

	<div class="row">
		<div class="column is-one-fifth" v-for="product in products" :key="product.id" :product="product">
		<div class="card" >
  <div class="card-image">
    <figure class="image">
			 <!-- <img src="https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png" alt="Placeholder image"> -->
      <img :src="product.imageUrl" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <!-- <div class="media-left">
        <figure class="image is-48x48">
          <img :src="product.imageUrl" alt="Placeholder image">
        </figure>
      </div> -->
      <div class="media-content">
        <p class="title is-4">{{ product.name }}</p>
        <p class="subtitle is-6">Rp {{ product.price }}</p>
				<p class="subtitle is-6">Stock: {{ product.stock }}</p>
      </div>
    </div>

    <div class="content">
      <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>. -->
      <!-- <a href="#">#css</a> <a href="#">#responsive</a> -->
			<!-- <button v-if="status === 'loggedIn'" @click.prevent="doCreateUpdate" :disabled="product.stock === 0"></button> -->
      <b-button variant="primary" v-if="status === 'loggedIn'" @click.prevent="doCreateUpdate" :disabled="product.stock === 0"><b-icon icon="plus-square" ></b-icon>Add to cart</b-button>
      <br>
      <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
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
  //  created () {
  //   this.$store.dispatch('fetchProd')
  // },
}
</script>

<style>

</style>
