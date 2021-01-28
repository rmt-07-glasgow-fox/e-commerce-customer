import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api/axios'
import router from '@/router'
import moduleProduct from '@/store/moduleProduct'
import moduleCart from '@/store/moduleCart'
import moduleWishlist from '@/store/moduleWishlist'
import moduleTransaction from '@/store/moduleTransaction'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.access_token,
    isLoadLogin: false,
    isLoadRegister: false,
    banners: []
  },
  mutations: {
    login (state) {
      state.isLogin = true
    },
    logout (state) {
      state.isLogin = false
    },
    isLoadLogin (state, data) {
      state.isLoadLogin = data
    },
    isLoadRegister (state, data) {
      state.isLoadRegister = data
    },
    fetchBanners (state, banners) {
      state.banners = banners
    }
  },
  actions: {
    login (context, data) {
      context.commit('isLoadLogin', true)
      axios({
        method: 'POST',
        url: '/login',
        data: data
      })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          setTimeout(() => {
            context.commit('login')
            context.commit('isLoadLogin', false)
            context.dispatch('toastMsg', { icon: 'success', title: 'Login Success!' })
            router.push({ name: 'Home' })
          }, 1000)
        })
        .catch(({ response }) => {
          setTimeout(() => {
            context.commit('isLoadLogin', false)
            const msg = response.data.message
            context.dispatch('toastMsg', { icon: 'error', title: msg })
          }, 1000)
          console.log(response)
        })
    },
    logout (context, data) {
      localStorage.clear()
      context.commit('logout')
      context.commit('clearCart', null, true)
      context.commit('clearWishlist', null, true)
      context.dispatch('toastMsg', { icon: 'success', title: 'Successfully logged out!' })
      data.currentRouteName !== 'Home' && router.push({ name: 'Home' })
    },
    register (context, payload) {
      context.commit('isLoadRegister', true)
      axios({
        method: 'POST',
        url: '/register',
        data: payload
      })
        .then(({ data }) => {
          console.log(data)
          return axios({
            method: 'POST',
            url: '/login',
            data: { email: payload.email, password: payload.password }
          })
        })
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          setTimeout(() => {
            context.commit('login')
            context.commit('isLoadRegister', false)
            context.dispatch('toastMsg', { icon: 'success', title: 'Register Success!' })
            router.push({ name: 'Home' })
          }, 1000)
        })
        .catch(({ response }) => {
          setTimeout(() => {
            context.commit('isLoadRegister', false)
            const msg = response.data.message
            context.dispatch('toastMsg', { icon: 'error', title: msg })
          }, 1000)
          console.log(response)
        })
    },
    fetchBanners (context) {
      axios({
        method: 'GET',
        url: '/banners/active'
      })
        .then(({ data }) => {
          context.commit('fetchBanners', data)
        })
        .catch(({ response }) => {
          console.log(response.data)
          const msg = response.data.message
          context.dispatch('toastMsg', { icon: 'error', title: msg })
        })
    },
    toastMsg (context, payload) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({ icon: payload.icon, title: payload.title })
    }
  },
  modules: {
    mProducts: moduleProduct,
    mCart: moduleCart,
    mWishlist: moduleWishlist,
    mTransaction: moduleTransaction
  }
})
