<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning">
      <a class="navbar-brand" @click.prevent="showHome" href="#">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
              <li class="nav-item active">
                  <router-link class="nav-link" to="/cart" v-if="$store.state.token">Show My Cart!<span class="sr-only">(current)</span></router-link>
              </li>
          </ul>
          <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/register" v-if="!$store.state.token" >Register</router-link>
                </li>
                <li class="nav-item" >
                    <router-link class="nav-link" to="/login" v-if="!$store.state.token" >Login</router-link>
                </li>
                <li class="nav-item" >
                    <a class="nav-link" @click.prevent='logout' v-if="$store.state.token" >Log Out</a>
                </li>
          </ul>
      </div>
    </nav>
</template>

<script>
export default {
  methods: {
    showRegister () {
      this.$router.push({ path: '/register' })
    },
    showLogin () {
      this.$router.push({ path: '/login' })
    },
    showCart () {
      this.$router.push({ path: '/cart' })
    },
    showHome () {
      this.$router.push({ path: '/' })
      this.$store.dispatch('fetchProducts')
    },
    logout () {
      localStorage.clear()
      this.$store.commit('SET_TOKEN', localStorage.access_token)
      this.$store.commit('SET_CART', [])
      this.$store.dispatch('fetchCart')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style>
.dropdown-toggle,
.dropdown-menu {
    border-radius: 0px !important;
}
.dropdown-item:hover {
    color: white;
    background-color: transparent;
}
.btn-danger {
    width: 55%;
}
.dropdown:hover>.dropdown-menu {
  display: block;
}
</style>
