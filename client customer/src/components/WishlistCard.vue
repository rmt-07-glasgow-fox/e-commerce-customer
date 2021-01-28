<template>
<div class="col-3">
    <div class="card">
      <a href="" id="material-card" @click.prevent="toDetail(wishlist.Material.id)">
        <img class="card-img-top" :src="wishlist.Material.image_url" alt="Card image cap" />
        <div class="card-body">
        <h5 class="card-title">{{ wishlist.Material.name }}</h5>
        </div>
        <p id="material-price">Rp. {{ wishlist.Material.price }}</p>
      </a>
      <a href="" id="remove" @click.prevent="deleteWishlist(wishlist.id)">Remove from Wishlist</a>
    </div>
    </div>
</template>

<script>
export default {
  name: 'WishlistCard',
  props: ['wishlist'],
  methods: {
    toDetail (id) {
      this.$router.push(`/material/${id}`)
    },
    deleteWishlist (id) {
      this.$store.dispatch('deleteWishlist', id)
    }
  }
}
</script>

<style scoped>
    img {
      height: 200px;
      object-fit: cover;
    }

    .col-3 {
      margin-bottom: 40px;
    }

    .card-body {
      display: flex;
      justify-content: space-evenly;
      align-content: center;
    }

    #material-card {
      text-decoration: none;
    }

    #material-price {
      text-align: center;
    }

    .card {
      background-color: khaki;
    }

    .card-title, #material-price {
      color: black;
    }

    #remove {
        text-decoration: none;
        color: red;
        text-align: center;
        padding-bottom: 10px;
    }
</style>
