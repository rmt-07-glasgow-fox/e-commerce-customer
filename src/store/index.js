import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'
import store from '@/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: '',
    accesstoken: '',
    products: [],
    product: {},
    cartlist: [],
    wishlists: [],
    history: []
  },
  mutations: {
    history (state, payload) {
      state.history = payload
    },
    wishlists (state, payload) {
      state.wishlists = payload
    },
    products (state, payload) {
      state.products = payload
    },
    product (state, payload) {
      state.product = payload
    },
    accesstoken (state, payload) {
      state.accesstoken = payload
    },
    logout (state) {
      state.accesstoken = ''
      state.role = ''
    },
    role (state, payload) {
      state.role = payload
    },
    cartlist (state, payload) {
      state.cartlist = payload
    }
  },
  actions: {
    findAll (context) {
      axios.get('/product')
        .then(data => {
          context.commit('products', data.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginUser (context, payload) {
      axios.post('/login', payload)
        .then(data => {
          context.commit('accesstoken', data.data.payload.accesstoken)
          context.commit('role', data.data.payload.role)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    checktoken (context, payload) {
      axios.post('/checktoken', {}, { headers: { accesstoken: payload } })
        .then(data => {
          context.commit('accesstoken', payload)
          context.commit('role', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      axios.post(`/product/${payload.ProductId}/cart`, { currentPrice: payload.currentPrice, qty: payload.qty }, { headers: { accesstoken: payload.accesstoken } })
        .then(({ data }) => {
          store.dispatch('findUnpaid', payload.accesstoken)
        })
        .catch(err => {
          console.log(err)
        })
    },
    findUnpaid (context, payload) {
      axios.get('/product/id/cart', { headers: { accesstoken: payload } })
        .then(({ data }) => {
          context.commit('cartlist', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    findOne (context, payload) {
      axios.get('/product/' + payload.product, { headers: { accesstoken: payload.accesstoken } })
        .then(data => {
          context.commit('product', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCart (context, payload) {
      axios.put(`/product/${payload.ProductId}/cart/${payload.CartId}`, { currentPrice: payload.currentPrice, qty: payload.qty }, { headers: { accesstoken: payload.accesstoken } })
        .then(({ data }) => {
          store.dispatch('findUnpaid', payload.accesstoken)
        })
        .catch(err => {
          console.log(err)
        })
    },
    destroy (context, payload) {
      axios.delete(`/product/${payload.ProductId}/cart/${payload.CartId}`, { headers: { accesstoken: payload.accesstoken } })
        .then(({ data }) => {
          store.dispatch('findUnpaid', payload.accesstoken)
        })
        .catch(err => {
          console.log(err)
        })
    },
    destroyCart (context, payload) {
      axios.delete(`/product/${payload.ProductId}/cart/${payload.CartId}/all`, { headers: { accesstoken: payload.accesstoken } })
        .then(({ data }) => {
          store.dispatch('findUnpaid', payload.accesstoken)
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkout (context, payload) {
      axios.post(`/product/id/cart/${payload.CartId}`, {}, { headers: { accesstoken: payload.accesstoken } })
        .then(({ data }) => {
          store.dispatch('findUnpaid', payload.accesstoken)
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, payload) {
      const user = {
        email: payload.email,
        password: payload.password
      }
      axios.post('/register', payload)
        .then(({ data }) => {
          store.dispatch('loginUser', { email: user.email, password: user.password })
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToWishList (context, payload) {
      axios.post(`/product/${payload.ProductId}/wishlist`, {}, { headers: { accesstoken: payload.accesstoken } })
        .then(({ data }) => {
          store.dispatch('findWishlist', payload.accesstoken)
        })
        .catch(err => {
          console.log(err)
        })
    },
    findWishlist (context, payload) {
      axios.get('/product/id/wishlist', { headers: { accesstoken: payload } })
        .then(({ data }) => {
          context.commit('wishlists', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    findHistory (context, payload) {
      axios.get('/history', { headers: { accesstoken: payload } })
        .then(({ data }) => {
          context.commit('history', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    destroyWishlist (context, payload) {
      axios.delete(`/product/${payload.ProductId}/wishlist`, { headers: { accesstoken: payload.accesstoken } })
        .then(({ data }) => {
          store.dispatch('findWishlist', payload.accesstoken)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    all: state => {
      return state.products
    },
    filtered: (state) => (category) => {
      return state.products.filter(product => product.category === category)
    }
  }
})
