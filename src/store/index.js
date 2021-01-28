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
    setProducts (state, payload) {
      state.products = payload
    },
    setCarts (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    fetchProducts ({ commit }) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (context, userLogin) {
      axios({
        method: 'POST',
        url: '/login/customer',
        data: {
          email: userLogin.email,
          password: userLogin.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, addToCart) {
      axios({
        method: 'POST',
        url: '/products/customer',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          id: addToCart.id,
          quantity: addToCart.amount
        }
      })
        .then(({ data }) => {
          if (data) {
            console.log('berhasil add')
            router.push('/cart')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCart ({ commit }) {
      axios({
        method: 'GET',
        url: '/products/customer',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          commit('setCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    register (context, userRegister) {
      axios({
        method: 'POST',
        url: '/register/customer',
        data: {
          email: userRegister.email,
          password: userRegister.password
        }
      })
        .then(({ data }) => {
          if (data) {
            router.push('/login')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCart (context, dataProduct) {
      axios({
        method: 'PATCH',
        url: `/products/customer/${dataProduct.id}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          quantity: dataProduct.quantity,
          productId: dataProduct.id
        }
      })
        .then(({ data }) => {
          if (data) {
            router.push('/cart')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCart (context, dataProduct) {
      axios({
        method: 'DELETE',
        url: `/products/customer/${dataProduct.cartId}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          if (data) {
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
