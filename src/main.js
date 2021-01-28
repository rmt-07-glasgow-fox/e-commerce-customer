import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueSweetalert2 from 'vue-sweetalert2'
import VueCarousel from 'vue-carousel'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'

library.add(faTrash)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueSweetalert2)
Vue.use(VueCarousel)
Vue.use(VueToast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
