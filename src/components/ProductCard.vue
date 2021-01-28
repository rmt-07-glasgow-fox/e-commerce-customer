<template>
  <div class="col-md-4 mb-3 mt-3">
    <div class="card">
      <img class="card-img-top" :src="product.image_url" alt="Card image cap" style="max-height:40vh">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">Price: {{ product.price }}</p>
        <p class="card-text">Stock: {{ product.stock }}</p>
        <p>{{ product.Category.name }}</p>
        <a
          class="btn btn-primary text-white"
          @click="addToCart(product.id)">
          Add to cart
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToCart (ProductId) {
      Vue.swal({
        title: `Success add ${this.product.name}!`,
        icon: 'success',
        toast: true,
        position: 'top-end',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false
      })
      this.$store.dispatch('handleAddProductToCart', {
        ProductId,
        amount: 1
      })
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
