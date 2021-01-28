<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('SET_ISLOGGEDIN', true)
      this.$store.commit('SET_USER_LOGGED_IN', localStorage.getItem('email'))
    } else {
      this.$store.commit('SET_ISLOGGEDIN', false)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
