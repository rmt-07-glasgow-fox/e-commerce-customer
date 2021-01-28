import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cartItems: [],
    item: {},
    page: 'home',
    token: localStorage.access_token
  },
  mutations: {
    SET_PRODUCTS (state, dataproducts) {
      state.products = dataproducts
    },
    SET_CART (state, datacart) {
      state.cartItems = datacart
    },
    SET_ITEM (state, dataitem) {
      state.item = dataitem
    },
    SET_TOKEN (state, datatoken) {
      state.token = datatoken
    }
  },
  actions: {
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
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          context.commit('SET_TOKEN', localStorage.access_token)
          router.push({ path: '/' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, payload) {
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
          router.push({ path: '/login' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      axios({
        method: 'POST',
        url: '/cart',
        data: {
          productId: payload.productId
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log('MASUK GA YA?')
          console.log(data)
          router.push({ path: '/' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCart (context) {
      axios({
        method: 'GET',
        url: '/cart',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log('MASUK GA YA?')
          console.log(data)
          context.commit('SET_CART', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editItem ({ dispatch }, payload) {
      console.log(payload)
      axios({
        method: 'PATCH',
        url: `/cart/${payload.id}`,
        data: {
          quantity: payload.quantity
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          dispatch('fetchCart')
          router.push({ path: '/cart' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteItem ({ dispatch }, payload) {
      axios({
        method: 'DELETE',
        url: `/cart/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          dispatch('fetchCart')
          router.push({ path: '/cart' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
