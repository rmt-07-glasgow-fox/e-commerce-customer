import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [],
    token: localStorage.getItem('access_token')
  },
  mutations: {
    updateToken (state, payload) {
      state.token = payload
    },
    updateProductList (state, payload) {
      state.productList = payload
    }
  },
  getters: {
    loginStatus (state) {
      return state.token !== null
    }
  },
  actions: {
    postLogin (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    getProducts (context, payload) {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('updateProductList', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  modules: {
  }
})
