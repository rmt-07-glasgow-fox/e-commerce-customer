<template>
  <div class="card mx-3 my-3" style="width: 15rem;">
    <img :src="product.image_url" class="card-img-top" style="width: 100%; height: 15vw; object-fit: cover;" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">Rp. {{ product.price }}</p>
      <button v-on:click.prevent="addtoCart" class="btn btn-primary">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCards',
  props: ['product'],
  methods: {
    addtoCart () {
      const product = {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price,
        stock: this.product.stock
      }
      this.$store.dispatch('addtoCart', product)
    }
  }
}
</script>

<style>

</style>
