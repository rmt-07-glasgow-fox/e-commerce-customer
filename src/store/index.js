import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
