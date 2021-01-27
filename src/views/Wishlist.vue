<template>
<div v-if="this.wishlist.length === 0" id="wishlist-empty-page">
    <img id="img-empty-wishlist" src="https://static.thenounproject.com/png/768576-200.png" alt="">
    <h1>Your wishlist is empty</h1>
</div>
<div v-else>
  <div id="home" class="container-fluid d-flex">
    <div id="main" class="container-fluid">
      <WishlistCard
      v-for="(wishlist,index) in wishlist" :key="index"
      :wishlist="wishlist"
      id="product-card"/>
    </div>
  </div>
</div>
</template>

<script>
import WishlistCard from '../components/WishlistCard'
import { mapState } from 'vuex'
export default {
  name: 'Wishlist',
  components: {
    WishlistCard
  },
  methods: {
    fetchWishlist () {
      this.$store.dispatch('fetchWishlist')
    }
  },
  created () {
    this.fetchWishlist()
  },
  computed: {
    ...mapState([
      'wishlist'
    ])
  }
}
</script>

<style scoped>
#home {
  flex-direction: row;
  justify-content: space-evenly;
}

#main {
  display: flex;
  width: 75%;
  flex-direction: row;
  flex-wrap: wrap;
}
#product-card {
  width: 15rem;
  margin: 20px 50px;
}
#img-empty-wishlist {
  color: antiquewhite;
}
#wishlist-empty-page {
  flex-direction: column;
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
}
</style>
