import Vue from 'vue'
import Vuex from 'vuex'

import auth from './module/auth/index.js'
import banner from './module/banner/index.js'
import category from './module/category/index.js'
import product from './module/product/index.js'
import cart from './module/cart/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    banner,
    category,
    product,
    cart
  }
})
