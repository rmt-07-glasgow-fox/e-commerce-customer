<template>
  <div class="col-3" style="margin-bottom: 12px">
    <div class="card">
      <img class="card-img-top" style="height: 53%; object-fit: contain" :src="wish.Product.image_url" alt="Card image cap">
      <div class="card-body" style="text-align: left">
        <h5 class="card-title" style="text-align: center">{{ wish.Product.name }}</h5>
        <p class="card-text">Price: <span style="float: right">Rp {{ wish.Product.price }}</span></p>
        <p class="card-text">Stock: <span style="float: right">{{ wish.Product.stock }}</span></p>
        <button @click="removeWishlist(wish.id)" class="btn btn-danger">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  name: 'Wishlist',
  props: ['wish'],
  methods: {
    removeWishlist (id) {
      axios({
        method: 'DELETE',
        url: `/wishlist/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          this.$store.dispatch('fetchWishlist')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
