import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    readData (state, payload) {
      state.products = payload
    }
  },
  actions: {
    loginUser (context, payload) {
      axios({
        url: '/login',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    },
    registerUser (context, payload) {
      axios({
        url: '/register',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    featchReadAll (context) {
      axios({
        url: '/customer/products',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('readData', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
