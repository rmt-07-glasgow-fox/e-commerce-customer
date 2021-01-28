import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    totalCart: 0,
    cartItems: []
  },

  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },

    setCategories (state, payload) {
      state.categories = payload
    },

    setCartItems (state, payload) {
      state.cartItems = payload
    },

    setTotalCart (state, payload) {
      state.totalCart = 0
      state.cartItems.forEach((i) => {
        state.totalCart += i.quantity * i.Product.price
      })
    },

    removeCartItem (state, payload) {
      state.cartItems = state.cartItems.filter((f) => f.id !== payload)
    },

    updateTotal (state, payload) {
      // const total = payload.quantity * payload.productPrice
      state.totalCart = payload.total
    }

  },

  actions: {
    login (context, payload) {
      axios({
        method: 'post',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then((response) => {
          // console.log('Berhasil', response)
          Swal.fire({
            icon: 'success',
            title: 'Login success'
          })
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')
        })
        .catch((error) => {
          // console.log('Gagal', error)
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Login failed'
          })
        })
    },

    logout (context, payload) {
      localStorage.clear()
      router.push('/login')
      Swal.fire({
        icon: 'success',
        title: 'Logout success'
      })
    },

    register (context, payload) {
      axios({
        method: 'post',
        url: '/register',
        data: {
          email: payload.email,
          password: payload.password,
          username: payload.username
        }
      })
        .then((response) => {
          router.push('/login')
          Swal.fire({
            icon: 'success',
            title: 'Success created new account'
          })
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Create new account failed'
          })
        })
    },

    fetchProducts (context, payload) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    fetchCategories (context, payload) {
      axios({
        method: 'get',
        url: '/products/categories'
      })
        .then((response) => {
          context.commit('setCategories', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },

    fetchCartItems (context, payload) {
      axios({
        method: 'get',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.commit('setCartItems', response.data.cartItems)
          context.commit('setTotalCart')
        })
        .catch((error) => {
          console.log(error)
        })
    },

    addToCart (context, payload) {
      axios({
        method: 'post',
        url: '/carts/addToCart',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          ProductId: payload.id
        }
      })
        .then((response) => {
          // console.log('INI DATA ADD TO CART', response.data)
          Swal.fire({
            icon: 'success',
            title: 'Success added product to your cart'
          })
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong, please try again later'
          })
        })
    },

    deleteCartItem (context, payload) {
      axios({
        method: 'delete',
        url: '/cartItems/' + payload.CartItemId,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          CartItemId: payload.CartItemId,
          ProductId: payload.ProductId,
          quantity: payload.quantity
        }
      })
        .then(() => {
          Swal.fire({
            title: 'Are you sure?',
            text: 'You cant be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result) {
              Swal.fire({
                icon: 'success',
                text: 'Product has been deleted'
              })
              context.commit('removeCartItem', payload.CartItemId)
              context.commit('setTotalCart')
            }
          })
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            icon: 'error',
            text: 'Failed delete product'
          })
        })
    },

    updateTotal (context, payload) {
      axios({
        method: 'patch',
        url: '/cartItems/' + payload.CartItemId,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          CartItemId: payload.CartItemId,
          ProductPrice: payload.ProductPrice,
          quantity: payload.quantity
        }
      })
        .then((response) => {
          // const _payload = {
          //   productPrice: payload.ProductPrice,
          //   quantity: payload.quantity
          // }

          context.commit('updateTotal', response.data)
          Swal.fire({
            icon: 'success',
            title: 'Quantity item updated'
          })
        })
        .catch((error) => {
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong, please try again later'
          })
        })
    }
  },

  modules: {
  }
})
