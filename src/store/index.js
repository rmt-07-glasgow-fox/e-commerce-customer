import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banners: [],
    products: []
  },
  mutations: {
    SET_BANNERS (state, payload) {
      state.banners = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchBanners (context, payload) {
      axios({
        method: 'GET',
        url: '/banners'
      })
        .then(({ data }) => {
          context.commit('SET_BANNERS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
