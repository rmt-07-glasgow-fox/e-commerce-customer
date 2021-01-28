import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    stock: 0,
    login: ''
  },
  mutations: {
    readData (state, payload) {
      state.products = payload
    },
    readCart (state, payload) {
      state.carts = payload
    },
    btnLogout (state, payload) {
      state.login = payload
    },
    removeCart (state) {
      state.carts = []
    },
    readStock (state, payload) {
      state.stock = payload
    },
    increment (state) {
      state.stock = state.stock++
    },
    decrement (state) {
      state.stock = state.stock--
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
          console.log('Success register')
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
    },
    featchReadCart (context, payload) {
      axios({
        url: '/cart',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('readCart', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createCart (context, payload) {
      const id = payload
      axios({
        url: '/cart/' + id,
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('featchReadCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editQuantity (context, payload) {
      const id = payload.id
      axios({
        method: 'put',
        url: '/cart/' + id,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: payload.quantity
        }
      })
        .then(({ data }) => {
          context.dispatch('featchReadCart', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (context, payload) {
      const id = payload
      axios({
        method: 'DELETE',
        url: '/cart/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log('Sucess deleted')
          context.dispatch('featchReadCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    updatestock (context, payload) {
      const id = payload.id
      const newstock = payload.stock
      axios({
        method: 'put',
        url: '/customer/products/' + id,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          stock: newstock
        }
      })
        .then(({ data }) => {
          context.dispatch('featchReadAll', data)
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
