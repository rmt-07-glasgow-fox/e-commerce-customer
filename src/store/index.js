import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {},
    carts: [],
    totalPrice: null
  },
  mutations: {
    successLogin (state, payload) {
      state.page = payload.page
      localStorage.setItem('access_token', payload.access_token)
    },
    successReadAll (state, payload) {
      state.products = payload
    },
    successReadOne (state, payload) {
      state.product = payload
    },
    successReadCart (state, payload) {
      state.carts = payload
      let totalPrice = 0
      payload.forEach(cart => {
        totalPrice += (cart.quantity * cart.Product.price)
      })
      state.totalPrice = totalPrice
    }
  },
  actions: {
    registerUser (context, payload) {
      axios({
        method: 'POST',
        url: '/customers/register',
        data: {
          email: payload.email,
          password: payload.password,
          role: 'customer'
        }
      }).then(({ data }) => {
        router.push('/login')
      }).catch(err => console.log(err))
    },
    loginUser (context, payload) {
      axios({
        method: 'POST',
        url: '/customers/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      }).then(({ data }) => {
        const obj = {
          access_token: data.access_token,
          page: 'home'
        }
        context.commit('successLogin', obj)
        router.push('/home')
      }).catch(err => console.log(err))
    },
    logoutUser (context, payload) {
      localStorage.clear()
      // context.dispatch('showList')
      router.push('/')
    },
    showList (context) {
      axios
        .get('/customers', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.commit('successReadAll', data)
        }).catch(err => console.log(err))
    },
    showCart (context) {
      axios({
        method: 'GET',
        url: '/customers/carts',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('successReadCart', data)
        })
        .catch(err => {
          console.log(err)
          context.commit('successReadCart', [])
        })
    },
    showCartOne (context, payload) {
      axios({
        method: 'GET',
        url: `/customers/carts/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          console.log(data)
        })
        .catch(err => console.log(err))
    },
    showProductOne (context, payload) {
      axios({
        method: 'GET',
        url: `/customers/products/${payload.id}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          if (payload.command === 'add') {
            context.dispatch('addCart', data)
          } else {
            console.log('update')
            const obj = {
              data: data,
              cartData: payload
            }
            context.dispatch('updateCartProduct', obj)
          }
        })
        .catch(err => {
          router.push('/login')
          console.log(err)
        })
    },
    addCart (context, payload) {
      console.log(payload, 'test')
      if (payload.stock <= 0) {
        console.log('This product is out of stock')
      } else {
        axios({
          method: 'POST',
          url: '/customers',
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            ProductId: payload.id,
            quantity: 1
          }
        })
          .then(({ data }) => {
            if (!data[1]) {
              const obj = {
                cartId: data[0].id,
                quantity: data[0].quantity,
                command: 'increment',
                type: 'addCart'
              }
              context.dispatch('updateCartProduct', { data: payload, cartData: obj })
            } else {
              console.log('create')
            }
          })
          .catch(err => console.log(err))
      }
    },
    updateCartProduct (context, payload) {
      let { cartId, quantity, command } = payload.cartData
      if (payload.data.stock < (quantity + 1) && command === 'increment') {
        console.log('No more stock')
      } else {
        command === 'increment' ? quantity++ : quantity--
        axios({
          method: 'PATCH',
          url: `/customers/carts/${cartId}`,
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            quantity: quantity
          }
        })
          .then(({ data }) => {
            if (data[0].quantity <= 0) {
              context.dispatch('deleteCartProduct', data[0].id)
            }
            context.dispatch('showCart')
          })
          .catch(err => console.log(err))
      }
    },
    deleteCartProduct (context, payload) {
      axios({
        method: 'DELETE',
        url: `/customers/carts/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.dispatch('showCart')
        })
        .catch(err => console.log(err))
    },
    checkoutCart (context, payload) {
      axios({
        method: 'PATCH',
        url: `/customers/${payload}`,
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          status: 'true'
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('showCart')
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
