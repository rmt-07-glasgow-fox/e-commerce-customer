import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../api/axios'
import Swal from 'sweetalert2'

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
        localStorage.setItem('access_token', response.data.access_token)
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

    logout (context, payload) {
      localStorage.clear()
      context.commit('toggleAuth')
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

    // === Category ===
    async fetchCategories (context, payload) {
      try {
        const categories = await axios.get('/categories')
        context.commit('fetchCategories', categories.data)
      } catch (error) {
        throw new Error(error.response.data.errors)
      }
    },

    // === Baner ===
    async fetchBanners (context, payload) {
      try {
        const banners = await axios.get('/banners')
        context.commit('fetchBanners', banners.data)
      } catch (error) {
        throw new Error(error.response.data.errors)
      }
    },

    // === Cart ===
    async fetchCarts (context, payload) {
      try {
        const accessToken = localStorage.getItem('access_token')
        const carts = await axios.get('/carts/user', { headers: { access_token: accessToken }, mode: 'cors' })
        context.commit('fetchCarts', carts.data)
      } catch (error) {
        throw new Error(error.response.data.errors)
      }
    },

    async addCart (context, payload) {
      try {
        const accessToken = localStorage.getItem('access_token')
        const data = {
          qty: 1,
          ProdId: payload
        }
        await axios.post('/carts', data, { headers: { access_token: accessToken }, mode: 'cors' })
        // eslint-disable-next-line
        Swal.fire(
          'Success',
          'Added to Cart',
          'success'
        )
        context.dispatch('fetchCarts')
      } catch (error) {
        throw new Error(error.response.data.errors)
      }
    },

    async removeCart (context, payload) {
      try {
        const accessToken = localStorage.getItem('access_token')
        await axios.delete('/carts/' + payload, { headers: { access_token: accessToken } })
        context.dispatch('fetchCarts')
      } catch (error) {
        throw new Error(error.response.data.errors)
      }
    },

    async updateCart (context, payload) {
      try {
        const accessToken = localStorage.getItem('access_token')
        await axios.put('/carts/' + payload.id, payload, { headers: { access_token: accessToken } })
        context.dispatch('fetchCarts')
      } catch (error) {
        throw new Error(error.response.data.errors)
      }
    }
  },
  modules: {
  }
})
