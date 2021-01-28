import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/axios'
import router from '@/router'
import moduleProduct from '@/store/moduleProduct'
import moduleCart from '@/store/moduleCart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.access_token,
    isLoadLogin: false,
    isLoadRegister: false
  },
  mutations: {
    login (state) {
      state.isLogin = true
    },
    logout (state) {
      state.isLogin = false
    },
    isLoadLogin (state, data) {
      state.isLoadLogin = data
    },
    isLoadRegister (state, data) {
      state.isLoadRegister = data
    }
  },
  actions: {
    login (context, data) {
      context.commit('isLoadLogin', true)
      axios({
        method: 'POST',
        url: '/login',
        data: data
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          setTimeout(() => {
            context.commit('login')
            context.commit('isLoadLogin', false)
            router.push({ name: 'Home' })
          }, 1000)
        })
        .catch(({ response }) => {
          setTimeout(() => {
            context.commit('isLoadLogin', false)
          }, 1000)
          console.log(response)
        })
    },
    logout (context, data) {
      localStorage.clear()
      context.commit('logout')
      context.commit('clearCart', null, true)
      data.currentRouteName !== 'Home' && router.push({ name: 'Home' })
    },
    register (context, payload) {
      context.commit('isLoadRegister', true)
      axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
        .then(({ data }) => {
          console.log(data)
          return axios({
            method: 'POST',
            url: '/login',
            data: { email: payload.email, password: payload.password }
          })
        })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          setTimeout(() => {
            context.commit('login')
            context.commit('isLoadRegister', false)
            router.push({ name: 'Home' })
          }, 1000)
        })
        .catch(({ response }) => {
          setTimeout(() => {
            context.commit('isLoadRegister', false)
          }, 1000)
          console.log(response)
        })
    }
  },
  modules: {
    mProducts: moduleProduct,
    mCart: moduleCart
  }
})
