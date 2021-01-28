import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userEmail: '',
    product: [],
    carts: [],
    loginBtn: '',
    logoutBtn: '',
    access_token: '',
    price: '',
    isLogin: false,
    checkouts: [],
    banners: []
  },
  mutations: {
    setAccessToken (state, data) {
      state.access_token = data
    },
    setValueEmail (state, data) {
      state.userEmail = data
    },
    setValueProduct (state, data) {
      state.product = data
    },
    setCart (state, data) {
      state.carts = data
    },
    setPrice (state, data) {
      state.price = data
    },
    setHistoryCheckout (state, data) {
      state.checkouts = data
    },
    setBtnLogin (state, payload) {
      if (payload) {
        state.loginBtn = 'd-none btn-disable'
      } else {
        state.loginBtn = 'btn btn-outline-secondary d-inline'
      }
    },
    setIsLoginUser (state) {
      state.isLogin = true
    },
    setIsLogoutUser (state) {
      state.isLogin = false
    },
    setBanner (state, data) {
      state.banners = data
    },
    setBtnLogout (state, payload) {
      if (payload) {
        state.logoutBtn = 'd-none btn-disable'
      } else {
        state.logoutBtn = 'btn btn-outline-danger d-inline'
      }
    }
  },
  actions: {
    registerUser (context, payload) {
      axios({
        url: '/register',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(result => {
          Swal.fire({
            icon: 'success',
            title: 'Login success',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(result.data)
          router.push('/login')
        })
        .catch(err => {
          Swal.fire({
            icon: 'success',
            title: `${err.response.msg}`,
            showConfirmButton: false,
            timer: 1500
          })
          console.log(err)
        })
    },
    loginUser (context, payload) {
      axios({
        url: '/login/customer',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(result => {
          Swal.fire({
            icon: 'success',
            title: 'Login success',
            showConfirmButton: false,
            timer: 1500
          })
          localStorage.setItem('access_token', result.data.access_token)
          context.commit('setIsLoginUser')
          console.log(result.data)
          router.push('/')
          context.commit('setValueEmail')
        })
        .catch(err => {
          Swal.fire({
            icon: 'success',
            title: `${err.response.msg}`,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    fetchProduct (context) {
      axios({
        url: '/customers/products',
        method: 'get'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setValueProduct', data)
        })
        .catch(err => {
          Swal.fire({
            icon: 'success',
            title: `${err.response.msg}`,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    addCart (context, id) {
      for (let i = 0; i < this.state.carts.length; i++) {
        if (id === this.state.carts[i].ProductId) {
          context.dispatch('incrementQuantity', { id: this.state.carts[i].id, quantity: this.state.carts[i].quantity })
        }
      }
      axios({
        url: '/carts',
        method: 'post',
        data: {
          ProductId: id
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(result => {
          console.log(result)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `${err.response.msg}`,
            showConfirmButton: false,
            timer: 1500
          })
          console.log(err)
        })
    },
    fetchCart (context) {
      axios({
        url: '/carts',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setCart', data[0])
          context.commit('setPrice', data[1])
        })
        .catch(err => {
          console.log(err)
        })
    },
    incrementQuantity (context, payload) {
      axios({
        url: '/carts/' + payload.id,
        method: 'put',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: payload.quantity += 1
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Product Not avaliable',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(err)
        })
    },
    decrementQuantity (context, payload) {
      axios({
        url: '/carts/' + payload.id,
        method: 'put',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: payload.quantity -= 1
        }
      })
        .then(({ data }) => {
          Swal.fire('Success')
          context.dispatch('fetchCart')
        })
        .catch(err => {
          if (err.response) {
            Swal.fire({
              icon: 'error',
              title: `${err.response.msg}`,
              showConfirmButton: false,
              timer: 1500
            })
            console.log(err.response)
          }
        })
    },
    fetchCheckout (context, payload) {
      axios({
        url: '/checkouts',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setHistoryCheckout', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkout (context, payload) {
      axios({
        url: '/checkouts',
        method: 'post',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          carts: payload
        }
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Checkout success',
            showConfirmButton: false,
            timer: 1500
          })
          context.dispatch('fetchCart')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Checkout error',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(err.response)
        })
    },
    fetchBanner (context) {
      axios({
        url: '/banners',
        method: 'get',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setBanner', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    removeCart (context, id) {
      axios({
        url: '/carts/' + id,
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(_ => {
          Swal.fire('Success Delete')
          context.dispatch('fetchCart')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: `${err.response.msg}`,
            showConfirmButton: false,
            timer: 1500
          })
          console.log(err)
        })
    }
  },
  modules: {
  }
})
