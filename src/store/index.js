import Swal from 'sweetalert2'
import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    carts: [],
    totalProductsInCart: null,
    totalPrice: null,
    status: false,
    wishlist: [],
    category: '',
    banners: []
  },
  mutations: {
    insertProducts (state, payload) {
      state.products = payload
    },
    updateCarts (state, payload) {
      state.carts = payload
    },
    updateWishlist (state, payload) {
      state.wishlist = payload
    },
    countCartItems (state, payload) {
      state.totalProductsInCart = this.unpaidItems.length
    },
    insertTotal (state, payload) {
      state.totalPrice = payload
    },
    isLoggedIn (state, payload) {
      state.status = payload
    },
    filterCategory (state, payload) {
      state.category = payload
    },
    updateBanners (state, payload) {
      state.banners = payload
    }
  },
  actions: {
    register (context, payload) {
      axios
        .post('/register', payload)
        .then(() => {
          Swal.fire(
            'Register Success!',
            'Click OK to continue to login',
            'success'
          )
          router.push('/login')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          Swal.fire(
            'Login Success!',
            'Click OK to continue',
            'success'
          )
          context.dispatch('isLoggedIn')
          router.push('/')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    isLoggedIn (context, payload) {
      if (!localStorage.getItem('access_token')) {
        context.commit('isLoggedIn', false)
      } else {
        context.commit('isLoggedIn', true)
      }
    },
    fetchProducts (context, payload) {
      axios
        .get('/products')
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(err => console.log(err.response.data.message))
    },
    fetchCart (context, payload) {
      axios
        .get('/carts', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('updateCarts', data)
          context.commit('countCartItems')
          context.dispatch('countTotal')
        })
        .catch(err => console.log(err))
    },
    fetchWishlist (context, payload) {
      axios
        .get('/wishlists', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.commit('updateWishlist', data)
        })
        .catch(err => console.log(err.response))
    },
    fetchBanners (context, payload) {
      axios
        .get('/banners', {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(({ data }) => {
          context.commit('updateBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addCart (context, payload) {
      console.log('masuk sini', payload)
      axios
        .post('/carts', { ProductId: payload }, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.dispatch('fetchCart')
          Swal.fire({
            position: 'top',
            text: 'Item added to your cart',
            customClass: 'swal-wide',
            showConfirmButton: false,
            timer: 500
          })
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    addWishlist (context, payload) {
      axios
        .post('/wishlists', { ProductId: payload }, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          context.dispatch('fetchWishlist')
          Swal.fire({
            position: 'top',
            text: 'Item added to your wishlist',
            customClass: 'swal-wide',
            showConfirmButton: false,
            timer: 500
          })
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    editQuantity (context, payload) {
      axios
        .patch(`/carts/${payload.id}/edit`, { quantity: payload.quantity }, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(() => {
          context.dispatch('fetchCart')
          context.dispatch('countTotal')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    countTotal (context, payload) {
      axios
        .get('/carts', {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(({ data }) => {
          let total = null
          const filteredData = data.filter((value) => {
            return value.status === false
          })
          filteredData.forEach(element => {
            total += element.quantity * element.Product.price
          })
          context.commit('insertTotal', total)
        })
        .catch(err => console.log(err.response.data.message))
    },
    deleteCart (context, payload) {
      console.log('masuk sini di delete', payload)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`/carts/${payload}/delete`, {
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
            .then(() => {
              Swal.fire(
                'Deleted!',
                'Your cart has been deleted.',
                'success'
              )
              context.dispatch('fetchCart')
              context.dispatch('countTotal')
            })
            .catch(err => console.log(err.response.data.message))
        }
      })
    },
    removeCart (context, payload) {
      console.log('masuk sini di remove', payload)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, remove it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`/carts/${payload.cartId}/delete`, {
              headers: {
                access_token: localStorage.getItem('access_token')
              }
            })
            .then(() => {
              Swal.fire(
                'Removed!',
                'Your product has been removed to wishlist.',
                'success'
              )
              context.dispatch('addWishlist', payload.productId)
              context.dispatch('fetchCart')
              context.dispatch('countTotal')
            })
            .catch(err => console.log(err.response.data.message))
        }
      })
    },
    deleteWishlist (context, payload) {
      axios
        .delete(`/wishlists/${payload}/delete`, {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        .then(() => {
          context.dispatch('fetchWishlist')
        })
        .catch(err => console.log(err.response))
    },
    checkout (context, payload) {
      axios
        .put('/carts', {}, {
          headers: {
            access_token: localStorage.getItem('access_token'),
            'Content-Type': 'application/json'
          }
        })
        .then(() => {
          context.dispatch('fetchCart')
          Swal.fire(
            'Checkout Success!',
            'Click OK to continue',
            'success'
          )
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Sorry...',
            text: err.response.data.message
          })
        })
    }
  },
  getters: {
    paidItems: state => {
      return state.carts.filter((value) => {
        return value.status === true
      })
    },
    unpaidItems: state => {
      return state.carts.filter((value) => {
        return value.status === false
      })
    },
    filterCategory: state => {
      if (state.category === 'all' || state.category === '') {
        return state.products
      } else {
        return state.products.filter((value) => {
          return value.category === state.category
        })
      }
    }
  }
})
