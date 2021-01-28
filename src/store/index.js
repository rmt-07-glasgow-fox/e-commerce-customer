import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    page: 'Nodash',
    login: false,
    histories: []
  },
  mutations: {
    changeProducts (state, payload) {
      state.products = payload
    },
    changeCarts (state, payload) {
      state.carts = payload
    },
    changeHistories (state, payload) {
      state.histories = payload
    },
    changePage (state, payload) {
      state.page = payload
    },
    statusLogin (state) {
      state.login = !state.login
    },
    addQuantity (state, payload) {
      const id = payload
      const indexCart = state.carts.findIndex(el => el.ProductId === id)
      const indexProduct = state.products.findIndex(el => el.id === id)

      if (state.carts[indexCart].quantity > state.products[indexProduct].stock - 1) {
        state.carts[indexCart].quantity = state.products[indexProduct].stock
      } else {
        state.carts[indexCart].quantity++
      }
    },
    minQuantity (state, payload) {
      const id = payload
      const indexCart = state.carts.findIndex(el => el.ProductId === id)

      if (state.carts[indexCart].quantity < 1) {
        state.carts[indexCart].quantity = 0
      } else {
        state.carts[indexCart].quantity--
      }
    },
    deleteCart (state, payload) {
      if (payload === 'all') {
        state.carts = []
      } else {
        state.carts = state.carts.filter(el => el.ProductId !== payload)
      }
    }
  },
  actions: {
    getProducts ({ commit }) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          commit('changeProducts', data)
        })
        .catch(console.log)
    },

    getCarts ({ commit }) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          // console.log(data)
          commit('changeCarts', data)
        })
        .catch(console.log)
    },

    getHistories ({ commit }) {
      axios({
        method: 'GET',
        url: '/histories',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('changeHistories', data)
        })
        .catch(console.log)
    },
    updateStockProduct ({ commit, dispatch, state }) {
      state.carts.forEach(el => {
        const product = state.products.filter(el2 => el2.id === el.ProductId)
        console.log(product)
        axios({
          method: 'PUT',
          url: `/products/${product[0].id}/stock`,
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            stock: product[0].stock - el.quantity
          }
        })
          .then(({ data }) => {
            dispatch('getProducts')
          })
          .catch(err => {
            const message = err.response.data.message
            dispatch('sweetError', message)
          })
      })
    },

    addToCart ({ commit, dispatch, state }, payload) {
      const ProductId = payload
      console.log(payload)
      const cart = state.carts.find(el => el.ProductId === ProductId)
      console.log(state.carts)
      if (cart) {
        commit('addQuantity', ProductId)
        dispatch('updateQuantity', { quantity: cart.quantity, ProductId })
      } else {
        dispatch('createCart', { ProductId })
      }
    },

    updateQuantity ({ dispatch }, { quantity, ProductId }) {
      axios({
        method: 'PUT',
        url: `/carts/${ProductId}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity
        }
      })
        .then(({ data }) => {

        })
        .catch(err => {
          const message = err.response.data.message
          dispatch('sweetError', message)
        })
    },

    createCart ({ commit, dispatch }, payload) {
      payload.quantity = 1
      axios({
        method: 'POST',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(({ data }) => {
          // console.log('carts created')
          dispatch('getCarts')
        })
        .catch(err => {
          const message = err.response.data.message
          dispatch('sweetError', message)
        })
    },

    deleteCart ({ dispatch, commit }, payload) {
      axios({
        method: 'DELETE',
        url: `/carts/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('deleteCart', payload)
        })
        .catch(err => {
          const message = err.response.data.message
          dispatch('sweetError', message)
        })
    },

    checkout ({ dispatch, state }) {
      const histories = []
      state.carts.forEach(el => {
        const product = state.products.filter(el2 => el2.id === el.ProductId)
        histories.push({
          productName: product[0].name,
          image_url: product[0].image_url,
          price: product[0].price,
          quantity: el.quantity
        })
      })
      axios({
        method: 'POST',
        url: '/histories',
        data: histories,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          dispatch('updateStockProduct')
          dispatch('getHistories')
          dispatch('deleteCart', 'all')
        })
        .catch(err => {
          const message = err.response.data.message
          dispatch('sweetError', message)
        })
    },

    login ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
    },

    register ({ commit }, payload) {
      return axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
    },
    sweetSuccess ({ commit }, payload) {
      Swal.fire({
        icon: 'success',
        title: payload,
        text: 'will close in 2 seconds',
        timer: 1500,
        showCancelButton: false,
        showConfirmButton: false
      })
    },
    sweetError ({ commit }, payload) {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: payload
      })
    }
  },
  modules: {
  }
})
