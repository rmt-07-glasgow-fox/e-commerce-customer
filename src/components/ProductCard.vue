<template>
  <div class="col">
    <div class="card h-100">
      <img :src="product.image_url" class="card-img-top" width="200">
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p>Price: {{ product.price }}</p>
        <p>Quantity: {{ product.stock }}</p>
        <p>Category: {{ product.category }}</p>
      </div>
      <div class="card-footer">
        <button
          @click.prevent="addToCart(product)"
          class="btn btn-secondary">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  data () {
    return {

    }
  },
  methods: {
    addToCart (product) {
      this.$store.dispatch('addToCart', product)
    }
  }
}
</script>

<style>

</style>
