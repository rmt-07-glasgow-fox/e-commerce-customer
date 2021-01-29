import axios from '@/api/axios.js'
import Swal from 'sweetalert2'

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

      // console.log(data, '<<<<< DATA')
      // console.log(id, '<<<<< id')
      context.commit('fetchOneWishlist', data)
      this.dispatch('fetchWishlists')
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

      this.dispatch('fetchWishlists')
      Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      }).fire({
        icon: 'success',
        title: 'Added to wishlist!'
      })
    } catch (err) {
      console.error(err.response.data.errors)
      const errMsg = err.response.data.errors

      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: errMsg
      })
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
      Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      }).fire({
        icon: 'success',
        title: `${data.message}`
      })
    } catch (err) {
      console.error(err.response.data.errors)
      const errMsg = err.response.data.errors

      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: errMsg
      })
    }
  }
}
