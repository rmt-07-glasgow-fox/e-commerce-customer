import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    filter: ''
  },
  mutations: {
    insertProduct (state, payload) {
      state.products = payload
    },
    insertCategory (state, payload) {
      state.categories = payload
    },
    changeFilter (state, payload) {
      state.filter = payload
    }
  },
  actions: {
    fetchProduct ({ commit }) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          commit('insertProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategory ({ commit }) {
      axios({
        method: 'GET',
        url: '/categories'
      })
        .then(({ data }) => {
          commit('insertCategory', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    filterProducts: state => {
      if (state.filter === '') return state.products
      else {
        return state.products.filter(e => {
          return e.CategoryId === state.filter
        })
      }
    }
  }
})
