import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 'login',
    role: 'customer',
    products: [],
    carts: [],
    totalCartItems: ''
  },
  mutations: {
    changeStatus (state, payload) {
      state.status = payload
    },
    updateProducts (state, payload) {
      state.products = payload
    },
    changeRole (state, payload) {
      state.role = payload
    },
    updateCarts (state, payload) {
      state.carts = payload.carts
      let totalCartItems = 0
      payload.carts.forEach(item => {
        totalCartItems += item.quantity
      })
      state.totalCartItems = totalCartItems
    }
  },
  actions: {
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
        .then(({ data }) => {
          context.dispatch('login', { email: data.email, password: payload.password })
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('changeStatus', 'logout')
          context.commit('changeRole', data.role)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('updateProducts', data)
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
          context.commit('updateCarts', { carts: data })
        })
        .catch(err => {
          console.log(err)
        })
    },
    createCart (context, payload) {
      axios({
        method: 'POST',
        url: `/carts/${payload.id}`,
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
    addCartQty (context, payload) {
      axios({
        method: 'PATCH',
        url: `/carts/${payload.id}`,
        data: {
          operator: '+',
          quantity: payload.quantity
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
    },
    minCartQty (context, payload) {
      axios({
        method: 'PATCH',
        url: `/carts/${payload.id}`,
        data: {
          operator: '-',
          quantity: payload.quantity
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
    },
    removeCartItem (context, payload) {
      axios({
        method: 'DELETE',
        url: `/carts/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
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
