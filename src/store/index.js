import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'
import router from '../router/index'
import VueCarousel from 'vue-carousel'

Vue.use(Vuex)
Vue.use(VueCarousel)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    banners: []
  },
  mutations: {
    fetchAllProducts (state, payload) {
      state.products = payload
    },
    fetchAllBanners (state, payload) {
      state.banners = payload
    },
    fetchAllCarts (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    redirectHome (context, payload) {
      router.push('/')
    },
    redirectMyCart (context, payload) {
      router.push('/mycart')
    },
    redirectProducts (context, payload) {
      router.push('/products')
    },
    redirectLogin (context, payload) {
      router.push('/login')
    },
    redirectRegister (context, payload) {
      router.push('/register')
    },

    login (context, payload) {
      axios
        .post('/login', payload)
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/products')
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    logout (context, payload) {
      localStorage.clear()
      router.push('/')
    },

    register (context, payload) {
      axios
        .post('/register', payload)
        .then(response => {
          router.push('/login')
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    fetchAllProducts (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/products', { headers })
        .then(response => {
          context.commit('fetchAllProducts', response.data)
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    fetchAllBanners (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/banners', { headers })
        .then(response => {
          context.commit('fetchAllBanners', response.data)
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    fetchAllCarts (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/carts', { headers })
        .then(response => {
          context.commit('fetchAllCarts', response.data)
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    addToCart (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .post('/carts', { id: payload }, { headers })
        .then(response => {
          Swal.fire({
            title: 'Added!',
            text: 'Product added to cart!',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
        })
        .catch(err => {
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    increase (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .patch('/carts/increase', { id: payload }, { headers })
        .then(response => {
          context.dispatch('fetchAllCarts')
        })
        .catch(err => {
          let errors = err.response.data.message
          if (!errors) errors = 'Make sure you wrote down all the correct information!'
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    decrease (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .patch('/carts/decrease', { id: payload }, { headers })
        .then(response => {
          context.dispatch('fetchAllCarts')
        })
        .catch(err => {
          let errors = err.response.data.message
          if (!errors) errors = 'Make sure you wrote down all the correct information!'
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    },

    removeItem (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .delete('/carts', { data: { id: payload }, headers })
        .then(response => {
          Swal.fire({
            title: 'Removed!',
            text: 'Item removed from cart',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          context.dispatch('fetchAllCarts')
        })
        .catch(err => {
          console.log(err)
          const errors = err.response.data.message
          Swal.fire({
            title: 'Ops...',
            text: errors,
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        })
    }
  },
  modules: {
  }
})
