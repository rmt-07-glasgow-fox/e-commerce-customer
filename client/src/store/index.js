import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    haveAccount: true,
    banners: [],
    products: [],
    carts: [],
    histories: [],
    totalBayar: 0,
    statusLogin: false
  },
  mutations: {
    fillBanner (state, payload) {
      state.banners = payload
    },
    fillProduct (state, payload) {
      state.products = payload
    },
    fillCart (state, payload) {
      state.carts = payload.data
      state.totalBayar = (payload.totalBayar).toLocaleString('id-ID')
    },
    fillHistory (state, payload) {
      state.histories = payload
    },
    setAccount (state, payload) {
      state.haveAccount = payload
    },
    logout (state) {
      state.statusLogin = false
      localStorage.clear()
      router.push('/login')
    },
    login (state) {
      state.statusLogin = true
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
          context.commit('setAccount', true)
          Swal.fire(
            'register! Success',
            'Lets login',
            'success'
          )
        })
        .catch(err => {
          let valid = ''
          err.response.data.errors.forEach(el => {
            valid += `${el}
            `
          })
          Swal.fire({
            icon: 'error',
            title: 'FAIL Register',
            text: valid
          })
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
          context.commit('login')
          if (localStorage.access_token) {
            router.push('/')
          }
          Swal.fire(
            'Hallo! ^_^',
            'Have you eat breakfast today?',
            'success'
          )
        })
        .catch(err => {
          let valid = ''
          err.response.data.errors.forEach(el => {
            valid += `${el}
            `
          })
          Swal.fire({
            icon: 'error',
            title: 'FAIL LOGIN',
            text: valid
          })
        })
    },
    fetchBanner (context) {
      axios({
        method: 'GET',
        url: '/banners'
      })
        .then(({ data }) => {
          context.commit('fillBanner', data)
        })
        .catch(err => console.log(err))
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('fillProduct', data)
        })
        .catch(err => console.log(err))
    },
    fetchCart (context) {
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('fillCart', data)
        })
        .catch(err => console.log(err))
    },
    fetchHistory (context) {
      axios({
        method: 'GET',
        url: '/carts/histories',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('fillHistory', data)
        })
        .catch(err => console.log(err))
    },
    addToCart (context, payload) {
      axios({
        method: 'POST',
        url: '/carts',
        data: payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(data => {
          context.dispatch('fetchCart')
          console.log('berhasil menambahkan ke cart')
          Swal.fire(
            'Berhasil menambahkan',
            'lets to Cart',
            'success'
          )
        })
        .catch(err => {
          console.log('gagal menambahkan ke cart', err)
        })
    },
    minItem (context, payload) {
      axios({
        method: 'PATCH',
        url: '/carts/minitem/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          let valid = ''
          err.response.data.errors.forEach(el => {
            valid += `${el}
            `
          })
          Swal.fire({
            icon: 'error',
            title: 'FAIL UPDATE',
            text: valid
          })
        })
    },
    addItem (context, payload) {
      axios({
        method: 'PATCH',
        url: '/carts/additem/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          let valid = ''
          err.response.data.errors.forEach(el => {
            valid += `${el}
            `
          })
          Swal.fire({
            icon: 'error',
            title: 'FAIL UPDATE',
            text: valid
          })
        })
    },
    checkout (context) {
      axios({
        method: 'PATCH',
        url: '/carts/checkout',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          router.push('/history')
          context.dispatch('fetchCart')
          context.dispatch('fetchHistory')
          context.dispatch('fetchProduct')
          Swal.fire(
            'checkout success!',
            'Burn your money',
            'success'
          )
        })
        .catch(err => {
          let valid = ''
          err.response.data.errors.forEach(el => {
            valid += `${el}
            `
          })
          Swal.fire({
            icon: 'error',
            title: 'FAIL CHECKOUT',
            text: valid
          })
        })
    },
    deleteItem (context, payload) {
      axios({
        method: 'DELETE',
        url: '/carts/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        })
        .catch(err => {
          let valid = ''
          err.response.data.errors.forEach(el => {
            valid += `${el}
            `
          })
          Swal.fire({
            icon: 'error',
            title: 'FAIL DELETE',
            text: valid
          })
        })
    }
  }
})
