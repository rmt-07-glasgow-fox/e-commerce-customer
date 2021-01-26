import Vue from 'vue'
import Vuex from 'vuex'

import auth from './module/auth/index.js'
import banner from './module/banner/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    banner
  }
})
