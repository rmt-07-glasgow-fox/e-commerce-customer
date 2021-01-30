import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap
import 'bootstrap'
import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.min.css'

// import GoogleSignInButton from 'vue-google-signin-button-directive'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // GoogleSignInButton,
  render: h => h(App)
}).$mount('#app')
