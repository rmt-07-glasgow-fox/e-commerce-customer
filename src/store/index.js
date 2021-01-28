import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    histories: [],
    price: 0
  },
  mutations: {
    storeProducts (state, payload) {
      state.products = payload
    },
    storeCarts (state, payload) {
      state.carts = payload
    },
    setPrice (state, payload) {
      state.price = payload
    },
    storeHistories (state, payload) {
      state.histories = payload
    }
  },
  actions: {
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
        .then(response => {
          console.log(response.data)
          router.push('/login')
        })
        .catch(err => {
          const errorMsg = err.response.data.errors.join(' ')
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMsg
          })
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')
        })
        .catch(err => {
          const errorMsg = err.response.data.errors.join(' ')
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMsg
          })
        })
    },
    logout (context, payload) {
      localStorage.clear()
      router.push('/login')
    },
    getAllProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('storeProducts', response.data)
        })
        .catch(err => {
          const errorMsg = err.response.data.errors.join(' ')
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMsg
          })
        })
    },
    fetchCarts (context) {
      axios({
        method: 'GET',
        url: '/carts/unpaid',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('storeCarts', response.data)
        })
        .catch(err => {
          const errorMsg = err.response.data.errors.join(' ')
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMsg
          })
        })
    },
    addCart (context, ProductId) {
      axios({
        method: 'POST',
        url: '/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          ProductId
        }
      })
        .then(response => {
          context.dispatch('fetchCarts')
          swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Current item is successfully added to cart',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          const errorMsg = err.response.data.errors.join(' ')
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMsg
          })
        })
    },
    deleteCart (context, id) {
      axios({
        method: 'DELETE',
        url: `/carts/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.dispatch('fetchCarts')
          context.dispatch('totalPrice')
        })
        .catch(err => {
          const errorMsg = err.response.data.errors.join(' ')
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMsg
          })
        })
    },
    increaseQuantity (context, id) {
      axios({
        method: 'PATCH',
        url: `/carts/${id}/plus`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.dispatch('fetchCarts')
          context.dispatch('totalPrice')
          swal.fire({
            position: 'top',
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch(err => {
          const errorMsg = err.response.data.errors.join(' ')
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMsg
          })
        })
    },
    decreaseQuantity (context, id) {
      axios({
        method: 'PATCH',
        url: `/carts/${id}/min`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.dispatch('fetchCarts')
          context.dispatch('totalPrice')
          swal.fire({
            position: 'top',
            icon: 'success',
            title: response.data.message,
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch(err => {
          const errorMsg = err.response.data.errors.join(' ')
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMsg
          })
        })
    },
    totalPrice (context, payload) {
      axios({
        method: 'GET',
        url: '/carts/unpaid',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          let total = 0
          response.data.forEach(el => {
            total += el.quantity * el.Product.price
          })
          context.commit('setPrice', total)
        })
        .catch(err => {
          const errorMsg = err.response.data.errors.join(' ')
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: errorMsg
          })
        })
    },
    buy (context, payload) {
      axios({
        method: 'PUT',
        url: '/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.dispatch('fetchCarts')
          swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Thank you, your transaction is done',
            showConfirmButton: false,
            timer: 1500
          })
          context.dispatch('totalPrice')
          router.push('/carts')
        })
        .catch(console.log)
    },
    fetchHistories (context) {
      axios({
        method: 'GET',
        url: '/carts/paid',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('storeHistories', response.data)
        })
        .catch(console.log)
    }
  },
  getters: {
    unpaid: state => {
      return state.carts.filter((value) => {
        return value.status === 'unpaid'
      })
    },
    paid: state => {
      return state.carts.filter((value) => {
        return value.status === 'paid'
      })
    }
  }
})
