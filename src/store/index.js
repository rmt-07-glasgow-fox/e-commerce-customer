import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, payload) {
      return axios.post('/login', payload)
    }
  }
})
