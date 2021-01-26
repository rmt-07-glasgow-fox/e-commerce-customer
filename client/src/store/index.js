import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    err: '',
    products: [],
    carts: [],
    banners: []
  },
  mutations: {
    errHandling (state, payload) {
      state.err = payload
    },
    fetchAllProduct (state, payload) {
      state.products = payload
    },
    fetchAllCart (state, payload) {
      payload.forEach(el => {
        if (el.quantity > 1) {
          el.Product.price = el.Product.price * el.quantity
          state.carts = payload
        } else {
          state.carts = payload
        }
      })
      // state.carts = payload
    },
    fetchAllBanner (state, payload) {
      state.banners = payload
    }
  },
  actions: {
    login (context, payload) {
      axios
        .post('/loginCustomer', payload)
        .then(response => {
          console.log(response.data)
          localStorage.setItem('access_token', response.data.access_token)
          context.commit('errHandling', '')
          router.push('/')
        })
        .catch(err => {
          const msg = err.response.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              const str = temp.join(', ')
              context.commit('errHandling', str)
            } else if (msg.length <= 1) {
              context.commit('errHandling', msg[i])
            }
          }
        })
    },

    register (context, payload) {
      axios
        .post('/register', payload)
        .then(response => {
          console.log(response.data)
          context.commit('errHandling', '')
          router.push('/login')
        })
        .catch(err => {
          const msg = err.response.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              const str = temp.join(', ')
              context.commit('errHandling', str)
            } else if (msg.length <= 1) {
              context.commit('errHandling', msg[i])
            }
          }
        })
    },

    logout (context, payload) {
      localStorage.clear()
      context.commit('errHandling', '')
      router.push('/login')
    },

    fetchAllProduct (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/products', { headers })
        .then(response => {
          context.commit('fetchAllProduct', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchAllCart (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/carts', { headers })
        .then(response => {
          console.log(response.data)
          context.commit('fetchAllCart', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchAllBanner (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .get('/banners', { headers })
        .then(response => {
          context.commit('fetchAllBanner', response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    add (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .post('/carts', { id: payload }, { headers })
        .then(response => {
          context.commit('errHandling', '')
          context.dispatch('fetchAllProduct')
        })
        .catch(err => {
          const msg = err.response.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              const str = temp.join(', ')
              context.commit('errHandling', str)
            } else if (msg.length <= 1) {
              context.commit('errHandling', msg[i])
            }
          }
        })
    },

    increase (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .patch('/carts/inc', { id: payload }, { headers })
        .then(response => {
          context.commit('errHandling', '')
          context.dispatch('fetchAllCart')
        })
        .catch(err => {
          const msg = err.response.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              const str = temp.join(', ')
              context.commit('errHandling', str)
            } else if (msg.length <= 1) {
              context.commit('errHandling', msg[i])
            }
          }
        })
    },

    decrease (context, payload) {
      const headers = { access_token: localStorage.access_token }
      axios
        .patch('/carts/dec', { id: payload }, { headers })
        .then(response => {
          context.commit('errHandling', '')
          context.dispatch('fetchAllCart')
        })
        .catch(err => {
          const msg = err.response.data.errors
          const temp = []
          for (let i = 0; i < msg.length; i++) {
            if (msg.length > 1) {
              temp.push(msg[i])
              const str = temp.join(', ')
              context.commit('errHandling', str)
            } else if (msg.length <= 1) {
              context.commit('errHandling', msg[i])
            }
          }
        })
    },

    destroy (context, payload) {
      axios
        .delete('/carts', { data: { id: payload }, headers: { access_token: localStorage.access_token } })
        .then(response => {
          context.commit('errHandling', '')
          context.dispatch('fetchAllCart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
