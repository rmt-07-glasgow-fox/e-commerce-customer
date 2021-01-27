import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    username: '',
    categories: [],
    errors: [],
    carts: []
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    insertCarts (state, payload) {
      state.carts = payload
    },
    getUserName (state, payload) {
      state.username = payload.email.split('@')[0]
    },
    insertCategories (state, payload) {
      const result = []
      payload.forEach(product => {
        result.push(product.category)
      })
      state.categories = [...new Set(result)]
    },
    catchError (state, payload) {
      state.errors = []
      state.errors.push(payload)
    }
  },
  actions: {
    addToCart (context, payload) {
      return axios
        .post('/carts', payload, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
    },
    fetchAllCarts (context, payload) {
      axios
        .get('/carts', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('insertCarts', data)
        })
        .catch(console.log)
    },
    removeCart (context, payload) {
      return axios
        .delete('/carts/' + payload, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
    },
    updateCart (context, payload) {
      const { CartId, ProductId, quantity } = payload
      console.log('>>>>>', ProductId, CartId, quantity)
      axios
        .patch('/carts/' + CartId, { ProductId, quantity }, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          console.log(data.message)
        })
        .catch((err) => {
          console.log(err.response.data.errors)
        })
    },
    fetchProducts (context) {
      axios
        .get('/products', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('insertProducts', data)
          context.commit('insertCategories', data)
        })
        .catch(console.log)
    },
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('getUserName', payload)
          router.push('/main')
        })
        .catch((err) => {
          context.commit('catchError', err.response.data.errors)
        })
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
