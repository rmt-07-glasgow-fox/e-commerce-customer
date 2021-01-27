import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    carts: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axios({
        method: 'get',
        url: '/products/all'
      })
        .then((response) => {
          commit('setProducts', response.data)
        })
        .catch((err) => {
          throw err
        })
    },
    fetchBanners ({ commit }) {
      axios({
        method: 'get',
        url: '/banners/all'
      })
        .then((response) => {
          commit('setBanners', response.data)
        })
        .catch((err) => {
          throw err
        })
    },
    fetchCarts ({ commit }) {
      axios({
        method: 'get',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          commit('setCarts', response.data)
        })
        .catch((err) => {
          throw err
        })
    }
  },
  modules: {
  }
})
