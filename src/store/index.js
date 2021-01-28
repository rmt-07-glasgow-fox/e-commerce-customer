import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPage: 'productList',
    products: [],
    productDetail: {},
    errors: [],
    userDetail: {},
    carts: [],
    wishlist: []
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
      // console.log(state.products)
    },
    insertCarts (state, payload) {
      state.carts = payload
      // console.log(state.products)
    },
    insertProductDetail (state, payload) {
      state.productDetail = payload
      // console.log('ini dari insert')
      // console.log(state.productDetail)
      state.currentPage = 'editForm'
    },
    insertCurrentPage (state, payload) {
      state.currentPage = payload
    },
    insertErrors (state, payload) {
      state.errors = payload
    },
    insertUserDetail (state, payload) {
      state.userDetail = payload
      console.log(state.userDetail.role)
    },
    insertWishlist (state, payload) {
      state.wishlist = payload
      // console.log(state.products)
    }
  },
  actions: {
    toDashboard (context, payload) {
      context.dispatch('fetchProducts')
      router.push('/')
    },

    changePage (context, payload) {
      context.commit('insertCurrentPage', payload)
    },

    fetchProducts (context, payload) {
      // console.log('masuk fetch products')
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log('ini dari then')
          // console.log(data)
          context.commit('insertProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    logout (context, payload) {
      localStorage.clear()
      router.push('/login')
    },

    getProductDetail (context, payload) {
      axios({
        method: 'GET',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('insertProductDetail', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    getErrors (context, payload) {
      context.commit('insertErrors', payload)
    },

    fetchUserDetail (context, payload) {
      // console.log('masuk action')
      // console.log(payload)
      context.commit('insertUserDetail', payload)
    },

    fetchCarts (context, payload) {
      // console.log('masuk fetch products')
      axios({
        method: 'GET',
        url: '/carts',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log('ini dari then')
          // console.log(data)
          context.commit('insertCarts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchWishlist (context, payload) {
      // console.log('masuk fetch products')
      axios({
        method: 'GET',
        url: '/wishlist',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log('ini dari then')
          // console.log(data)
          context.commit('insertWishlist', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
