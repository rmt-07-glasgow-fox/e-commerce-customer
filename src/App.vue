<template>
  <div id="app">
    <Navbar/>
    <router-view class="view"/>
    <Footer v-if="page == 'Dashboard'"/>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { mapState } from 'vuex'
export default {
  components: {
    Footer,
    Navbar
  },
  computed: {
    ...mapState([
      'page'
    ])
  },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('getCarts')
      this.$store.dispatch('getHistories')
      this.$store.commit('statusLogin')
    }
    this.$store.dispatch('getProducts')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.view{
  min-height: 75vh;
}
</style>
