import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router/index.js'
import Swal from 'sweetalert2'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    banner: [],
    category: '',
    bannerStatus: 'All',
    images: [],
    uploadedImage: '',
    userData: {
      itemoncart: []
    },
    userCart: []
  },
  mutations: {
    passingProducts (state, payload) {
      state.products = payload
    },
    passingCategories (state, payload) {
      state.categories = payload
    },
    changeCategory (state, payload) {
      state.category = payload
    },
    changeBannerStatus (state, payload) {
      state.bannerStatus = payload
    },
    passingBanner (state, payload) {
      state.banner = payload
    },
    passingImages (state, payload) {
      state.images = payload
    },
    passingUploaded (state, payload) {
      state.uploadedImage = payload
    },
    passingUserData (state, payload) {
      state.userData = payload
    },
    passingUserCart (state, payload) {
      state.userCart = payload
    }
  },
  actions: {
    login (context, payload) {
      Swal.queue([
        {
          title: 'Logging you in...',
          text: 'It will take a several times',
          showConfirmButton: false,
          onOpen: async () => {
            Swal.showLoading()
            axios({
              method: 'POST',
              url: '/login',
              data: {
                email: payload.email,
                password: payload.password
              }
            })
              .then((response) => {
                Swal.close()
                localStorage.setItem('access_token', response.data.access_token)
                router.push({ path: 'Home' })
                Swal.fire({
                  title: 'Welcome',
                  width: 300,
                  padding: '1em',
                  timer: 1500
                })
              })
              .catch((err) => {
                console.log(err)
                const errors = err.response.data.errors
                errors.forEach((element) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${element}`,
                    footer: '<a >please follow the rules</a>'
                  })
                })
              })
          }
        }
      ])
    },
    register (context, payload) {
      Swal.queue([
        {
          title: 'Registering...',
          text: 'It will take a several times',
          showConfirmButton: false,
          onOpen: async () => {
            Swal.showLoading()
            axios({
              method: 'POST',
              url: '/register',
              data: {
                email: payload.email,
                password: payload.password
              }
            })
              .then((response) => {
                Swal.close()
                router.push({ path: 'login' })
                Swal.fire({
                  title: 'Account created please check your email',
                  width: 500,
                  text: 'you can log in with your account now',
                  padding: '1em',
                  timer: 2500
                })
              })
              .catch((err) => {
                console.log(err)
                const errors = err.response.data.errors
                errors.forEach((element) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${element}`,
                    footer: '<a >please follow the rules</a>'
                  })
                })
              })
          }
        }
      ])
    },
    getProducts (context) {
      Swal.queue([
        {
          title: 'Loading the data...',
          text: 'It will take a several times',
          showConfirmButton: false,
          onOpen: async () => {
            Swal.showLoading()
            axios({
              method: 'get',
              url: '/products',
              headers: {
                access_token: localStorage.access_token
              }
            }).then(response => {
              context.commit('passingProducts', response.data)
              Swal.close()
            }).catch(err => {
              console.log(err.response.data.errors)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error while getting product list',
                footer: '<a >This might be caused by bad request</a>'
              })
            })
          }
        }
      ])
    },
    getBanner (context) {
      Swal.queue([
        {
          title: 'Loading the data...',
          text: 'It will take a several times',
          showConfirmButton: false,
          onOpen: async () => {
            Swal.showLoading()
            axios({
              method: 'get',
              url: '/banner',
              headers: {
                access_token: localStorage.access_token
              }
            }).then(response => {
              context.commit('passingBanner', response.data)
              Swal.close()
            }).catch(err => {
              console.log(err.response.data.errors)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error while getting banner list',
                footer: '<a >This might be caused by bad request</a>'
              })
            })
          }
        }
      ])
    },
    getCategories (context) {
      Swal.queue([
        {
          title: 'Loading the data...',
          text: 'It will take a several times',
          showConfirmButton: false,
          onOpen: async () => {
            Swal.showLoading()
            axios({
              method: 'get',
              url: '/categories',
              headers: {
                access_token: localStorage.access_token
              }
            }).then(response => {
              context.commit('passingCategories', response.data)
              Swal.close()
            }).catch(err => {
              console.log(err.response.data.errors)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error while getting categories list',
                footer: '<a >This might be caused by bad request</a>'
              })
            })
          }
        }
      ])
    },
    logout (context) {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()
          router.push({ path: 'Login' })
          Swal.fire(
            'Logged out!',
            'You had been log out.',
            'success'
          )
        }
      })
    },
    route (context, payload) {
      router.push({ path: payload })
    },
    getUserData (context, payload) {
      Swal.queue([
        {
          title: 'Loading user data...',
          text: 'It will take a several times',
          showConfirmButton: false,
          onOpen: async () => {
            Swal.showLoading()
            axios({
              method: 'get',
              url: '/user',
              headers: {
                access_token: localStorage.access_token
              }
            }).then(response => {
              context.commit('passingUserData', response.data[0])
              Swal.close()
            }).catch(err => {
              console.log(err.response.data.errors)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error while getting product list',
                footer: '<a >This might be caused by bad request</a>'
              })
            })
          }
        }
      ])
    },
    addWishlist (context, payload) {
      console.log(payload)
      axios({
        method: 'post',
        url: '/products/wishlist',
        data: {
          productId: +payload
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.dispatch('getUserData')
        })
        .catch((err) => {
          const errors = err.response.data.errors
          errors.forEach(element => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${element}`,
              footer: '<a >please follow the rules</a>'
            })
          })
        })
    },
    addToCart (context, payload) {
      axios({
        method: 'post',
        url: '/products/cart',
        data: {
          productId: +payload,
          quantity: 1
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.dispatch('getUserData')
          router.push({ path: 'cart' })
        })
        .catch((err) => {
          const errors = err.response.data.errors
          errors.forEach(element => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${element}`,
              footer: '<a >please follow the rules</a>'
            })
          })
          router.push({ path: 'cart' })
        })
    },
    getUserCart (context, payload) {
      Swal.queue([
        {
          title: 'Loading user data...',
          text: 'It will take a several times',
          showConfirmButton: false,
          onOpen: async () => {
            Swal.showLoading()
            axios({
              method: 'get',
              url: '/products/cart',
              headers: {
                access_token: localStorage.access_token
              }
            }).then(response => {
              context.commit('passingUserCart', response.data)
              Swal.close()
            }).catch(err => {
              console.log(err.response.data.errors)
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error while getting product list',
                footer: '<a >This might be caused by bad request</a>'
              })
            })
          }
        }
      ])
    },
    updateCart (context, payload) {
      axios({
        method: 'patch',
        url: `/products/cart/${payload.productId}`,
        data: {
          quantity: payload.quantity
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.dispatch('getUserData')
        })
        .catch((err) => {
          const errors = err.response.data.errors
          errors.forEach(element => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${element}`,
              footer: '<a >please follow the rules</a>'
            })
          })
        })
    },
    destroyCart (context, payload) {
      console.log(payload)
      axios({
        method: 'delete',
        url: `/products/cart/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.dispatch('getUserData')
        })
        .catch((err) => {
          const errors = err.response.data.errors
          errors.forEach(element => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${element}`,
              footer: '<a >please follow the rules</a>'
            })
          })
        })
    },
    removeWishlist (context, payload) {
      axios({
        method: 'delete',
        url: `/products/wishlist/${payload}`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.dispatch('getUserData')
        })
        .catch((err) => {
          const errors = err.response.data.errors
          errors.forEach(element => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${element}`,
              footer: '<a >please follow the rules</a>'
            })
          })
        })
    },
    checkout (context, payload) {
      axios({
        method: 'patch',
        url: '/checkout',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((response) => {
          context.dispatch('getUserData')
          Swal.fire({
            title: 'Receipt and invoice sended by email ',
            width: 500,
            text: 'please check your email',
            padding: '1em',
            timer: 2500
          })
        })
        .catch((err) => {
          const errors = err.response.data.errors
          errors.forEach(element => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${element}`,
              footer: '<a >please follow the rules</a>'
            })
          })
        })
    }
  },
  modules: {
  },
  getters: {
    filterCategory: state => {
      if (state.category === 'All' || state.category === '') {
        return state.products
      } else {
        return state.products.filter((value) => {
          return value.categoryId === state.category
        })
      }
    },
    filterBanner: state => {
      if (state.bannerStatus === 'All' || state.bannerStatus === '') {
        return state.banner
      } else if (state.bannerStatus === 'True') {
        return state.banner.filter((value) => {
          return value.status === true
        })
      } else if (state.bannerStatus === 'False') {
        return state.banner.filter((value) => {
          return value.status === false
        })
      }
    },
    bannerImages: state => {
      const raw = state.banner.filter((value) => {
        return value.status === true
      })
      const data = []
      raw.forEach(element => {
        data.push(element.image_url)
      })
      return data
    }
  },
  computed: {
  }
})
