<template>
  <div class="col-3">
    <div class="card" style="margin-top: 20px; margin-bottom: 20px;" height="300px">
      <img :src="product.image_url" class="card-img-top" height="250px">
      <div class="card-body">
      <h6 class="card-title">{{product.name}}</h6>
      <h6 class="card-text"> Rp.{{product.price}}</h6>
      <h6 class="card-text text-muted"> stock: {{product.stock}}</h6>
      <a href="#"
      class="btn btn-outline-secondary"
      @click.prevent="addToCart(product.id)"
      \style="margin-right: 10px;;">
      <small>add To Cart</small>
      </a>
      <a
      href=""
      class="btn btn-outline-danger"
      @click.prevent="addToWishlist(product.id)"
      ><small>add wishlists</small></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product'],
  methods: {
    addToCart (id) {
      this.$store.dispatch('createCarts', id)
    },
    addToWishlist (id) {
      this.$store.dispatch('createWishlists', id)
    }
  }
}
</script>

<style>

</style>
