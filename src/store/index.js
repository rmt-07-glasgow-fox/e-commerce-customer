import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    setCart (state, data) {
      state.cart = data
    }
  },
  actions: {
    register (context, payload) {
      return axios
        .post('/register', payload)
    },
    login (context, payload) {
      return axios
        .post('/login', payload)
    },
    fetchProducts (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => console.log(err))
    },
    fetchCart (context) {
      axios
        .get('/cart', {
          headers: { access_token: localStorage.access_token }
        })
        .then(({ data }) => {
          context.commit('setCart', data)
        })
        .catch(err => console.log(err))
    },
    add (context, payload) {
      axios
        .post(`/cart/${payload}`, {
          headers: { access_token: localStorage.access_token }
        })
    },
    patchCart (context, payload) {
      return axios
        .patch('/cart', payload, {
          headers: { access_token: localStorage.access_token }
        })
    },
    del (context, payload) {
      return axios
        .delete(`/cart/${payload}`, {
          headers: { access_token: localStorage.access_token }
        })
    }
  },
  modules: {
  }
})
