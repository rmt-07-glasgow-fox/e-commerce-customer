import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel'
import VuePageTransition from 'vue-page-transition'
import Carousel3d from 'vue-carousel-3d'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(VueCurrencyFilter,
  {
    symbol: 'Rp.',
    thousandsSeparator: '.',
    fractionCount: 0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })
Vue.use(Carousel3d)

Vue.use(VuePageTransition)

Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
