<template>
  <div class="row">
    <div class="col-12">
      <h3 class="text-success">Wishlist</h3>
      <hr>
      <h4 v-if="wishlists.length === 0">You Don't Have Any Wishlists</h4>
      <b-card-group columns class="text-center">
        <CardWishlist
        v-for="wishlist in wishlists"
        :key="wishlist.id"
        :wishlist="wishlist"
        />
      </b-card-group>
    </div>
  </div>
</template>

<script>
import CardWishlist from '../components/CardWishlist'
export default {
  name: 'Wishlist',
  components: {
    CardWishlist
  },
  computed: {
    wishlists () {
      return this.$store.state.wishlists
    }
  }
}
</script>
