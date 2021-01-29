import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    user: '',
    page: '',
    regResult: '',
    categories: [],
    banners: [],
    cart: []
  },
  mutations: {
    assignPage (state, payload) {
      state.page = payload
    },
    authenticate (state) {
      if (localStorage.getItem('access_token')) {
        state.isLogin = true
      } else {
        state.isLogin = false
      }
    },
    getProducts (state, payload) {
      state.products = payload
    },
    assignUser (state, payload) {
      state.user = payload
    },
    assignRegResult (state, payload) {
      state.regResult = payload
    },
    assignCategories (state, payload) {
      state.categories = payload
    },
    assignBanners (state, payload) {
      state.banners = payload
    },
    assignCart (state, payload) {
      state.cart = payload
    }
  },
  actions: {
    fetchProduct (context) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('getProducts', data)
        })
        .catch(err => console.log(err.response))
    },
    tryLogin (context, payload) {
      axios
        .post('/login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.dispatch('tryToken')
        })
        .catch(err => console.log(err.response))
    },
    tryToken (context) {
      if (!localStorage.getItem('access_token')) return 0
      axios
        .post('/tokening')
        .then(({ data }) => {
          context.commit('assignUser', data.email)
          context.commit('authenticate')
        })
        .catch(err => console.log(err.response))
    },
    tryRegister (context, payload) {
      axios
        .post('/register', payload)
        .then(({ data }) => {
          context.commit('assignRegResult', data.message)
        })
        .catch(err => console.log(err.response))
    },
    fetchCategories (context) {
      axios
        .get('/categories')
        .then(({ data }) => {
          context.commit('assignCategories', data)
        })
        .catch(err => console.log(err.response))
    },
    fetchBanners (context) {
      axios
        .get('/banners')
        .then(({ data }) => {
          context.commit('assignBanners', data)
        })
        .catch(err => console.log(err.response))
    },
    getUserCart (context) {
      axios
        .get('/cart')
        .then(({ data }) => {
          if (data.Products > 0) {
            context.commit('assignCart', data.Products)
          } else {
            console.log(data.Products, 'masuk')
          }
        })
        .catch(err => console.log(err.response.data))
    }
  }
})
