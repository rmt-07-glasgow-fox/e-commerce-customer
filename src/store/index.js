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
        url: 'http://localhost:3000/register',
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
        url: 'http://localhost:3000/cust-products/',
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
        url: 'http://localhost:3000/login',
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
    addToChart (context, payload) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/cust-products/' + payload,
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
        url: 'http://localhost:3000/cust-products/',
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
        url: 'http://localhost:3000/cust-products-history/',
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
        url: 'http://localhost:3000/products',
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
    minusCart (context, payload) {
      console.log(payload, 'axios delete')
      return axios({
        method: 'PUT',
        url: 'http://localhost:3000/cust-products-minus/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          this.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkOut (context, payload) {
      console.log(payload, 'axios delete')
      return axios({
        method: 'PUT',
        url: 'http://localhost:3000/cust-products/',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          this.dispatch('fetchCart')
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    destroyCart (context, payload) {
      console.log(payload, 'axios delete')
      return axios({
        method: 'DELETE',
        url: 'http://localhost:3000/cust-products/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          this.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    plusCart (context, payload) {
      console.log(payload, 'axios delete')
      return axios({
        method: 'PUT',
        url: 'http://localhost:3000/cust-products-plus/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          this.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      console.log(payload, 'axios delete')
      return axios({
        method: 'DELETE',
        url: 'http://localhost:3000/products/' + payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          console.log(res.data)
          this.dispatch('fetchData')
        })
        .catch(err => {
          console.log(err)
        })
    },
    logOut () {
      localStorage.clear()
      this.dispatch('cekStatus')
      this.$router.push('/')
      this.dispatch('fetchData')
    }
  }
})
