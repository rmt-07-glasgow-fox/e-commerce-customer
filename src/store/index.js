import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    loginData: {},
    userData: {},
    cartData: [],
    wishlist: []
  },
  mutations: {
    inputProducts (state, payload) {
      state.products = payload
    },
    inputLogin (state, payload) {
      state.loginData = payload
    },
    inputUser (state, payload) {
      state.userData = payload
    },
    inputCartData (state, payload) {
      state.cartData = payload
    },
    inputWishlist (state, payload) {
      state.wishlist = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        method: 'get',
        url: '/customer/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('inputProducts', response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    register (context, payload) {
      axios({
        method: 'POST',
        // url: 'https://secret-river-34250.herokuapp.com/login',
        url: '/register',
        data: payload
      })
        .then(response => {
          this.dispatch('fetchProducts')
          router.push('/login')
          swal({
            title: 'You have successfully registered',
            text: 'Please login',
            icon: 'success'
          })
        })
        .catch(err => {
          swal({
            title: 'Oops! something`s wrong',
            text: 'Please try again or use different e-mail',
            icon: 'error'
          })
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        // url: 'https://secret-river-34250.herokuapp.com/login',
        url: '/login',
        data: payload
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          localStorage.setItem('user_status', 'loggedIn')
          console.log(localStorage)
          this.dispatch('fetchProducts')
          router.push('/')
          swal({
            title: 'Welcome to e-commerce CMS',
            text: 'Successfully logged in',
            icon: 'success'
          })
        })
        .catch(err => {
          swal({
            title: 'Invalid email or password',
            text: 'Please try again',
            icon: 'error'
          })
          console.log(err)
        })
    },
    logout (context, payload) {
      swal({
        title: 'Are you sure you want to logout?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            localStorage.clear()
            router.push({ name: 'Login' })
            swal('You have been successfully logged out', {
              icon: 'success'
            })
          }
        })
    },
    fetchCart (context, payload) {
      axios({
        method: 'get',
        url: '/cart/',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('inputCartData', response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addToCart (context, payload) {
      axios({
        method: 'POST',
        url: '/cart/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          this.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    removeCart (context, payload) {
      axios({
        method: 'DELETE',
        url: '/cart/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          this.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addQty (context, payload) {
      axios({
        method: 'PATCH',
        url: '/cart/' + payload + '/add',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          this.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    removeQty (context, payload) {
      axios({
        method: 'PATCH',
        url: '/cart/' + payload + '/remove',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          this.dispatch('fetchCart')
        })
        .catch(err => {
          swal('Minimum quantity reached', {
            icon: 'error'
          })
          console.log(err)
        })
    },
    fetchWishlist (context, payload) {
      axios({
        method: 'GET',
        url: '/wishlist',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('inputWishlist', response.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addToWishlist (context, payload) {
      axios({
        method: 'POST',
        url: '/wishlist/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          this.dispatch('fetchWishlist')
        })
        .catch(err => {
          swal('The product is already on your wishlist', {
            icon: 'error'
          })
          console.log(err)
        })
    },
    removeWishlist (context, payload) {
      axios({
        method: 'DELETE',
        url: '/wishlist/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          this.dispatch('fetchWishlist')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
