import axios from '@/api/axios.js'

export default {
  async fetchCategories (context) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/category'
      })

      context.commit('fetchCategories', data)
    } catch (err) {
      console.log(err)
    }
  }
}
