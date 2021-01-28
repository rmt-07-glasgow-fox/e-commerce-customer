import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    currentPage: ''
  },
  mutations: {
    getProducts (state, payload) {
      state.products = payload
    },
    productPage (state, payload) {
      state.currentPage = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data)
          router.push('/products')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/users/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then((data) => {
          router.push('/users/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context) {
      axios
        .get('/products', { headers: { access_token: localStorage.access_token } })
        .then(({ data }) => {
          context.commit('getProducts', data.products)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addToCart (context, payload) {
      axios({
        url: '/carts',
        method: 'POST',
        data: payload,
        headers: { access_token: localStorage.access_token }
      })
        .then(data => {
          console.log(payload)
          router.push('/carts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
