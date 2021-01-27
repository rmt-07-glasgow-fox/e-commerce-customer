import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    baseURL: 'http://localhost:3000'
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_BANNERS (state, payload) {
      state.banners = payload
    }
  },
  actions: {
    async getAllProducts (context, payload) {
      try {
        const URL = this.state.baseURL + '/products/customer'
        const response = await axios.get(URL)

        console.log('>>> products : ', response.data)
        context.commit('SET_PRODUCTS', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getAllBanners (context, payload) {
      try {
        const URL = this.state.baseURL + '/banners/customer'
        const response = await axios.get(URL)

        console.log('>>> products : ', response.data)
        context.commit('SET_BANNERS', response.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
})
