import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_CART (state, payload) {
      state.cart = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios.post('/login', payload)
    },
    register (context, payload) {
      return axios.post('/register', payload)
    },
    async fetchAllProducts (context) {
      try {
        const response = await axios.get('/products')
        console.log(response)
        const payload = response.data
        context.commit('SET_PRODUCTS', payload)
      } catch (err) {
        console.log(err)
      }
    },
    async addCart (context, payload) {
      try {
        const response = await axios.post('/cart', payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async getAllCart (context) {
      try {
        const response = await axios.get('/cart', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        const payload = response.data
        context.commit('SET_CART', payload)
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async deleteCart (context, payload) {
      const id = payload
      try {
        const response = await axios.delete('/cart/' + id, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async updateCart (context, payload) {
      const { id, qty } = payload
      try {
        const response = await axios.patch('/cart/' + id, { qty }, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    async checkout (context, payload) {
      const id = payload
      try {
        return axios.delete('cart/checkout/' + id, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        // console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
})
