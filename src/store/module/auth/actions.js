import axios from '@/api/axios.js'
import router from '@/router/index.js'

export default {
  async fetchUserInfo (context) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: '/getuser',
        headers: { access_token: localStorage.getItem('access_token') }
      })

      context.commit('fetchUserInfo', data)
    } catch (err) {
      console.log(err)
    }
  },
  async login (context, payload) {
    try {
      const { data } = await axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })

      localStorage.setItem('access_token', data.access_token)
      context.commit('isLogin', true)
      router.replace('/')
    } catch (err) {
      console.log(err)
    }
  },

  async register (context, payload) {
    try {
      await axios({
        method: 'POST',
        url: '/register',
        data: {
          firstname: payload.firstname,
          lastname: payload.lastname,
          email: payload.email,
          password: payload.password
        }
      })

      await context.dispatch('login', payload)
    } catch (err) {
      console.log(err)
    }
  },

  logout (context) {
    localStorage.clear()
    context.commit('isLogin', false)
    if (router.currentRoute.name !== 'Home') router.replace({ name: 'Home' })
  }
}
