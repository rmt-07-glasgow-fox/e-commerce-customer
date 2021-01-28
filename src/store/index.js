import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    carts: [],
    totalPayment: 0,
    baseURL: 'http://localhost:3000',
    isUserLogin: false
  },
  mutations: {
    SET_PRODUCTS (state, payload) { state.products = payload },
    SET_BANNERS (state, payload) { state.banners = payload },
    SET_ISUSERLOGIN (state, payload) { state.isUserLogin = payload },
    SET_CARTS (state, payload) { state.carts = payload },
    SET_TOTALPAYMENT (state, payload) { state.totalPayment = payload }
  },
  actions: {
    async getAllProducts (context, payload) {
      try {
        const URL = this.state.baseURL + '/products/customer'
        const response = await axios.get(URL)
        context.commit('SET_PRODUCTS', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async getAllBanners (context, payload) {
      try {
        const URL = this.state.baseURL + '/banners/customer'
        const response = await axios.get(URL)
        context.commit('SET_BANNERS', response.data)
      } catch (err) {
        console.log(err)
      }
    },
    async login (context, payload) {
      try {
        const URL = this.state.baseURL + '/user/loginUser'
        const response = await axios.post(URL, payload)

        // console.log('>>> login : ', response.data)
        localStorage.setItem('access_token', response.data.access_token)
        Vue.swal('You are login !')
      } catch (err) {
        Vue.swal('Please correct email / password !')
        // console.log(err)
      }
    },
    logout (context, payload) {
      localStorage.clear()
      Vue.swal('You are logout !')
    },
    async register (context, payload) {
      try {
        const URL = this.state.baseURL + '/user/register'
        const response = await axios.post(URL, payload)

        // console.log('>>> login : ',response.data)
        localStorage.setItem('access_token', response.data.access_token)
        Vue.swal('You are registered !')
      } catch (err) {
        Vue.swal('input email and password correctly !')
        // console.log(err)
      }
    },
    isUserLogin (context, payload) {
      if (!localStorage.access_token) {
        context.commit('SET_ISUSERLOGIN', false)
        context.commit('SET_CARTS', [])
        context.commit('SET_TOTALPAYMENT', 0)
      } else {
        context.commit('SET_ISUSERLOGIN', true)
        this.dispatch('getCart')
      }
    },
    async getCart (context, payload) {
      try {
        const URL = this.state.baseURL + '/cart'
        const response = await axios.get(URL, { headers: { access_token: localStorage.access_token } })
        context.commit('SET_CARTS', response.data)
        let totalPayment = 0
        this.state.carts.length > 0 ? this.state.carts.forEach(cart => {
          totalPayment += cart.totalPrice
        }) : (totalPayment = 0)
        // console.log('>>> total :', totalPayment)
        context.commit('SET_TOTALPAYMENT', totalPayment)
      } catch (err) {
        // console.log(err)
      }
    },
    async deleteCart (context, idCart) {
      try {
        const URL = this.state.baseURL + `/cart/${idCart}`
        await axios.delete(URL, { headers: { access_token: localStorage.access_token } })
        this.dispatch('getCart')
        Vue.swal('Success deleted !')
      } catch (err) {
        Vue.swal('Fail deleted !')
        // console.log(err)
      }
    },
    async addCart (context, ProductId) {
      try {
        const quantity = 1

        const URL = this.state.baseURL + '/cart'
        const response = await axios.post(URL, { ProductId, quantity }, { headers: { access_token: localStorage.access_token } })
        // console.log(response.data)
        this.dispatch('getCart')
        Vue.swal('Success add cart !')
      } catch (err) {
        Vue.swal('Please check total quantity !')
        // console.log(err)
      }
    },
    async updateCart (context, body) {
      try {
        // console.log('>>> axios body ', body)
        const { id, quantity } = body

        const URL = this.state.baseURL + `/cart/${id}`
        const response = await axios.patch(URL, { quantity: quantity }, { headers: { access_token: localStorage.access_token } })
        // console.log(response.data)
        this.dispatch('getCart')
        Vue.swal('Success update cart !')
      } catch (err) {
        Vue.swal('Fail update cart !')
        // console.log(err)
      }
    }
  }
})
