import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toasted from 'vue-toasted'
import 'bulma/css/bulma.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Toasted, {
  position: 'top-right',
  duration: 2000,
  iconPack: 'fontawesome'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
