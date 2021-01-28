<template>
  <div class="col-3 wishlistCard">
    <div class="card m-2 border-primary">
      <img class="card-img-top product-img" :src="wishlist.Product.image_url" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{wishlist.Product.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Stock : {{wishlist.Product.stock}}</h6>
        <p class="card-text">{{wishlist.Product.price}}</p>
        <button @click.prevent="removeFromWishlists(wishlist.id)" class="btn btn-warning">Remove</button>
        <button @click="addToCarts(wishlist.Product.id)" class="btn btn-success mt-4">Add to Your Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'WishlistCard',
  props: ['wishlist'],
  methods: {
    removeFromWishlists (wishlistId) {
      this.$store.dispatch('removeFromWishlists', wishlistId)
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Success !',
            text: 'This item has Removed from Your Wishlist'
          })
          this.$store.dispatch('fetchWishlists')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
          console.log(err)
        })
    },
    addToCarts (productId) {
      this.$store.dispatch('addToCarts', productId)
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Success !',
            text: 'This item is added to Your Cart'
          })
          this.$store.dispatch('fetchCarts')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
