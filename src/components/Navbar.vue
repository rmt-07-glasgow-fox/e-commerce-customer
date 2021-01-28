<template>
  <header class="l-header" id="header">
    <nav class="nav bd-grid">
      <div class="nav__toggle" id="nav-toggle">
        <i @click="showMenu" class='bx bxs-grid'></i>
      </div>
      <a href="#" class="nav__logo">NIKECOMMERCE</a>
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <router-link tag="li" :to="{ name: 'Home' }" class="nav__item"><a class="nav__link">Home</a></router-link>
          <router-link v-show="isAuth" tag="li" :to="{ name: 'Wishlist' }" class="nav__item"><a class="nav__link">Wishlist</a></router-link>
          <router-link  v-show="isAuth" tag="li" :to="{name: 'Cart'}" class="nav__item"> <a class="nav__link">Cart</a></router-link>
          <router-link  v-show="isAuth" tag="li" :to="{name: 'History'}" class="nav__item"> <a class="nav__link">History</a></router-link>
          <router-link v-show="!isAuth" tag="li" :to="{ name: 'Login' }" class="nav__item"><a class="nav__link">Login</a></router-link>
          <li v-show="isAuth" class="nav__item"><a @click.prevent="logout" style="cursor:pointer" type="button" class="nav__link">Logout</a></li>
        </ul>
      </div>
    </nav>

  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  computed: {
    ...mapGetters(['isAuth'])
  },
  methods: {
    showMenu () {
      const toggle = document.getElementById('nav-toggle')
      const nav = document.getElementById('nav-menu')

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show')
        })
      }
    },
    logout () {
      localStorage.clear()
      this.$store.commit('SET_TOKEN', localStorage.getItem('token_nikecommerce'))
      if (this.$route.name !== 'Home') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>

</style>
