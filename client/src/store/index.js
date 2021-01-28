import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../API/instance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    listCategory: ['Shoes', 'Shirts']
  },
  mutations: {
    getProduct (state, payload) {
      state.products = payload
    },
    getCart (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    loginUser (context, payload) {
      const { email, password } = payload

      axios({
        method: 'POST',
        url: '/login',
        data: { email, password }
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/products')
        })
        .catch(err => {
          const message = err.response.data.errors
          Vue.swal.fire({
            title: 'Oops!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
    },
    registerUser (context, payload) {
      const { username, email, password } = payload

      axios({
        method: 'POST',
        url: '/register',
        data: { username, email, password }
      })
        .then(() => {
          router.push('/login')
        })
        .catch(err => {
          const message = err.response.data.errors
          Vue.swal.fire({
            title: 'Oops!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
    },
    logout (context) {
      localStorage.clear()
      router.push('/')
    },
    listProduct (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('getProduct', data)
        })
        .catch(err => {
          const message = err.response.data.errors
          Vue.swal.fire({
            title: 'Oops!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
    },
    addToCart (context, payload) {
      const { id } = payload
      console.log(id, '<<<< dari store')
      axios({
        method: 'POST',
        url: '/carts',
        headers: { access_token: localStorage.access_token },
        data: { id }
      })
        .then(result => {
          Vue.swal.fire({
            title: 'Go To MyCart!',
            text: 'To Check Your Goods',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        })
        .catch(err => {
          const message = err.response.data.errors
          Vue.swal.fire({
            title: 'Oops!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
    },
    fetchCart (context) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('getCart', data)
        })
        .catch(err => {
          const message = err.response.data.errors
          Vue.swal.fire({
            title: 'Oops!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
    },
    adjustQuantity (context, payload) {
      const { quantity, id } = payload
      axios({
        method: 'PATCH',
        url: `/carts/${id}`,
        headers: { access_token: localStorage.access_token },
        data: { quantity }
      })
        .then(({ data }) => {
          Vue.swal.fire({
            title: 'Success!',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        })
        .catch(err => {
          const message = err.response.data.errors
          Vue.swal.fire({
            title: 'Oops!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
    },
    removeCart (context, payload) {
      const { id } = payload
      axios({
        method: 'DELETE',
        url: `/carts/${id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          Vue.swal.fire({
            title: ':(',
            text: data.message,
            confirmButtonText: 'Cheers..'
          })

          context.dispatch('fetchCart')
        })
        .catch(err => {
          const message = err.response.data.errors
          Vue.swal.fire({
            title: 'Oops!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        })
    }
  }
})
