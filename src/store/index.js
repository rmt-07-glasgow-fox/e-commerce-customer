import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

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
          context.commit('setEmail', data.email)
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data)
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
          console.log(err.response.data)
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
      axios({
        url: '/carts/' + payload,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
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
