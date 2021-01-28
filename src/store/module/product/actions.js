import axios from '@/api/axios.js'

export default {
  async fetchProducts (context) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/product'
      })

      context.commit('fetchProducts', data)
    } catch (err) {
      console.log(err)
    }
  }
}
