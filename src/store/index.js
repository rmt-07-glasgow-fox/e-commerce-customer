import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    products: [],
    // carts: [],
    // totalPrice: 0,
    // histories: []
  },
  mutations: {
    setStatus (state, payload) {
      state.status = payload
    },
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      // console.log(payload)
      axios({
        method: 'post',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.setItem('access_token', data.access_token)
          // Vue.toasted.success('welcome', {
          //   action: {
          //     text: payload.email.split('@')[0],
          //     position: 'top-right'
          //   }
          // })
          router.push('/')
        })
        .catch(({ response }) => {
          // console.log(error.response.data)
          // Vue.toasted.error(response.data.message, { icon: 'skull' })
        })
    },
    register (context, payload) {
      axios({
        url: '/register',
        method: 'POST',
        data: payload
      })
        .then(({ data }) => {
          router.push('/login')
        })
        .catch(({ response }) => {
          console.log(response.data)
        })
    },
    fetchProduct (context, payload) {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setProducts', data.products)
        })
        .catch(_ => {
          // console.log(error)
        })
    },
    fetchCart (context, payload) {
      axios({
        url: '/carts',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          const { carts, totalPrice } = data
          context.commit('setCarts', carts)
          context.commit('setTotalPrice', totalPrice)
        })
    },
    changeQuantity (context, payload) {
      axios({
        url: '/carts',
        method: '/POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(_ => {
          context.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err.response.data.message)
        })
    }
  },
  modules: {
  }
})
