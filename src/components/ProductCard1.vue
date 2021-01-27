<template>
	<div class="container">
	<div class="columns">

		<div class="column is-one-fifth">
	<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://versions.bulma.io/0.7.0/images/placeholders/1280x960.png" alt="Placeholder image">
			 <!-- <img :src="product.imageUrl" alt="Placeholder image"> -->
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://versions.bulma.io/0.7.0/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <!-- <a href="#">#css</a> <a href="#">#responsive</a> -->
				<button v-if="status === 'loggedIn'" @click.prevent="doCreateUpdate" :disabled="product.stock === 0">Yey</button>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
		</div>
	</div>
	</div>
</template>

<script>
export default {
	name: 'ProductCard1',
		props: [ 'product' ],
	computed: {
		status () {
			return this.$store.state.status
		}
	},
	methods: {
		doCreateUpdate () {
			const payload = {
				productId: this.product.id,
				quantity: 1
			}
			this.$store.dispatch('changeQuantity', payload)
			// this.$store.dispatch
		}
	}

}
</script>

<style>

</style>