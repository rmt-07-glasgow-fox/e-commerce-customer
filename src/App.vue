<template>
  <div id="app">
    <navbar></navbar>
    <notification class="alert-danger" :notif="notif" v-if="notif"></notification>
    <notification class="alert-primary" :notif ="successMessage" v-if="successMessage"></notification>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Notification from '@/components/Notification'

export default {
  components: {
    Navbar,
    Notification
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('setUser', {
        fullName: localStorage.userFullName,
        email: localStorage.userEmail,
        id: localStorage.userId,
        access_token: localStorage.access_token
      })
    }
  },
  computed: {
    notif () {
      return this.$store.state.notif
    },
    successMessage () {
      return this.$store.state.successMessage
    }
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
</style>
