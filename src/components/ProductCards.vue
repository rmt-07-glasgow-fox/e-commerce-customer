<template>
  <div class="card mx-3 my-3" style="width: 14rem; padding: 0;">
    <img :src="product.image_url" class="card-img-top" style="width: 100%; height: 15vw; object-fit: cover;" alt="...">
    <div class="card-body" style="text-align: left;">
      <h5 class="card-title" style="margin: 0;">{{ product.name }}</h5>
      <p class="card-text" style="margin: 0;">Rp. {{ product.price }}</p>
      <p class="card-text" style="margin: 0;">Stock: {{ product.stock }}</p>
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
