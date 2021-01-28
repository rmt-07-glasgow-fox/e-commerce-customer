import axios from '@/api/axios.js'
import Swal from 'sweetalert2'

export default {
  async fetchCarts (context) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/cart',
        headers: { access_token: localStorage.getItem('access_token') }
      })

      context.commit('fetchCarts', data)
    } catch (err) {
      console.log(err)
    }
  },
  async addCart (context, ProductId) {
    try {
      await axios({
        method: 'POST',
        url: '/cart',
        headers: { access_token: localStorage.getItem('access_token') },
        data: { ProductId }
      })

      Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      }).fire({
        icon: 'success',
        title: 'Added to cart!'
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
  async increCart (context, id) {
    try {
      const { data } = await axios({
        method: 'PATCH',
        url: `/cart/${id}/inc`,
        headers: { access_token: localStorage.getItem('access_token') }
      })

      this.dispatch('fetchCarts')
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  },
  async decreCart (context, id) {
    try {
      const { data } = await axios({
        method: 'PATCH',
        url: `/cart/${id}/dec`,
        headers: { access_token: localStorage.getItem('access_token') }
      })

      this.dispatch('fetchCarts')
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  },
  async checkoutCart (context, id) {
    try {
      const { data } = await axios({
        method: 'PUT',
        url: `/cart/${id}`,
        headers: { access_token: localStorage.getItem('access_token') },
        data: { isPaid: true }
      })

      this.dispatch('fetchCarts')
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
  },
  async deleteCart (context, id) {
    try {
      const { data } = await axios({
        method: 'DELETE',
        url: `/cart/${id}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })

      this.dispatch('fetchCarts')
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
