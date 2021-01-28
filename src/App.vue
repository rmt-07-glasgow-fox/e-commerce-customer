<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5 shadow-sm">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Ecommerce</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
          </ul>
          <div class="d-flex">
            <router-link to="/cartlist" class="nav-link btn btn-outline-primary mx-2"><i class="bi bi-bag"></i> Cart</router-link>
            <router-link v-if="!access_token" to="/customer" class="nav-link btn btn-outline-primary mx-2"><i class="bi bi-box-arrow-in-right"></i> Login</router-link>
            <a href="" v-if="access_token" @click.prevent="logoutCustomer" to="/" class="nav-link btn btn-outline-primary mx-2"><i class="bi bi-box-arrow-left"></i> Logout</a>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
    logoutCustomer () {
      this.$store.commit('removeAccessToken')
    }
  },
  computed: {
    access_token () {
      return this.$store.state.access_token
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

body {
  background-color: lightsteelblue;
  /* min-height: 100vh; */
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
