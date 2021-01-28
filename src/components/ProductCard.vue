<template>
  <!-- 1 Product -->
  <div class="col-3" style="">
    <div class="card m-2 border-0 border-radius shadow">
        <img :src="product.image_url" class="card-img-top product-img" :alt="product.name">
      <div class="card-body d-flex flex-column p-1">
        <img @click="addToWishlist(product.id)" src="../assets/heart.svg" alt="" class="bottom-left-icon">
        <p>Stocks : {{product.stock}}</p>
        <h4 class="ml-2 card-text allign-left">{{product.name}}</h4>
        <h6 class="ml-2 mb-2 card-text allign-left">{{product.price}}</h6>
        <a @click.prevent="addToCart(product.id)" class="btn btn-success" href="#">Add to Cart</a>
      </div>
    </div>
  </div>
  <!-- 1 Product -->
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToWishlist (productId) {
      if (localStorage.access_token) {
        this.$store.dispatch('addToWishlists', productId)
          .then(({ data }) => {
            Swal.fire({
              icon: 'success',
              title: 'Success !',
              text: 'This item is added to Your Wishlist'
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
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You have to Login for adding products to your Wishlists'
        })
        this.$router.push('/login')
      }
    },
    addToCart (productId) {
      if (localStorage.access_token) {
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
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You have to Login for adding products to Your Cart'
        })
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style>
</style>
