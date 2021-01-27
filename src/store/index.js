import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    carts: [],
    summaryCheckout: {},
    historyCarts: []
  },
  mutations: {
    setLoginStatus (state, payload) {
      state.isLogin = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    },
    setSummaryCheckout (state, payload) {
      state.summaryCheckout = payload
    },
    setHistoryCarts (state, payload) {
      state.historyCarts = payload
    }
  },
  actions: {
    auth (context) {
      if (localStorage.access_token) context.commit('setLoginStatus', true)
      else context.commit('setLoginStatus', false)
    },
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
        .then((response) => {
          router.push('/login')
          Swal.fire({
            title: 'Success!',
            text: response.data.message,
            icon: 'success'
          })
        })
        .catch((err) => {
          console.log(err.response.data.message)
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error'
          })
        })
    },
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then((response) => {
          localStorage.setItem('email', response.data.email)
          localStorage.setItem('role', response.data.role)
          localStorage.setItem('access_token', response.data.access_token)
          context.commit('setLoginStatus', true)
          router.push('/')
          Swal.fire({
            title: 'Success!',
            text: response.data.message,
            icon: 'success'
          })
        })
        .catch((err) => {
          console.log(err.response.data.message)
          Swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error'
          })
        })
    },
    logout (context) {
      localStorage.clear()
      context.commit('setLoginStatus', false)
      router.push('/')
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.commit('setProducts', response.data)
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    },
    addToCart (context, payload) {
      axios({
        method: 'POST',
        url: '/cart',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then((response) => {
          console.log('SUCCESS addToCart', { data: response.data })
        })
        .catch((err) => {
          console.log(err.response.data.message)
        })
    },
    fetchCarts (context, payload) {
      axios({
        method: 'GET',
        url: '/cart',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          console.log('SUCCESS fetchCarts', { data: response.data })
          context.commit('setCarts', response.data)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    },
    removeCartAxios (context, payload) {
      axios({
        method: 'DELETE',
        url: '/cart/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.dispatch('fetchCarts')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Cannot delete!',
            text: err.response.data.message
          })
        })
    },
    checkout (context, payload) {
      axios({
        method: 'POST',
        url: '/cart/checkout',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          console.log('Checkout success!')
          context.dispatch('fetchCarts')
          Swal.fire('Checkout success!')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchHistoryCarts (context, payload) {
      axios({
        method: 'GET',
        url: '/cart/history',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          console.log('SUCCESS fetchHistoryCarts', { data: response.data })
          context.commit('setHistoryCarts', response.data)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }
    // summaryCheckout (context, payload) {
    //   console.log('summaryCheckout')
    //   let priceArr = []
    //   let grandTotal = 0
    //   console.log('this.state.carts', this.state.carts)
    //   let computeCheckout = () => {
    //     for (let i = 0; i < this.state.carts; i++) {
    //       const element = this.state.carts[i]
    //       const quantityBuy = element.quantity
    //       const price = element.Product.price
    //       const totalPricePerItem = quantityBuy * price
    //       const nameOfItem = element.Product.name
    //       priceArr.push([nameOfItem, totalPricePerItem])
    //       grandTotal = grandTotal + totalPricePerItem
    //     }
    //   }
    //   computeCheckout()
    //   console.log('setSummaryCheckout', priceArr, grandTotal)
    //   const summaryCheckout = { priceArr, grandTotal }
    //   context.commit('setSummaryCheckout', summaryCheckout)
    // }
  },
  modules: {
  }
})
