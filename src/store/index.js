import Vue from 'vue'
import Vuex from 'vuex'
import ecommerceServer from '../api/ecommerceServer'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    userProducts: [],
    pendingUserProducts: [],
    paidUserProducts: [],
    category: '',
    products: [],
    banners: [],
    categories: [],
    authStatus: 'Login',
    name: '',
    cartCount: 0
  },
  mutations: {
    changeCategory (state, payload) {
      state.category = payload
    },
    insertProducts (state, payload) {
      state.products = payload
    },
    insertCategories (state, payload) {
      state.categories = payload
    },
    insertUserProducts (state, payload) {
      state.userProducts = payload
    },
    insertPendingUserProducts (state, payload) {
      state.pendingUserProducts = payload
        .filter(e => e.paymentStatus === 'pending')
      state.cartCount = state.pendingUserProducts.length
    },
    insertPaidUserProducts (state, payload) {
      state.paidUserProducts = payload
        .filter(e => e.paymentStatus === 'paid')
    },
    insertBanners (state, payload) {
      state.banners = payload.filter(e => e.status)
    },
    filterProducts (state, payload) {
      console.log(payload.products)
      state.products = payload.products.filter(e => e.Category.categoryName === payload.categoryName)
      console.log(state.products)
    },
    changeAuthStatus (state, payload) {
      state.authStatus = payload
    },
    setIsLoggedIn (state, payload) {
      state.isLoggedIn = payload
    },
    setName (state, payload) {
      state.name = payload
    },
    setCartCount (state, payload) {
      state.cartCount = payload
    },
    setWishlist (state, payload) {
      state.userProducts = state.userProducts.map(e => {
        if (e.ProductId === payload.id) {
          e.wishlist = payload.wishlist
          return e
        }
      })
    }
  },
  actions: {
    login (context, payload) {
      ecommerceServer({
        method: 'POST',
        url: '/users/login',
        data: payload
      })
        .then(({ data }) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          setTimeout(() => {
            localStorage.access_token = data.access_token
            localStorage.name = data.name
            context.commit('setIsLoggedIn', true)
            context.commit('setName', data.name)
            router.push('/')
          }, 1500)
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid email / password',
            timer: 2000,
            showConfirmButton: false,
            footer: '<a href="#">Have you register?</a>'
          })
        })
    },
    register (context, payload) {
      ecommerceServer({
        method: 'POST',
        url: '/users/register',
        data: payload
      })
        .then(({ data }) => {
          context.dispatch('login', payload)
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid email / password',
            timer: 2000,
            showConfirmButton: false,
            footer: '<a href="#">Your password must be at least 6 characters long</a>'
          })
        })
    },
    fetchBanners (context) {
      ecommerceServer({
        method: 'GET',
        url: '/banners',
        data: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertBanners', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchProducts (context) {
      ecommerceServer({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          context.commit('insertProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchCategories (context) {
      ecommerceServer({
        method: 'GET',
        url: '/categories'
      })
        .then(({ data }) => {
          context.commit('insertCategories', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    fetchUserProducts (context, payload) {
      ecommerceServer({
        method: 'GET',
        url: '/users/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('insertPendingUserProducts', data)
          context.commit('insertPaidUserProducts', data)
          context.commit('insertUserProducts', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addToCart (context, payload) {
      ecommerceServer({
        method: 'POST',
        url: '/users/add-to-cart',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload.product.id,
          quantity: payload.quantity,
          totalPrice: payload.quantity * payload.product.price,
          paymentStatus: payload.paymentStatus,
          invoice: payload.invoice
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchUserProducts', 'pending')
        })
        .catch(err => {
          console.log(err)
        })
    },
    buyProduct (context, payload) {
      ecommerceServer({
        method: 'POST',
        url: '/users/buy',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload.product.id,
          quantity: payload.quantity,
          totalPrice: payload.quantity * payload.product.price,
          paymentStatus: payload.paymentStatus,
          invoice: payload.invoice
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
          Swal.fire({
            icon: 'success',
            title: `Hi, ${localStorage.name}`,
            text: 'Thank your for purchasing our products!',
            timer: 2000,
            showConfirmButton: true
          })
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    updateCart (context, payload) {
      ecommerceServer({
        method: 'PUT',
        url: '/users/updated',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload.product.id,
          quantity: payload.quantity,
          totalPrice: payload.quantity * payload.product.price,
          paymentStatus: payload.paymentStatus,
          invoice: payload.invoice
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchUserProducts', payload.paymentStatus)
          Swal.fire({
            icon: 'success',
            title: `Hi, ${localStorage.name}`,
            text: 'Thank your for purchasing our products!',
            timer: 2000,
            showConfirmButton: true
          })
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addWishlist (context, payload) {
      ecommerceServer({
        method: 'PATCH',
        url: '/users/wishlist',
        headers: {
          access_token: localStorage.access_token
        },
        data: payload
      })
        .then(({ data }) => {
          context.dispatch('fetchUserProducts')
        })
        .catch(err => [
          console.log(err.response)
        ])
    },
    deleteUserProduct (context, payload) {
      ecommerceServer({
        method: 'DELETE',
        url: '/users/products/' + payload,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchUserProducts', 'pending')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    updateStock (context, payload) {
      ecommerceServer({
        method: 'PATCH',
        url: '/products/stock/' + payload.id,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  getters: {
    filterCategory: state => {
      if (!state.category) {
        return state.products
      } else {
        return state.products.filter(e => {
          return e.Category.categoryName === state.category
        })
      }
    }
  }
})
