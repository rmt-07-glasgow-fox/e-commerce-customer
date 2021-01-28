import Vue from 'vue'
import Vuex from 'vuex'
import ecommerceServer from '../api/ecommerce-server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    products: [],
    carts: [],
    totalPrice: 0
  },
  mutations: {
    isLogin (state, payload) {
      if (localStorage.access_token) {
        state.login = true
      }
    },
    logout (state) {
      state.login = false
    },
    statusLogin (state) {
      if (localStorage.access_token) {
        state.login = true
      } else {
        state.login = false
      }
    },
    insertProducts (state, payload) {
      state.products = payload
    },
    insertCarts (state, payload) {
      state.carts = payload
    },
    total (state, payload) {
      state.totalPrice += payload
    }
  },
  actions: {
    LoginPost (context, payload) {
      return ecommerceServer.post('/login', payload)
    },
    fetchProducts (context) {
      ecommerceServer.get('/products')
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCart (context) {
      ecommerceServer.get('/carts', {
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          context.commit('insertCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      ecommerceServer.post('/carts', payload, {
        headers: { access_token: localStorage.access_token }
      })
        .then(data => {
          console.log('success')
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateQuantity (context, payload) {
      return ecommerceServer.patch(`/carts/${payload.ProductId}`, payload, {
        headers: { access_token: localStorage.access_token }
      })
    },
    deleteCart (context, payload) {
      return ecommerceServer.delete('/carts', {
        data: {
          ProductId: payload
        },
        headers: { access_token: localStorage.access_token }
      })
    },
    registerPost (context, payload) {
      return ecommerceServer.post('/register', payload)
    }
  }
})
