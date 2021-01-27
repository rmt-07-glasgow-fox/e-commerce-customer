import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productId: '',
    productDetail: ''
  },
  mutations: {
    showAllProducts (state, payload) {
      state.products = payload
    },
    putProductId (state, payload) {
      state.productId = payload
    },
    putProductDetail (state, payload) {
      state.productDetail = payload
    }
  },
  actions: {
    getAllProduct (context) {
      axios
        .get(
          '/products',
          {
            headers: {
              access_token: localStorage.access_token
            }
          }
        )
        .then(({ data }) => {
          context.commit('showAllProducts', data)
        })
        .catch(err => console.log(err))
    },
    getById (context, id) {
      axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('putProductDetail', data)
        })
        .catch(err => console.log(err))
    },
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
    },
    registerHandler (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          Swal.fire({
            icon: 'success',
            title: 'Register Success'
          })
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
          if (err.response.data.message === 'Invalid Email / Password') {
            Swal.fire({
              icon: 'error',
              title: 'Please Check:',
              text: err.response.data.message
            })
          }
        })
    }
  }
})
