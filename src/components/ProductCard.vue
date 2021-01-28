<template>

<div class="card col-3 mt-5" style="width: 18rem; background-color: black;">
  <img :src="product.imageUrl" style="max-width: 250px; max-height: 250px;"
  class="card-img-top p-2 pt-4 mx-auto" alt="...">
  <div class="card-body p-3">
    <h5 class="card-title text-light">{{ product.name }}</h5>
    <p class="card-text text-light m-0">Genre: {{ product.genre }}</p>
    <p class="card-text text-light m-0">Price: {{ rupiahFormat(product.price) }}</p>
    <br>
    <button @click.prevent="toCart(product.id)" class="btn btn-light">Add to Cart</button>
  </div>
</div>

</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    getProductId (currentProductId) {
      this.$store.commit('insertProductId', currentProductId)
    },
    deleteOneProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    rupiahFormat (value) {
      return 'Rp. ' + value.toLocaleString()
    },
    toCart (productId) {
      if (!localStorage.access_token) {
        this.$router.push('/myCart')
      } else {
        const payload = {
          count: 1,
          productId
        }
        this.$store.dispatch('createOrder', payload)
      }
    }
  }
}
</script>

<style>

</style>
