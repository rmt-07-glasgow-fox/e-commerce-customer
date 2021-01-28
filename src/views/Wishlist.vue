<template>
  <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="mb-3">
            <div class="pt-4">
              <h5 class="mb-4">Wishlist (<span>{{ wishlist.length }}</span> items)</h5>
              <ListWishlist
              v-for="item in wishlist" :key="item.id"
              :item='item'
              />
              <hr class="mb-4">
              <p class="text-dark mb-0"><i class="fas fa-info-circle mr-1"></i> Don't wait until your favorite item is sold out</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
        </div>
      </div>
  </div>
</template>

<script>
import ListWishlist from '../components/ListWishlist'
export default {
  name: 'Wishlist',
  components: {
    ListWishlist
  },
  computed: {
    wishlist () {
      return this.$store.state.wishlist
    }
  },
  created () {
    this.$store.dispatch('fetchWishlist')
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
