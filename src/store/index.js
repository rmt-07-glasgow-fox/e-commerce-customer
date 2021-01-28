import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    filter: '',
    search: '',
    carts: [],
    transactions: [],
    Toast: Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
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
    },
    insertTransaction (state, payload) {
      state.transactions = payload
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
          _.state.Toast.fire({
            icon: 'success',
            title: 'Logged in successfully'
          })
          router.push('/')
        })
        .catch(err => {
          _.state.Toast.fire({
            icon: 'error',
            title: err.response.data.message
          })
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
          _.state.Toast.fire({
            icon: 'success',
            title: 'Register success'
          })
          router.push('/login')
        })
        .catch(err => {
          _.state.Toast.fire({
            icon: 'error',
            title: err.response.data.message[0]
          })
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
    fetchTransaction ({ commit }) {
      axios({
        method: 'GET',
        url: '/carts/transactions',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('insertTransaction', data)
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
          _.state.Toast.fire({
            icon: 'success',
            title: 'Successfully add to cart'
          })
          this.dispatch('fetchCarts')
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
          _.state.Toast.fire({
            icon: 'success',
            title: 'Product removed'
          })
          this.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkout (_, payload) {
      axios({
        method: 'PATCH',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          _.state.Toast.fire({
            icon: 'success',
            title: data.message
          })
          this.dispatch('fetchCarts')
        })
        .catch(err => {
          _.state.Toast.fire({
            icon: 'error',
            title: err.response.data.error.message
          })
          this.dispatch('fetchCarts')
        })
    }
  },
  getters: {
    filterProducts: state => {
      if (state.filter === '' && state.search === '') {
        return state.products.filter(e => e.stock > 0)
      } else if (state.search) {
        return state.products.filter(e => {
          return e.name.toLowerCase().includes(state.search.toLowerCase())
        }).filter(e => e.stock > 0)
      } else {
        return state.products.filter(e => {
          return e.CategoryId === state.filter
        }).filter(e => e.stock > 0)
      }
    },
    sortedCart: state => {
      return state.carts.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
    }
  }
})
