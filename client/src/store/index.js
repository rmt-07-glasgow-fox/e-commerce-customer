import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    account: '',
    banners: [],
    categories: [],
    products: [],
    carts: []
  },
  mutations: {
    setLogin (state, payload) {
      state.isLogin = payload
    },
    setAccount (state, payload) {
      state.account = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    handleRegister (context, payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          username: payload.username,
          password: payload.password
        }
      }).then(res => {
        context.dispatch('handleLogin', {
          email: payload.email,
          password: payload.password
        })
      }).catch(err => {
        if (err.response.status !== 400) {
          Vue.swal({
            icon: 'error',
            title: 'Something Error',
            text: err.response.data.message
          })
        } else {
          const message = err.response.data.message.join('<br>')
          Vue.swal({
            icon: 'error',
            title: 'Something Error',
            html: message
          })
        }
      })
    },
    handleLogin (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(res => {
        localStorage.setItem('access_token', res.data.access_token)
        localStorage.setItem('account', res.data.username)
        router.push('/')
      }).catch(err => {
        if (err.response.status !== 400) {
          Vue.swal({
            icon: 'error',
            title: 'Something Error',
            text: err.response.data.message
          })
        } else {
          const message = err.response.data.message.join('<br>')
          Vue.swal({
            icon: 'error',
            title: 'Something Error',
            html: message
          })
        }
      })
    },
    getBanners (context) {
      axios({
        method: 'GET',
        url: '/customer/banners'
      }).then(res => {
        context.commit('setBanners', res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    getCategories (context) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/customer/categories',
        headers: {
          access_token: accessToken
        }
      }).then(res => {
        console.log(res.data)
        context.commit('setCategories', res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    getCategoriesId (context, payload) {
      axios({
        method: 'GET',
        url: `/customer/categories/${payload.id}`
      }).then(res => {
        console.log(res.data)
        context.commit('setProducts', res.data.Products)
        // router.push(`/categories/${payload.id}`)
      }).catch(err => {
        console.log(err)
      })
    },
    addCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/carts',
        headers: {
          access_token: accessToken
        },
        data: {
          productId: payload.productId,
          quantity: payload.quantity
        }
      }).then(res => {
        context.dispatch('getCarts')
      }).catch(err => {
        console.log(err.response.message)
      })
    },
    updateCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'PATCH',
        url: `/carts/${payload.id}`,
        headers: {
          access_token: accessToken
        },
        data: {
          quantity: payload.quantity
        }
      }).then(res => {
        context.dispatch('getCarts')
      }).catch(err => {
        console.log(err.response.data.message)
      })
    },
    getCarts (context) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: accessToken
        }
      }).then(res => {
        console.log(res.data)
        context.commit('setCarts', res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    removeCart (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `/carts/${payload}`,
        headers: {
          access_token: accessToken
        }
      }).then(res => {
        console.log(res.data)
        context.dispatch('getCarts')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
