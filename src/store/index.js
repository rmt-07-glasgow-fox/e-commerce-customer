import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false,
    products: [],
    product: {
      name: '',
      image_url: '',
      price: null,
      stock: null
    },
    categories: [],
    carts: [],
    banners: [],
    wishlists: []
  },
  mutations: {
    toggleAuth (state, payload) {
      state.isAuth = !state.isAuth
    },
    fetchProducts (state, payload) {
      state.products = payload
    },
    fetchProduct (state, payload) {
      state.product.name = payload.name
      state.product.image_url = payload.image_url
      state.product.price = payload.price
      state.product.stock = payload.stock
    },
    fetchCategories (state, payload) {
      state.categories = payload
    },
    fetchCarts (state, payload) {
      state.carts = payload
    },
    fetchBanners (state, payload) {
      state.banners = payload
    },
    fetchWishlists (state, payload) {
      state.wislists = payload
    }
  },
  actions: {
    // === Auth ===
    async login (context, payload) {
      try {
        const response = await axios.post('/users/login', payload)
        localStorage.setItem('access_token', response.access_token)
        context.commit('toggleAuth')
      } catch (error) {
        throw new Error(error.response.data.errors)
      }
    },
    async register (context, payload) {
      try {
        await axios.post('/users/register', payload)
      } catch (error) {
        throw new Error(error.response.data.errors)
      }
    },

    // === Product ===
    async fetchProducts (context, payload) {
      try {
        const products = await axios.get('/products')
        context.commit('fetchProducts', products.data)
      } catch (error) {
        throw new Error(error.response.data.errors)
      }
    },
    async fetchProduct (context, payload) {
      try {
        const product = await axios.get('/products/' + payload)
        context.commit('fetchProduct', product.data)
      } catch (error) {
        throw new Error(error.response.data.errors)
      }
    },
    async fetchCategories (context, payload) {
      try {
        const categories = await axios.get('/categories')
        console.log(categories.data, '<<categories')
        context.commit('fetchCategories', categories.data)
      } catch (error) {
        throw new Error(error.response.data.errors)
      }
    },
    async fetchBanners (context, payload) {
      try {
        const banners = await axios.get('/banners')
        context.commit('fetchBanners', banners.data)
      } catch (error) {
        throw new Error(error.response.data.errors)
      }
    }
  },
  modules: {
  }
})
