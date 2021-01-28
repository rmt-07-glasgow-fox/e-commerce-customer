import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import jQuery from 'jquery'

Vue.config.productionTip = false
global.$ = jQuery
Vue.use(VueSweetalert2)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
