<template>
  <div id="app">
    <div>

    </div>
    <div id="logo">
      <router-link to="/">Shoes Corner</router-link>
    </div>
    <div id="nav">
      <div v-if="loggedin === false">
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </div>
      <div v-if="loggedin === true" class="d-flex justify-content-between">
        <div>
        </div>
        <div>
          <router-link to="/carts">My cart</router-link>
        </div>
        <div>
          <a href="" @click="logout">Logout</a>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  methods: {
    logout () {
      localStorage.clear()
    }
  },
  computed: {
    ...mapState([
      'loggedin'
    ])
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('changeStatus', true)
    } else {
      this.$store.commit('changeStatus', false)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'lato', sans-serif;
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

#logo a {
  font-family: 'montserrat';
  font-size: 40px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  color: #42b983;
}
</style>
