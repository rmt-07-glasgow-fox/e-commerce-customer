export default {
  fetchWishlists (state, payload) {
    state.wishlists = payload
  },
  fetchOneWishlist (state, payload) {
    state.wishlist = payload
  }
}
