import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: []
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    insertCarts (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    regist (context, payload) {
      axios({
        method: 'POST',
        url: '/users/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          router.push('/login')
        })
        .catch((err) => console.log(err))
    },
    login (context, payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: '/users/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data, 'ini hasill login')
          localStorage.setItem('access_token', data.access_token)
          router.push('/products')
        })
        .catch((err) => console.log(err))
    },
    getProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('insertProducts', response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      axios({
        method: 'POST',
        url: '/cart',
        data: {
          ProductId: payload
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getCarts (context, payload) {
      axios({
        method: 'GET',
        url: '/cart',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('insertCarts', response.data.cart)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delCart (context, payload) {
      axios({
        method: 'DELETE',
        url: '/cart/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data)
          context.dispatch('getCarts')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateCart (context, payload) {
      axios({
        method: 'PUT',
        url: '/cart/' + payload.id,
        data: {
          amount: payload.amount
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data, 'hasiil')
          context.dispatch('getCarts')
        })
        .catch((err) => {
          console.log(err.message, 'eror update')
        })
    }
  }
})
