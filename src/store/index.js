import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    loginHandle (context, payload) {
      axios({
        method: 'POST',
        url: '/customer',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          Swal.fire({
            icon: 'success',
            title: 'Login Success'
          })
          router.push('/home')
        })
        .catch(err => {
          console.log(err)
          if (err.response.data.message === 'Invalid Email / Password') {
            Swal.fire({
              icon: 'error',
              title: 'Wrong Email/Password',
              text: err.response.data.message
            })
          }
        })
    }
  }
})
