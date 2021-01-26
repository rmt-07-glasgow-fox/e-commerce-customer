<template>
  <div id="App">
    <navbar v-if="$route.name !== 'Login' && $route.name !== 'Register'"/>

    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
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
