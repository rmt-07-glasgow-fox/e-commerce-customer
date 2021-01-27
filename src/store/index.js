import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    products: [],
    carts: [],
    totalPrice: 0,
    histories: []
  },
  mutations: {
    setStatus (state, payload) {
      state.status = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    },
    setTotalPrice (state, payload) {
      state.totalPrice = payload
    },
    setHistories (state, payload) {
      state.histories = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('setStatus', 'loggedIn')
          Vue.toasted.success('welcome ' + payload.email.split('@')[0], { icon: 'crown' })
          if (router.history.current.name !== 'Home') {
            router.push('/')
          }
        })
        .catch(({ response }) => {
          Vue.toasted.error(response.data.message)
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
          console.log(response.data.message)
        })
    },
    fetchProd (context) {
      axios({
        url: '/products',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
          console.log(data)
        })
        .catch(error => {
          console.log(error.response.data)
        })
    },
    fetchCart (context, payload) {
      axios({
        url: '/carts',
        method: 'GET',
      })
        .then(({ data }) => {
          const { carts, totalPrice } = data
          context.commit('setCarts', carts)
          context.commit('setTotalPrice', totalPrice)
        })
        .catch(error => {
          console.log(error.response.data)
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
          Vue.toasted.error(err.response.data.message)
          // console.log(err.response.data.message)
        })
    },
    deleteCart (context, payload) {
      // console.log(payload)
      Vue.toasted.error('are you sure ?', {
        action: [
          {
            text: 'yes',
            onClick: (e, toastObject) => {
              axios({
                url: '/carts',
                method: 'DELETE',
                headers: {
                  access_token: localStorage.getItem('access_token')
                },
                data: payload
              })
                .then(_ => {
                  context.dispatch('fetchCart')
                  Vue.toasted.success('deleted')
                })
                .catch(_ => {
                  // console.log(err)
                })
            }
          },
          {
            text: 'no',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
            }
          }
        ]
      })
    },
    checkout (context, payload) {
      // console.log('hit')
      axios({
        url: '/carts',
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(_ => {
          context.dispatch('fetchCart')
          Vue.toasted.success('success')
        })
        .catch(_ => {
          context.dispatch('fetchCart')
          // console.log(err)
          Vue.toasted.error('something went wrong')
        })
    },
    fetchHistories (context, payload) {
      axios({
        url: '/carts/histories',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          context.commit('setHistories', data)
        })
        .catch(_ => {
          // console.log(error)
        })
    }
  },
  modules: {
  }
})
