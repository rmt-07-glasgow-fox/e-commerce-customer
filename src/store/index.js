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
    price: null
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
        url: '/carts',
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
          swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Current item is successfully added 1',
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
          swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Current item is successfully trhowed 1',
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
    totalPrice (context, payload) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          let total = null
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
