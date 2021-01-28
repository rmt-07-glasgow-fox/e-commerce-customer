import axios from '@/api/axios.js'

export default {
  async fetchWishlists (context) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/wishlist',
        headers: { access_token: localStorage.getItem('access_token') }
      })

      context.commit('fetchWishlists', data)
    } catch (err) {
      console.log(err)
    }
  },
  async fetchOneWishlist (context, id) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `/wishlist/${id}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })

      context.commit('fetchOneWishlist', data)
    } catch (err) {
      console.log(err)
    }
  },
  async addWishlist (context, ProductId) {
    try {
      await axios({
        method: 'POST',
        url: '/wishlist',
        headers: { access_token: localStorage.getItem('access_token') },
        data: { ProductId }
      })
    } catch (err) {
      console.log(err)
    }
  },
  async deleteWishlist (context, id) {
    try {
      const { data } = await axios({
        method: 'DELETE',
        url: `/wishlist/${id}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })

      this.dispatch('fetchWishlists')
      console.log(data.message)
    } catch (err) {
      console.log(err)
    }
  }
}
