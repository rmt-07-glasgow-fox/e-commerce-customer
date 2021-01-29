export default {
  fetchWishlists (state) {
    return state.wishlists
  },
  fetchTotalWishlists (state) {
    const wishlists = state.wishlists
    let temp = 0

    for (let i = 0; i < wishlists.length; i++) {
      temp++
    }

    return temp
  },
  fetchOneWishlist (state) {
    return state.wishlist
  }
}
