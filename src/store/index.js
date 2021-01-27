import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/axios'
import router from '@/router'
import moduleProduct from '@/store/moduleProduct'
import moduleCart from '@/store/moduleCart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.access_token
  },
  mutations: {
    login (state) {
      state.isLogin = true
    },
    logout (state) {
      state.isLogin = false
    }
  },
  actions: {
    login (context, data) {
      axios({
        method: 'POST',
        url: '/login',
        data: data
      })
        .then(({ data }) => {
          console.log('ok')
          localStorage.access_token = data.access_token
          context.commit('login')
          router.push({ name: 'Home' })
        })
        .catch(({ response }) => {
          console.log(response)
        })
    },
    logout (context, data) {
      localStorage.clear()
      context.commit('logout')
      data.currentRouteName !== 'Home' && router.push({ name: 'Home' })
    },
    register (context, data) {
      axios({
        method: 'POST',
        url: '/register',
        data: data
      })
        .then(({ data }) => {
          console.log('register success')
          router.push({ name: 'Login' })
        })
        .catch(({ response }) => {
          console.log(response)
        })
    }
  },
  modules: {
    mProducts: moduleProduct,
    mCart: moduleCart
  }
})
