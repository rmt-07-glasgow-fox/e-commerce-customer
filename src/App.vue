<template>
  <div id="app">
    <div id="nav">
      <div v-if="page !== 'login'">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">E-Shop-E</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
              </ul>
              <form class="d-flex mx-3">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
              <div class="nav-item">
                  <div class="d-flex" v-if="status ===  'loggedout' ">
                    <router-link
                      class="nav-link"
                      to="/login"
                    >
                    Login
                    </router-link>
                    <router-link
                      class="nav-link"
                      to="/register"
                    >
                    Register
                    </router-link>
                  </div>
                  <div v-else>
                    <button class="btn btn-danger" v-on:click.prevent='logout'>Logout</button>
                  </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    status () {
      return this.$store.state.status
    },
    page () {
      return this.$store.state.page
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

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
