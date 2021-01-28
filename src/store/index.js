import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './modules/auth/index';
import bannersModule from './modules/banners/index';
import categoriesModule from './modules/categories/index';
import productsModule from './modules/products/index';
import cartsModule from './modules/carts/index';
import ordersModule from './modules/orders/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    banners: bannersModule,
    categories: categoriesModule,
    products: productsModule,
    carts: cartsModule,
    orders: ordersModule,
  },
});
