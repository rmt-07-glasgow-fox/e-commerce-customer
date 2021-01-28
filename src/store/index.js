import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allProduct: [],
    productId: '',
    oneProduct: '',
    loginStatus: '',
    loginPage: 'login',
    allOrder: [],
    oneOrder: '',
    sum: 0
  },
  mutations: {
    insertAllProduct (state, payload) {
      state.allProduct = payload
    },
    insertProductId (state, payload) {
      state.productId = payload
    },
    insertOneProduct (state, payload) {
      state.oneProduct = payload
    },
    changeLoginStatus (state, payload) {
      state.loginStatus = payload
    },
    changeLoginPage (state, payload) {
      state.loginPage = payload
    },
    insertAllOrder (state, payload) {
      state.allOrder = payload
    },
    changeSum (state, payload) {
      state.sum = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: '/loginUser',
        data: {
          email, password
        }
      })
        .then(data => {
          localStorage.setItem('access_token', data.data.access_token)
          Swal.fire({
            icon: 'success',
            title: 'Login Success'
          })
          this.commit('changeLoginStatus', 'true')
          this.dispatch('getAllProduct')
          this.dispatch('getAllOrder')
          router.push('/')
        })
        .catch(err => {
          if (err.response.data.message === 'Invalid email/password') {
            Swal.fire({
              icon: 'error',
              title: 'Wrong Login Info',
              text: err.response.data.message
            })
          } else if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
        })
    },
    register (context, payload) {
      const { email, password, name } = payload
      axios({
        method: 'POST',
        url: '/register',
        data: {
          email, password, name
        }
      })
        .then(data => {
          localStorage.setItem('access_token', data.data.access_token)
          Swal.fire({
            icon: 'success',
            title: 'Register Success'
          })
          this.commit('changeLoginStatus', 'true')
          this.dispatch('getAllProduct')
          this.dispatch('getAllOrder')
          router.push('/')
        })
        .catch(err => {
          if (err.response.data.message === 'Invalid email/password') {
            Swal.fire({
              icon: 'error',
              title: 'Wrong Login Info',
              text: err.response.data.message
            })
          } else if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Please fill all required field',
              text: err.response.data.errors[0]
            })
          }
        })
    },
    getAllProduct (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('insertAllProduct', data)
        })
        .catch(err => {
          if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
        })
    },

    createOrder (context, payload) {
      const { count, productId } = payload
      axios({
        method: 'POST',
        url: '/orders',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          count, productId
        }
      })
        .then(data => {
          Swal.fire({
            icon: 'success',
            title: 'Product Added to Cart'
          })
          this.dispatch('getAllProduct')
          this.dispatch('getAllOrder')
        })
        .catch(err => {
          if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
          if (err.response.data.message === 'Order count exceed product stock!') {
            Swal.fire({
              icon: 'error',
              title: 'STOP',
              text: err.response.data.message
            })
          }
          Swal.fire({
            icon: 'error',
            title: 'Stop!',
            text: err.response.data.errors[0]
          })
        })
    },
    getAllOrder (context) {
      axios
        .get('/orders', { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          context.commit('insertAllOrder', data)
        })
        .catch(err => {
          if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
        })
    },

    changeOrderQty (context, payload) {
      const { id, count } = payload
      axios({
        method: 'PATCH',
        url: `/orders/${id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          count
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Order Updated'
          })
          this.dispatch('getAllOrder')
        })
        .catch(err => {
          if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
          if (err.response.data.message === 'Order count exceed product stock!') {
            Swal.fire({
              icon: 'error',
              title: 'STOP',
              text: err.response.data.message
            })
          }
          Swal.fire({
            icon: 'error',
            title: 'STOP',
            text: err.response.data.errors[0]
          })
        })
    },
    deleteOrder (context, id) {
      axios
        .delete(`/orders/${id}`, { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Order Deleted'
          })
          this.dispatch('getAllOrder')
        })
        .catch(err => {
          if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
        })
    },
    deleteAllOrder (context, id) {
      axios
        .delete('/orders', { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Success'
          })
          this.dispatch('getAllOrder')
        })
        .catch(err => {
          if (err.response.data.message === 'You\'re unauthorized to do this') {
            Swal.fire({
              icon: 'error',
              title: 'Unauthorized',
              text: err.response.data.message
            })
          }
        })
    },
    sendReceipt (context, payload) {
      const { totalPrice } = payload
      axios({
        method: 'POST',
        url: '/receipt',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          totalPrice: totalPrice
        }
      })
        .then(({ data }) => {
          this.dispatch('deleteAllOrder')
        })
        .catch(err => {
          console.log(totalPrice)
          console.log(err.response)
          if (err.response.data.message === 'You\'re unauthorized to do this') {
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
