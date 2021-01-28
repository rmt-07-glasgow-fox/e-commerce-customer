<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark" style="background-color: #1e2833;">
    <!-- Navbar content -->
    <div class="container-fluid">
      <a class="navbar-brand" href="/">BukaToko</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-nav mb-2 mb-lg-0" id="navbar">
        <div class="nav-item">
          <router-link class="nav-link" to="/wishlist">My Wishlist</router-link>
        </div>
        <!-- <div class="nav-item">
             <router-link class="nav-link" to="/transaction-history">My Transactions</router-link>
             </div> -->
        <div class="nav-item">
          <router-link class="nav-link" to="/cart">My Cart</router-link>
        </div>
        <div v-if="user" class="nav-item ms-auto">
          <span class="navbar-text me-3">
            Welcome, {{ user.fullName }}
          </span>
          <button @click.prevent="logout" class="btn btn-warning">Logout</button>
        </div>
        <div v-else class="nav-item dropdown ms-auto">
          <button
            @click.prevent="toggleDropdown"
            :class="['btn', 'btn-warning', 'dropdown-toggle']"
            id="navbarDropdown"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">Login/Register</button>
          <div class="login-dark dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <login-register-menu  class="dropdown-item"></login-register-menu>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LoginRegisterMenu from './LoginRegisterMenu'
export default {
  name: 'Navbar',
  components: {
    LoginRegisterMenu
  },
  data () {
    return {

    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      if (this.$route.name !== 'Home') {
        this.$router.push({ name: 'Home' })
      } else {
        this.$router.go()
      }
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  color: #FF9800 !important;
}

.navbar-nav {
  width: 100%;
}

.nav-link {
  color: #ffffffc4 !important;
}

.nav-link:hover, .router-link-active {
  color: #ffc800 !important;
}

.login-dark {
  width: 370px;
  background-size: cover;
  background-color: #1e2833;
}

.dropdown-item:hover {
  background-color: #f8f9fa00;
}
</style>
