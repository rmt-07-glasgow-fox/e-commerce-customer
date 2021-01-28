<template>
  <div class="col-3 mt-5">
    <div class="card">
      <img
        class="card-img-top"
        :src="product.image_url"
        style="width: 200px"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">Price: {{ product.price }}</p>
        <p class="card-text">Stok: {{ product.stock }}</p>
        <a href="#" class="btn btn-primary" @click="addToCart">Add to Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToCart () {
      this.$store.dispatch('addToCart', this.product)
    }
  }
}
</script>

<style>
</style>
