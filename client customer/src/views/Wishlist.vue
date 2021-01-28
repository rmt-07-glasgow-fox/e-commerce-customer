<template>
 <div class="materials">
    <NavbarCart></NavbarCart>
    <h1>Your Product Wishlist here..</h1>
    <div class="container">
      <div class="row">
        <WishlistCard
        v-for="wishlist in wishlists"
        :key="wishlist.id"
        :wishlist="wishlist"
        />
      </div>
    </div>
  </div>
</template>

<script>
import WishlistCard from '../components/WishlistCard.vue'
import NavbarCart from '../components/NavbarCart.vue'

export default {
  name: 'Wishlist',
  components: {
    WishlistCard,
    NavbarCart
  },
  computed: {
    wishlists () {
      return this.$store.state.wishlists
    }
  },
  created () {
    this.$store.dispatch('fetchWishlists')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
  h1 {
  text-align: center;
  padding: 50px;
}
</style>
