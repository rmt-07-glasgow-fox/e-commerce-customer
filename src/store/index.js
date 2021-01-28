import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataProduct: [],
    oneDataProduct: {},
    dataCart: [],
    totalList: 0,
    status: false
  },
  mutations: {
    getData (state, payload) {
      state.dataProduct = payload
    },
    getOneData (state, payload) {
      state.oneDataProduct = payload
    },
    getCart (state, payload) {
      state.dataCart = payload
    },
    showTotal (state, payload) {
      state.totalList = payload
    },
    cekStatus (state, payload) {
      state.status = payload
    }
  },
  actions: {
    cekStatus (context, payload) {
      if (localStorage.getItem('access_token')) {
        context.commit('cekStatus', true)
      } else {
        context.commit('cekStatus', false)
      }
    },
    register (context, payload) {
      console.log('masuk store', payload)
      return axios({
        method: 'POST',
        url: 'https://server-watches-romi.herokuapp.com/register',
        data: payload
      })
        .then(res => {
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    },
    totalShop (context) {
      return axios({
        method: 'GET',
        url: 'https://server-watches-romi.herokuapp.com/cust-products/',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          let total = 0
          data.forEach(element => {
            total += element.totalprice
          })
          console.log(total)
          context.commit('showTotal', total)
        })
        .catch(err => {
          console.log('masuk err')
          console.log(err)
        })
    },
    login (context, payload) {
      return axios({
        method: 'POST',
        url: 'https://server-watches-romi.herokuapp.com/login',
        data: payload
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          context.dispatch('cekStatus')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToCart (context, payload) {
      return axios({
        method: 'POST',
        url: 'https://server-watches-romi.herokuapp.com/cust-products/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(res => {
          console.log(res.data)
          this.dispatch('fetchData')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCart (context) {
      console.log('masuk fetch data')
      return axios({
        method: 'GET',
        url: 'https://server-watches-romi.herokuapp.com/cust-products/',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          context.commit('getCart', res.data)
        })
        .catch(err => {
          console.log('masuk err')
          console.log(err)
        })
    },
    fetchHistory (context) {
      return axios({
        method: 'GET',
        url: 'https://server-watches-romi.herokuapp.com/cust-products-history/',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          context.commit('getCart', res.data)
        })
        .catch(err => {
          console.log('masuk err')
          console.log(err)
        })
    },
    fetchData (context) {
      console.log('masuk fetch data')
      return axios({
        method: 'GET',
        url: 'https://server-watches-romi.herokuapp.com/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          context.commit('getData', res.data)
        })
        .catch(err => {
          console.log('masuk err')
          console.log(err)
        })
    },
    minusCart ({ dispatch, commit, state }, payload) {
      console.log(payload, 'axios delete')
      return axios({
        method: 'PUT',
        url: 'https://server-watches-romi.herokuapp.com/cust-products-minus/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          dispatch('fetchCart')
          dispatch('totalShop')
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkOut ({ dispatch, commit, state }, payload) {
      console.log(payload, 'axios delete')
      return axios({
        method: 'PUT',
        url: 'https://server-watches-romi.herokuapp.com/cust-products/',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          dispatch('fetchCart')
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    destroyCart ({ dispatch, commit, state }, payload) {
      console.log(payload, 'axios delete')
      return axios({
        method: 'DELETE',
        url: 'https://server-watches-romi.herokuapp.com/cust-products/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    plusCart ({ dispatch, commit, state }, payload) {
      console.log(payload, 'axios delete')
      return axios({
        method: 'PUT',
        url: 'https://server-watches-romi.herokuapp.com/cust-products-plus/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          dispatch('fetchCart')
          dispatch('totalShop')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
