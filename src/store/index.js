import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    errorMessage: [],
    carts: [],
    histories: []
  },
  mutations: {
    getAllProducts (state, payload) {
      state.products = payload
    },
    getAllCarts (state, payload) {
      state.carts = payload
    },
    getErrorMessage (state, payload) {
      state.errorMessage = payload
    },
    getAllHistories (state, payload) {
      state.histories = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    register (context, payload) {
      return axios({
        method: 'POST',
        url: '/register',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('getAllProducts', data)
        })
        .catch(error => {
          context.commit('getErrorMessage', error.response.data.message)
        })
    },
    addToCart (context, payload) {
      return axios({
        method: 'POST',
        url: '/cart',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          ProductId: payload.ProductId
        }
      })
    },
    fetchCart (context, payload) {
      axios({
        method: 'GET',
        url: '/cart',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('getAllCarts', data)
        })
        .catch(error => {
          context.commit('getErrorMessage', error.response.data.message)
        })
    },
    deleteCart (context, payload) {
      axios({
        method: 'DELETE',
        url: '/cart',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          ProductId: payload.ProductId
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchCart')
        })
        .catch(error => {
          context.commit('getErrorMessage', error.response.data.message)
        })
    },
    fetchHistory (context, payload) {
      axios({
        method: 'GET',
        url: '/history',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('getAllHistories', data)
        })
        .catch(error => {
          context.commit('getErrorMessage', error.response.data.message)
        })
    },
    addHistory (context, payload) {
      const addHistory = []
      for (let i = 0; i < payload.length; i++) {
        addHistory.push({
          ProductId: payload[i].ProductId,
          total: payload[i].total,
          allCartId: payload[i].id
        })
      }
      axios({
        method: 'POST',
        url: '/history',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: addHistory
      })
        .then(({ data }) => {
          console.log(data)
          router.push({ path: '/history' })
        })
        .catch(error => {
          console.log(error.response)
          context.commit('getErrorMessage', error.response.data.message)
        })
    }
  },
  modules: {
  }
})
