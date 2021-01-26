import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errorData: '',
    products: [],
    carts: [],
    wishlists: [],
    transactions: [],
    banners: []
  },
  mutations: {
    errHandler (state, payload) {
      state.errorData = payload
    },
    fetchAllProducts (state, payload) {
      state.products = payload
    },
    fetchAllCarts (state, payload) {
      state.carts = payload
    },
    fetchAllWishlists (state, payload) {
      state.wishlists = payload
    },
    fetchAllTransactions (state, payload) {
      state.transactions = payload
    },
    fetchAllBanners (state, payload) {
      state.banners = payload
    }
  },
  actions: {
    logout (context, payload) {
      localStorage.clear()
      context.commit('errHandler', '')
      router.push('/')
    },
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(res => {
          console.log(res.data)

          localStorage.setItem('access_token', res.data.access_token)
          context.commit('errHandler', '')
          router.push('/')
        })
        .catch(err => {
          const msg = err.res.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              const str = temp.join(', ')
              context.commit('errHandler', str)
            } else if (msg.length <= 1) {
              context.commit('errHandler', msg[i])
            }
          }
        })
    },
    register (context, payload) {
      axios
        .post('/register', payload)
        .then(res => {
          console.log(res.data)
          context.commit('errHandler', '')
          router.push('/login')
        })
        .catch(err => {
          const msg = err.res.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              const str = temp.join(', ')
              context.commit('errHandler', str)
            } else if (msg.length <= 1) {
              context.commit('errHandler', msg[i])
            }
          }
        })
    },

    // CRUD PRODUCTS
    fetchProducts (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/products',
          { headers })
        .then(res => {
          console.log(res.data)

          context.commit('fetchAllProducts', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    // CRUD CARTS
    fetchCarts (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/carts',
          { headers })
        .then(res => {
          console.log(res.data)

          context.commit('fetchAllCarts', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createCarts (context, payload) {
      const headers = { access_token: localStorage.access_token }

      axios
        .post('/carts', payload, { headers })
        .then(res => {
          context.commit('errHandler', '')
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    // edit stock when add, or min
    updateCarts (context, payload) {
      const headers = { access_token: localStorage.access_token }

      axios
        .put(`/carts/${payload}`, { headers })
        .then(res => {
          context.commit('updateAllCarts', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCarts (context, payload) {
      const headers = { access_token: localStorage.access_token }

      axios
        .delete(`/carts/${payload}`, { headers })
        .then(res => {
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },

    // CRUD WISHLISTS
    fetchWishlists (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/wishlists',
          { headers })
        .then(res => {
          console.log(res.data)

          context.commit('fetchAllWishlists', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createWishlists (context, payload) {
      const headers = { access_token: localStorage.access_token }

      axios
        .post('/wishlists', payload, { headers })
        .then(res => {
          context.commit('errHandler', '')
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteWishlists (context, payload) {
      const headers = { access_token: localStorage.access_token }

      axios
        .delete(`/wishlists/${payload}`, { headers })
        .then(res => {
          context.dispatch('fetchWishlists')
        })
        .catch(err => {
          console.log(err)
        })
    },

    // CRUD TRANSACTIONS
    fetchTransactions (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/transactions',
          { headers })
        .then(res => {
          console.log(res.data)

          context.commit('fetchAllTransactions', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createTransactions (context, payload) {
      const headers = { access_token: localStorage.access_token }

      axios
        .post('/transactions', payload, { headers })
        .then(res => {
          context.commit('errHandler', '')
        })
        .catch(err => {
          console.log(err)
        })
    },

    // CRUD BANNER
    fetchBanners (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/banners',
          { headers })
        .then(res => {
          console.log(res.data)

          context.commit('fetchAllBanners', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }

  }
})
