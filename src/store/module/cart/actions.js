import axios from '@/api/axios.js'

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
  }
}
