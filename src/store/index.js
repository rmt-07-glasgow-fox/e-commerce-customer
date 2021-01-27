import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
// import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    cart: null,
    cartItem: null
  },

  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },

    setCategories (state, payload) {
      state.categories = payload
    }
  },

  actions: {
    login (context, payload) {
      axios({
        method: 'post',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then((response) => {
          console.log('Berhasil', response)
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')
        })
        .catch((error) => {
          console.log('Gagal', error)
          console.log(error)
        })
    },

    logout (context, payload) {
      localStorage.clear()
      router.push('/login')
    },

    register (context, payload) {
      axios({
        method: 'post',
        url: '/register',
        data: {
          email: payload.email,
          password: payload.password,
          username: payload.username
        }
      })
        .then((response) => {
          router.push('/login')
        })
        .catch((error) => {
          console.log(error)
        })
    },

    fetchProducts (context, payload) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    fetchCategories (context, payload) {
      axios({
        method: 'get',
        url: '/products/categories'
      })
        .then((response) => {
          context.commit('setCategories', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    fetchCartItems (context, payload) {

    },

    addToCart (context, payload) {
      axios({
        method: 'post',
        url: '/carts/addToCart',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload.id
        }
      })
        .then((response) => {
          console.log('INI DATA ADD TO CART', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  modules: {
  }
})
