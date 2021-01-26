import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 'loggedout',
    page: ''
  },
  mutations: {
    setStatus (state, payload) {
      state.status = payload
    },
    setPage (state, payload) {
      state.page = payload
    }
  },
  actions: {
    login (context, payload) {
      localStorage.setItem('access_token', 'tes')
      context.commit('setStatus', 'loggedin')
      router.push('/')
    },
    logout (context, payload) {
      localStorage.clear()
      context.commit('setStatus', 'loggedout')
    },
    changePage (context, payload) {
      context.commit('setPage', payload)
    }
  }
})
