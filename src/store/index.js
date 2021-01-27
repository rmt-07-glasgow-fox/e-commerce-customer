import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    filter: '',
    search: '',
    carts: []
  },
  mutations: {
    insertProduct (state, payload) {
      state.products = payload
    },
    insertCategory (state, payload) {
      state.categories = payload
    },
    changeFilter (state, payload) {
      state.filter = payload
    },
    changeSearch (state, payload) {
      state.search = payload
    },
    insertCart (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    login (_, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email,
          password
        }
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (_, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: '/register',
        data: {
          email,
          password
        }
      })
        .then(({ data }) => {
          router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProduct ({ commit }) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          commit('insertProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategory ({ commit }) {
      axios({
        method: 'GET',
        url: '/categories'
      })
        .then(({ data }) => {
          commit('insertCategory', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCarts ({ commit }) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('insertCart', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (_, payload) {
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
          this.dispatch('fetchCarts')
          console.log(data)
        })
        .catch(() => {
          router.push('/login')
        })
    },
    updateQuantity (_, payload) {
      const { id, quantity } = payload
      axios({
        method: 'PATCH',
        url: '/carts/' + id,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity
        }
      })
        .then(({ data }) => {
          console.log(data)
          this.dispatch('fetchCarts')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteCart (_, id) {
      axios({
        method: 'DELETE',
        url: '/carts/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(() => {
          this.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    filterProducts: state => {
      if (state.filter === '' && state.search === '') return state.products
      else if (state.search) {
        return state.products.filter(e => {
          return e.name.toLowerCase().includes(state.search.toLowerCase())
        })
      } else {
        return state.products.filter(e => {
          return e.CategoryId === state.filter
        })
      }
    },
    sortedCart: state => {
      return state.carts.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
    }
  }
})
