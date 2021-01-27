<template>
  <nav class="navbar fixed-top px-5 bg-white shadow-sm py-3">
    <div class="container-fluid">
      <div class="d-flex justify-content-start">
        <router-link to="/" class="text-decoration-none">
          <a class="navbar-brand" href="#">
            <span class="fw-bold">Buka Warung</span>
          </a>
        </router-link>
        <div class="mx-2 col-10 align-self-center">
          <input class="form-control" id="search-task" type="search" placeholder="Search Product">
        </div>
      </div>
      <!-- Cart, If Login -->
      <div v-if="isLogin" class="d-flex justify-content-end">
        <router-link to="/carts">
          <button class="align-self-center btn position-relative">
            <svg class="cart-icon text-muted" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <small v-if="totalCarts !== 0" class="cart-num bg-danger text-white fw-bold px-2 rounded-circle position-absolute">{{ totalCarts }}</small>
          </button>
        </router-link>
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-muted" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ account }}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a @click="logout" class="dropdown-item text-muted" href="#">logout</a></li>
          </ul>
        </div>
      </div>
      <!-- If Not Login -->
      <div v-if="!isLogin">
        <router-link to="/login">
          <button class="btn btn-primary btn-login mx-2">Login</button>
        </router-link>
        <router-link to="/register">
          <button class="btn btn-outline-primary btn-register">Register</button>
        </router-link>
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
      localStorage.clear()
      this.$store.commit('setLogin', false)
      this.$router.push('/')
    }
  },
  computed: {
    ...mapState([
      'isLogin',
      'account',
      'carts'
    ]),
    totalCarts () {
      const activeCarts = this.carts.filter(el => el.checkout === false)
      return activeCarts.length
    }
  }
}
</script>

<style scoped>
.cart-icon {
  width: 1.5rem;
  height: 1.5rem;
}
.cart-num {
  top: 0;
}
</style>
