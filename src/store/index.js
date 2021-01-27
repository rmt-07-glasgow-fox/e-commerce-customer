import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    banners: [],
    products: [],
    categories: [],
    isLoggedIn: false
  },
  mutations: {
    SET_BANNERS (state, payload) {
      state.banners = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_CATEGORIES (state, payload) {
      state.categories = payload
    },
    SET_ISLOGGEDIN (state, payload) {
      state.isLoggedIn = payload
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
          console.log(err.response)
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
          console.log(err.response)
        })
    },
    fetchCategories (context, payload) {
      axios({
        method: 'GET',
        url: '/categories'
      })
        .then(({ data }) => {
          context.commit('SET_CATEGORIES', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleLogin (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          context.commit('SET_ISLOGGEDIN', true)
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleRegister (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          router.push('/login')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    handleLogout (context, payload) {
      localStorage.clear()
      context.commit('SET_ISLOGGEDIN', payload)
      router.push('/')
    }
  },
  modules: {
  }
})
