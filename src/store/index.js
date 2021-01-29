import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const baseUrl = 'https://ecommerce-stnrvn.herokuapp.com'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {},
    carts: {}
  },
  mutations: {
    passingProducts (state, payload) {
      state.products = payload
    },
    passingCarts (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    register ({ commit }, payload) {
      axios({
        method: 'POST',
        url: `${baseUrl}/register`,
        data: payload
      })
    },
    login ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: `${baseUrl}/login`,
        data: payload
      })
    },
    fetchProducts ({ commit }) {
      axios({
        method: 'GET',
        url: `${baseUrl}/productCustomer`,
        headers: {
          access_token: localStorage.access_token
        }
      }).then(({ data }) => {
        commit('passingProducts', data)
      }).catch(err => {
        console.log(err)
      })
    },
    addCart ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: `${baseUrl}/cartProduct`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          productId: payload
        }
      }).then(({ data }) => {
        console.log(data, 'berhasil update')
      }).catch(() => {
        console.log(payload, 'gagal update')
      })
    },
    fetchCarts ({ commit }) {
      axios({
        method: 'GET',
        url: `${baseUrl}/cartProduct`,
        headers: {
          access_token: localStorage.access_token
        }
      }).then(({ data }) => {
        commit('passingCarts', data)
        console.log(data, 'berhasil gan!')
      }).catch(err => {
        console.log(err)
      })
    },
    updateCart ({ commit }, payload) {
      const id = payload.id
      console.log(id, 'ini id product')
      console.log(payload.quantity)
      axios({
        method: 'PUT',
        url: `${baseUrl}/cartProduct/${id}`,
        data: {
          quantity: payload.quantity
        },
        headers: {
          access_token: localStorage.access_token
        }
      }).then(({ data }) => {
        this.dispatch('fetchCarts')
        console.log(data, 'berhasil update')
      }).catch(() => {
        console.log(payload, 'gagal update')
      })
    },
    deleteCart ({ commit }, payload) {
      return axios({
        method: 'DELETE',
        url: `${baseUrl}/cartProduct/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
    }
  },
  modules: {
  }
})
