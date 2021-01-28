import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../src/axios/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    isLogin: false
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    },
    changeIsLogin (state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    register (context, payload) {
      axios({
        url: '/register',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(() => {
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.setItem('access_token', data.access_token)
          context.commit('changeIsLogin', true)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      axios({
        method: 'POST',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload
        }
      })
        .then(({ data }) => {
          router.push('/cart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCarts (context, payload) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    removeCart (context, payload) {
      axios({
        method: 'DELETE',
        url: `/carts/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCart (context, payload) {
      axios({
        method: 'PUT',
        url: `/carts/${payload.id}`,
        data: {
          quantity: payload.quantity,
          ProductId: payload.productId
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
