import axios from '@/api/axios.js'

export default {
  async fetchBanners (context) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/banner'
      })

      context.commit('fetchBanners', data)
    } catch (err) {
      console.log(err)
    }
  }
}
