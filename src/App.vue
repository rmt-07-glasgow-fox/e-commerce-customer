<template>
  <div id="app">
    <div class="mb-4" id="nav">
      <div v-if="page !== 'login'">
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: rgb(21, 32, 43); color: white;">
          <div class="container-fluid">
            <a class="navbar-brand">E-Shop-E</a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
              </ul>
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
                  <div v-else class="d-flex">
                    <div>
                      <button class="btn mx-1" style="color: white" v-on:click.prevent='toCart'>Show Cart</button>
                    </div>
                    <div>
                      <button class="btn btn-danger" v-on:click.prevent='logout'>Logout</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <router-view/>
    <footer class="footer py-3 bg-light mt-auto" style="left: 0; bottom: 0; width:100%">
      <div class="container">
        <p>
          2020-2021 Company, Inc. ·
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    toCart () {
      this.$router.push('/cart')
    }
  },
  computed: {
    status () {
      return this.$store.state.status
    },
    page () {
      return this.$store.state.page
    }
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.dispatch('changeStatus', 'loggedin')
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
  color: white
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
