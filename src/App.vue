<template>
  <div id="App">
    <Navbar v-if="$route.name !== 'Login' && $route.name !== 'Register'" />

    <router-view />

    <Footer v-if="$route.name === 'Home'" />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
html,
body {
  background-color: #f7fafc;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
