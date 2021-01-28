import axios from '@/api/axios.js'
import router from '@/router/index.js'
import Swal from 'sweetalert2'

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
  login (context, payload) {
    Swal.queue([
      {
        title: 'Now Loading...',
        text: 'Get your coffee because we are logging in you up!',
        showConfirmButton: false,
        didOpen: async () => {
          Swal.showLoading()
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
            Swal.mixin({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              timer: 3000
            }).fire({
              icon: 'success',
              title: 'Welcome!'
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
    ])
  },

  register (context, payload) {
    Swal.queue([
      {
        title: 'Now Loading...',
        text: 'Get your coffee because we are registering you up!',
        showConfirmButton: false,
        didOpen: async () => {
          Swal.showLoading()
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
            console.error(err.response.data.errors)
            const errMsg = err.response.data.errors

            Swal.fire({
              icon: 'error',
              title: 'Oops..',
              text: errMsg[0]
            })
          }
        }
      }
    ])
  },

  logout (context) {
    localStorage.clear()
    context.commit('isLogin', false)
    if (router.currentRoute.name !== 'Home') router.replace({ name: 'Home' })
  }
}
