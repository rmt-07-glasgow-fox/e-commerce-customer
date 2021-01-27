<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid px-5 py-2 align-items-center">

    <router-link to="/" class="navbar-brand" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/></svg>
    Modemarkt</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
      <!-- <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul> -->
      <!-- <form class="d-flex">
        <input class="form-control me-2" v-model="search" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
      <ul class="navbar-nav">
        <router-link to="/cart" class="nav-item text-decoration-none px-3">
          <a class="nav-link" aria-current="page" href="#">Cart ({{ totalCartItems }}) </a>
        </router-link>
        <li class="nav-item dropdown" v-if="!loginStatus">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to='/login' class="text-decoration-none"><a class="dropdown-item" href="#">Login</a></router-link>
            <!-- <li v-if="loginStatus"><a class="dropdown-item" @click.prevent="logout" href="#">Logout</a></li> -->
          </ul>
        </li>
        <li class="nav-item dropdown" v-if="loginStatus">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ userEmail }}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <!-- <li v-if="!loginStatus"><a class="dropdown-item" href="#">Login</a></li> -->
            <li><a class="dropdown-item" @click.prevent="logout" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      search: ''
    }
  },
  computed: {
    loginStatus () {
      return this.$store.getters.loginStatus
    },
    token () {
      return this.$store.state.token
    },
    totalCartItems () {
      return this.$store.getters.totalCartItems
    },
    userEmail () {
      return this.$store.state.userEmail
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('updateToken', null)
      this.$store.commit('updateCartItems', [])
      if (this.$route.path !== '/') this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
