<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <router-link class="navbar-brand" to="/">Mity-Commerce</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <!-- force nav items to the right side -->
        </li>
      </ul>
      <span class="navbar-text">
        <ul class="navbar-nav mr-auto">
          <div class="d-flex" v-if="!this.$store.state.isLoggedIn">
            <li class="nav-item mr-3">
              <button class="btn btn-outline-success" @click.prevent="moveToLoginPage" type="button">Login</button>
            </li>
            <li class="nav-item mr-3">
              <button class="btn btn-outline-success" @click.prevent="moveToRegisterPage" type="button">Register</button>
            </li>
          </div>
          <div class="d-flex" v-if="this.$store.state.isLoggedIn">
            <li class="nav-item">
              <router-link class="nav-link" to="/history"><i class="fas fa-history"></i></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart"><i class="fas fa-shopping-cart"></i></router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Welcome, mity</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="handleLogout"><i class="fas fa-sign-out-alt"></i></a>
            </li>
          </div>
        </ul>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    moveToLoginPage () {
      this.$router.push('/login')
    },
    moveToRegisterPage () {
      this.$router.push('/register')
    },
    handleLogout () {
      this.$store.dispatch('handleLogout')
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}

#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
