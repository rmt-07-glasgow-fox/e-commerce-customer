import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './modules/auth/index';
import bannersModule from './modules/banners/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    banners: bannersModule,
  },
});
