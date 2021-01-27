import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [],
    token: localStorage.getItem('access_token'),
    userEmail: localStorage.getItem('email'),
    cartItems: []
  },
  mutations: {
    updateToken (state, payload) {
      state.token = payload
    },
    updateProductList (state, payload) {
      state.productList = payload
    },
    updateCartItems (state, payload) {
      state.cartItems = payload
    },
    updateEmail (state, payload) {
      state.userEmail = payload
    }
  },
  getters: {
    loginStatus (state) {
      return state.token !== null
    },
    totalCartItems (state) {
      return state.cartItems.length
    }
  },
  actions: {
    postLogin (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          localStorage.email = data.email
          context.commit('updateEmail', data.email)
          router.push('/')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: err.response.data.errors[0],
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            position: 'top-right'
          })
        })
    },
    postRegister (context, payload) {
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          localStorage.email = data.email
          context.commit('setEmail', data.email)
          router.push('/')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops',
            text: err.response.data.errors[0],
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            position: 'top-right'
          })
        })
    },
    getProducts (context, payload) {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('updateProductList', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    getCartItems (context, payload) {
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('updateCartItems', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    addToCart (context, payload) {
      axios({
        url: '/carts',
        method: 'POST',
        data: {
          ProductId: payload.ProductId,
          amount: payload.amount
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: ' ',
            text: 'Item has been added to cart',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            position: 'top-right'
          })
          context.dispatch('getCartItems')
        })
        .catch(err => {
          if (err.response.data.errors[0] === 'Invalid Token') {
            router.push('/login')
          }
          console.log(err.response.data)
        })
    },
    updateAmount (context, payload) {
      axios({
        url: '/carts/' + payload.id,
        method: 'PATCH',
        data: {
          ProductId: payload.ProductId,
          amount: payload.amount
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('getCartItems')
        })
        .catch(err => {
          console.log(err.response.data)
          context.dispatch('getCartItems')
        })
    },
    deleteCartItem (context, payload) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You might regret this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            return axios({
              url: '/carts/' + payload,
              method: 'DELETE',
              headers: {
                access_token: localStorage.access_token
              }
            })
          }
        })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: ' ',
            text: 'Item has been removed from cart',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            position: 'top-right'
          })
          context.dispatch('getCartItems')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  modules: {
  }
})
