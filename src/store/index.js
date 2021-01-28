import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import axios from '../api/axios'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 'loggedout',
    page: '',
    products: [],
    cart: [],
    filteredCart: []
  },
  mutations: {
    setStatus (state, payload) {
      state.status = payload
    },
    setPage (state, payload) {
      state.page = payload
    },
    getProduct (state, payload) {
      state.products = payload
    },
    addCart (state, payload) {
      state.cart.push(payload)
    },
    addFilteredCart (state, payload) {
      state.filteredCart = payload
    },
    editCart (state, payload) {
      state.cart = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios({
        method: 'POST',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('setStatus', 'loggedin')
          router.push('/')
        })
        .catch(err => {
          Swal.fire(err.response.data.message)
        })
    },
    logout (context, payload) {
      localStorage.clear()
      context.commit('setStatus', 'loggedout')
    },
    changePage (context, payload) {
      context.commit('setPage', payload)
    },
    changeStatus (context, payload) {
      context.commit('setStatus', payload)
    },
    fetchProducts (context, payload) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYxMTc0MzQ3M30.tmXle9WkbjXy2Sv8uDkuYsPxpg5BxV43urkoCu0uS-g'
        }
      })
        .then(({ data }) => {
          context.commit('getProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addtoCart (context, payload) {
      if (!localStorage.access_token) {
        router.push('/login')
      } else {
        const stock = payload.stock
        let productOnCart = 0
        for (let i = 0; i < this.state.cart.length; i++) {
          if (this.state.cart[i].id === payload.id) {
            productOnCart = productOnCart + 1
          }
        }
        if (productOnCart === stock) {
          Swal.fire('Cannot add more than stock')
        } else {
          context.commit('addCart', payload)
        }
      }
    },
    filterCart (context) {
      const products = this.state.cart
      const result = [...products.reduce((mp, product) => {
        if (!mp.has(product.id)) mp.set(product.id, { ...product, Quantity: 0 })
        mp.get(product.id).Quantity++
        return mp
      }, new Map()).values()]
      context.commit('addFilteredCart', result)
    },
    minProduct (context, payload) {
      const products = this.state.cart
      const noChange = []
      const change = []
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === payload) {
          change.push(products[i])
        } else {
          noChange.push(products[i])
        }
      }
      change.shift()
      const newCart = noChange.concat(change)
      context.commit('editCart', newCart)
    },
    addProduct (context, payload) {
      const products = this.state.cart
      const noChange = []
      const change = []
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === payload) {
          change.push(products[i])
        } else {
          noChange.push(products[i])
        }
      }
      const newProduct = change[0]
      let stock = 0
      for (let i = 0; i < this.state.products.length; i++) {
        if (this.state.products[i].id === payload) {
          stock = this.state.products[i].stock
        }
      }
      const newConcat = change.concat(newProduct)
      if (newConcat.length > stock) {
        Swal.fire('Cannot add more than stock')
      } else {
        const newCart = noChange.concat(newConcat)
        context.commit('editCart', newCart)
      }
    },
    removeProduct (context, payload) {
      console.log('masuk store')
      const products = this.state.cart
      const noChange = []
      const change = []
      for (let i = 0; i < products.length; i++) {
        if (products[i].id === payload) {
          change.push(products[i])
        } else {
          noChange.push(products[i])
        }
      }
      context.commit('editCart', noChange)
    },
    register (context, payload) {
      axios({
        method: 'POST',
        url: '/register',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          Swal.fire('Thank you for registering')
          router.push('/login')
        })
        .catch(err => {
          Swal.fire(err.response.data.errors[0])
        })
    },
    checkout (context, payload) {
      console.log(payload, 'di store')
      Swal.fire({
        title: 'Are you sure?',
        text: `Your total checkout is Rp. ${payload}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, checkout!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Thank you for you purchase!'
          )
          const newCart = []
          context.commit('editCart', newCart)
          router.push('/')
        }
      })
    }
  }
})
