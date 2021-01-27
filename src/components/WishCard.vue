<template>
  <div class="col-3">
    <div class="card" style="margin-top: 20px; margin-bottom: 20px;" height="300px">
      <img :src="wishlist.Product.image_url" class="card-img-top" height="250px">
      <div class="card-body">
      <h6 class="card-title">{{wishlist.Product.name}}</h6>
      <h6 class="card-text"> Rp.{{wishlist.Product.price}}</h6>
      <h6 class="card-text text-muted"> stock: {{wishlist.Product.stock}}</h6>
      <a href="#"
      class="btn btn-outline-secondary"
      @click.prevent="addToCart(wishlist.Product.id)"
      \style="margin-right: 10px;;">
      Add to Cart
      </a>
      <a
      href="#"
      class="btn btn-outline-danger btn-sm"
      @click.prevent="deleting(wishlist.ProductId)"
      style="margin-right: 10px; text-decoration: none; border:none">
        <img
          src="../assets/deleted-img.png"
          style="width:25px;">
      </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WishCard',
  props: ['wishlist'],
  methods: {
    deleting (id) {
      this.$store.dispatch('deleteWishlists', id)
    },
    addToCart (id) {
      this.$store.dispatch('createCarts', id)
    }
  }
}
</script>

<style>

</style>
