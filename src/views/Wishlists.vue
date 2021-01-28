<template>
  <div class="wishlists">
    <Navbar />
    <h1 class="mt-5 pt-5 mb-4 ml-5 text-left">Your Wishlists :</h1>
    <div v-if="wishlists">
      <div class="container mt-4">
        <div class="row">
          <WishlistCard v-for="wishlist in wishlists" :key="wishlist.id" :wishlist="wishlist" />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container">
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import WishlistCard from '../components/WishlistCard'
export default {
  name: 'Wishlists',
  components: {
    Navbar,
    WishlistCard
  },
  computed: {
    wishlists () {
      if (this.$store.state.wishlists.length === 0) {
        return null
      } else {
        return this.$store.state.wishlists
      }
    }
  },
  methods: {
    getWishlists () {
      this.$store.dispatch('fetchWishlists')
    }
  },
  created () {
    this.getWishlists()
  }
}
</script>

<style>
</style>
