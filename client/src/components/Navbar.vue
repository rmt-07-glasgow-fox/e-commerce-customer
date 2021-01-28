<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand" to="/">Balanya</router-link>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-if="statusLogin" >
            <router-link class="nav-link" to="/cart"><i class="fas fa-shopping-cart"></i><span v-if="carts.length > 0" class="badge rounded-pill bg-danger smallspan">{{ carts.length }}</span></router-link>
          </li>
          <li v-if="statusLogin" >
            <router-link class="nav-link" to="/history"><i class="fas fa-history"></i></router-link>
          </li>
        </ul>
        <button v-if="statusLogin" @click.prevent="logout" class="btn btn-sm btn-outline-light" type="button">Logout</button>
        <button v-else @click.prevent="goToLoginPage" class="btn btn-sm btn-outline-light" type="button">Login</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.commit('logout')
    },
    goToLoginPage () {
      this.$router.push('/login')
    },
    checkstatus () {
      if (localStorage.access_token) {
        this.$store.state.statusLogin = true
      }
    }
  },
  computed: {
    ...mapState([
      'statusLogin',
      'carts'
    ])
  },
  created () {
    this.checkstatus()
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style scoped>
.smallspan {
  font-size: 8px;
}
</style>
