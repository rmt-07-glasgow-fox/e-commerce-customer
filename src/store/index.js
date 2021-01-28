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
    productDetail: '',
    loginStatus: '',
    loginPage: 'login',
    allOrder: [],
    orderDetail: '',
    sum: 0
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
    },
    changeLoginStatus (state, payload) {
      state.loginStatus = payload
    },
    intoLoginPage (state, payload) {
      state.loginPage = payload
    },
    allOrderCart (state, payload) {
      state.allOrder = payload
    },
    summary (state, payload) {
      state.sum = payload
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
          console.log(data)
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
          router.push('/')
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
    },

    getAllOrder (context) {
      axios
        .get('/carts', { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          context.commit('allOrderCart', data)
        })
        .catch(err => {
          if (err.response.data.message === 'You not Unauthorized') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
        })
    },

    createOrder (context, payload) {
      const { quantity, ProductId } = payload
      axios({
        method: 'POST',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity,
          ProductId
        }
      })
        .then(data => {
          Swal.fire({
            icon: 'success',
            title: 'Success Add to Cart'
          })
          this.dispatch('getAllProduct')
          this.dispatch('getAllOrder')
        })
        .catch(err => {
          if (err.response.data.message === 'You not Unauthorized') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
          if (err.response.data.message === 'YStock Is Out') {
            Swal.fire({
              icon: 'error',
              title: 'Stock Is Out',
              text: err.response.data.message
            })
          }
        })
    },

    changeQti (context, payload) {
      const { id, quantity } = payload
      axios({
        method: 'PUT',
        url: `/carts/${id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Order now Updated'
          })
          this.dispatch('getAllOrder')
        })
        .catch(err => {
          if (err.response.data.message === 'You not Unauthorized') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
          if (err.response.data.message === 'Stock Is Out') {
            Swal.fire({
              icon: 'error',
              title: 'Stock Is Out',
              text: err.response.data.message
            })
          }
        })
    },

    deleteOrder (context, id) {
      axios
        .delete(`/carts/${id}`, { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Carts Has been Deleted'
          })
          this.dispatch('getAllOrder')
        })
        .catch(err => {
          if (err.response.data.message === 'You not Unauthorized') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
        })
    }
  }
})
