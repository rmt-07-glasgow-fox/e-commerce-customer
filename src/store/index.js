import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: null,
    productById: null,
    categories: null,
    banners: null,
    profile: null,
    cart: null,
    history: [],
    wishlists: [],
    filteredCategories: []
  },
  mutations: {
    GETUSER (state, payload) {
      state.profile = payload
    },
    GETPRODUCTS (state, payload) {
      state.products = payload
    },
    GETPRODUCTBYID (state, payload) {
      state.productById = payload
    },
    GETCATEGORIES (state, payload) {
      state.categories = payload
    },
    GETBANNERS (state, payload) {
      state.banners = payload
    },
    GETCART (state, payload) {
      state.cart = payload
    },
    GETHISTORY (state, payload) {
      state.history = payload
    },
    GETWISHLISTS (state, payload) {
      state.wishlists = payload
    },
    FILTERINGCATEGORIES (state, payload) {
      state.filteredCategories = payload
    }
  },
  actions: {
    GETPRODUCTS (context) {
      axios({
        method: 'get',
        url: '/products'
      }).then(({ data }) => {
        context.commit('GETPRODUCTS', data.products)
      }).catch(err => {
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
    GETPRODUCTBYID (context, payload) {
      axios({
        method: 'get',
        url: '/products/' + payload.id
      }).then(({ data }) => {
        context.commit('GETPRODUCTBYID', data.product)
      }).catch(err => {
        if (err.response.data.message === 'Error Not Found') {
          router.push('/notfound').catch(() => { })
        } else {
          Vue.swal({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        }
      })
    },
    GETCATEGORIES (context) {
      axios({
        method: 'get',
        url: '/categories'
      }).then(({ data }) => {
        context.commit('GETCATEGORIES', data.categories)
      }).catch(err => {
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
    GETBANNERS (context) {
      axios({
        method: 'get',
        url: '/banners'
      }).then(({ data }) => {
        context.commit('GETBANNERS', data.banners)
      }).catch(err => {
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
    GETUSER (context) {
      axios({
        method: 'get',
        url: '/user',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('GETUSER', data)
      }).catch(err => {
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
    GETCART (context) {
      axios({
        method: 'get',
        url: '/transaction',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('GETCART', data.transaction)
      }).catch(err => {
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
    GETHISTORY (context) {
      axios({
        method: 'get',
        url: '/history',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('GETHISTORY', data.transactions)
      }).catch(err => {
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
    GETWISHLISTS (context) {
      axios({
        method: 'get',
        url: '/wishlists',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('GETWISHLISTS', data.wishlists)
      }).catch(err => {
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
    CHECKOUT (context, payload) {
      const id = payload.id
      axios({
        method: 'put',
        url: '/transaction/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        Vue.swal({
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 1500
        })
        router.push({ name: 'History' }).catch(() => { })
        context.dispatch('GETCART')
        context.dispatch('GETHISTORY')
        context.dispatch('GETPRODUCTS')
      }).catch(err => {
        context.dispatch('GETCART')
        context.dispatch('GETPRODUCTS')
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
    CLEARCART (context, payload) {
      Vue.swal({
        title: 'Do you want to clear all cart?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const id = payload.id
          axios({
            method: 'delete',
            url: '/transaction/' + id,
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          }).then(({ data }) => {
            Vue.swal({
              icon: 'success',
              title: 'Success Clear Cart',
              showConfirmButton: false,
              timer: 1500
            })
            context.dispatch('GETCART')
          }).catch(err => {
            Vue.swal({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.message
            })
          })
        } else if (result.isDenied) {
        }
      })
    },
    ADDTOCART (context, payload) {
      const ProductId = payload.ProductId
      axios({
        method: 'post',
        url: '/cart/' + ProductId,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        Vue.swal({
          icon: 'success',
          title: 'Success Add to Cart',
          showConfirmButton: false,
          timer: 1500
        })
        context.dispatch('GETCART')
        context.dispatch('GETPRODUCTS')
      }).catch(err => {
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
    EDITCART (context, payload) {
      const id = payload.id
      const quantity = payload.quantity
      axios({
        method: 'put',
        url: '/cart/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          quantity
        }
      }).then(({ data }) => {
        Vue.swal({
          icon: 'success',
          title: 'Success Edit Cart',
          showConfirmButton: false,
          timer: 1500
        })
        context.dispatch('GETCART')
        context.dispatch('GETPRODUCTS')
      }).catch(err => {
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
    DELETECART (context, payload) {
      Vue.swal({
        title: 'Do you want to delete the cart?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          const id = payload.id
          axios({
            method: 'delete',
            url: '/cart/' + id,
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          }).then(({ data }) => {
            Vue.swal({
              icon: 'success',
              title: 'Success Deleting Cart',
              showConfirmButton: false,
              timer: 1500
            })
            context.dispatch('GETCART')
          }).catch(err => {
            Vue.swal({
              icon: 'error',
              title: 'Oops...',
              text: err.response.data.message
            })
          })
        } else if (result.isDenied) {
        }
      })
    },
    DELETEWISHLISTS (context, payload) {
      const id = payload.id
      axios({
        method: 'delete',
        url: '/wishlists/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        Vue.swal({
          icon: 'success',
          title: 'Success Delete a Wishlist',
          showConfirmButton: false,
          timer: 1500
        })
        context.dispatch('GETWISHLISTS')
      }).catch(err => {
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
    ADDWISHLIST (context, payload) {
      const ProductId = payload.ProductId
      axios({
        method: 'post',
        url: '/wishlists/' + ProductId,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        Vue.swal({
          icon: 'success',
          title: 'Success Add to Wishlist',
          showConfirmButton: false,
          timer: 1500
        })
        context.dispatch('GETWISHLISTS')
      }).catch(err => {
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    },
    GOOGLELOGIN (context, payload) {
      const token = payload.token
      axios({
        method: 'post',
        url: '/login/google',
        data: {
          google_token: token
        }
      }).then(({ data }) => {
        Vue.swal({
          icon: 'success',
          title: 'Success Logging In',
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.setItem('access_token', data.access_token)
        context.dispatch('GETUSER')
        context.dispatch('GETWISHLISTS')
        context.dispatch('GETHISTORY')
        context.dispatch('GETCART')
        context.commit('FILTERINGCATEGORIES', [])
        router.push('/').catch(() => { })
      }).catch(err => {
        Vue.swal({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      })
    }
  },
  modules: {
  },
  getters: {
    activebanner: (state) => {
      if (state.banners) {
        return state.banners.filter(e => e.status === true)
      } else {
        return null
      }
    },
    filteredProduct: (state) => {
      if (state.products) {
        if (state.filteredCategories.length === 0) {
          return state.products
        } else {
          return state.products.filter(e => {
            for (let i = 0; i < state.filteredCategories.length; i++) {
              const element = state.filteredCategories[i]
              if (Number(element) === Number(e.CategoryId)) {
                return e
              }
            }
          })
        }
      } else {
        return null
      }
    },
    similarProduct: (state) => {
      if (state.productById && state.products) {
        const getbyCategory = state.products.filter(e => {
          return Number(e.CategoryId) === Number(state.productById.CategoryId) && Number(e.id) !== state.productById.id
        })
        return getbyCategory.slice(0, 3)
      } else {
        return null
      }
    },
    carts: (state) => {
      if (state.cart) {
        return state.cart.Products
      } else {
        return []
      }
    }
  }
})
