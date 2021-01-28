import Vue from 'vue'
import Vuex from 'vuex'
import eCommerceAPI from '../api/eCommerce'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    products: [],
    cart: [],
    totalPrice: 0,
    balance: 0
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    setIsLoggedIn (state, payload) {
      state.isLoggedIn = payload
    },
    insertCart (state, payload) {
      state.cart = payload
    },
    setTotalPrice (state, payload) {
      state.totalPrice = payload
    },
    setBalance (state, payload) {
      state.balance = payload
    }
  },
  actions: {
    fetchProducts (context, payload) {
      eCommerceAPI.get('/products', {
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('insertProducts', data)
        })
        .catch(err => console.log(err, 'err store fetchProducts'))
    },
    fetchCart (context, payload) {
      eCommerceAPI.get(`/cart/${localStorage.id}`, {
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('insertCart', data)
        })
        .catch(err => console.log(err, 'err store fetchCart'))
    },
    checkBalance (context, payload) {
      return new Promise((resolve, reject) => {
        eCommerceAPI.get('/user/balance', {
          headers: { access_token: localStorage.access_token }
        })
          .then(({ data }) => {
            context.commit('setBalance', data.balance)
          })
          .catch(err => {
            console.log(err, 'err check balance')
          })
      })
    }
  },
  modules: {
  }
})
