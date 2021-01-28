import Vue from 'vue'
import Vuex from 'vuex'
import auth from './stores/auth'
import product from './stores/product'
import cart from './stores/cart'
import wishlist from './stores/wishlist'
import transaction from './stores/transaction'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    product,
    cart,
    wishlist,
    transaction
  },
  state: {
    token_nikecommerce: localStorage.getItem('access_token')
  },
  getters: {
    isAuth: state => {
      return state.token_nikecommerce !== null && state.token_nikecommerce !== 'null'
    }
  },
  mutations: {
    SET_TOKEN (state, payload) {
      state.token_nikecommerce = payload
    }
  }
})

export default store
