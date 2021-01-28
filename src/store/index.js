import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/ecommerce-server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    products: [],
    carts: []
  },
  mutations: {
    loggedIn (state) {
      if (localStorage.access_token) {
        state.loggedIn = true
      } else {
        state.loggedIn = false
      }
    },
    insertProduct (state, payload) {
      state.products = payload
    },
    insertCart (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    loginSubmit (context, payload) {
      return axios
        .post('/login', payload)
    },
    registerSubmit (context, payload) {
      return axios
        .post('/register', payload)
    },
    fetchProduct (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('insertProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      return axios
        .post('/carts', { ProductId: payload }, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    },
    fetchCart (context) {
      axios
        .get('/carts', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.commit('insertCart', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    patchQuantity (context, payload) {
      return axios
        .patch('/carts', payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
    },
    deleteCart (context, payload) {
      return axios
        .delete('/carts', {
          data: {
            ProductId: payload
          },
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(data => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
