<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <b-navbar-brand @click.prevent="$router.push('/')" href="#">Lapak Vue</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        v-if="$route.name !== 'Login' && $route.name !== 'Register'"
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item href="#"> Home</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item @click.prevent="goToCart" href="#"
            ><b-icon icon="cart4"></b-icon> Cart</b-nav-item
          >
          <b-button
            v-if="!$store.getters.isAuth"
            @click.prevent="$router.push('/login')"
            size="sm"
            class="my-2 my-sm-0 mr-2"
            >Login</b-button
          >
          <b-button
            v-if="!$store.getters.isAuth"
            @click.prevent="$router.push('/register')"
            size="sm"
            class="my-2 my-sm-0 mr-2"
            >Register</b-button
          >
          <b-nav-item-dropdown v-if="$store.getters.isAuth" right>
            <template #button-content
              ><b-icon icon="person-circle"></b-icon> {{ $store.getters.fullname }}
            </template>
            <b-dropdown-item @click.prevent="logout" href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goToCart() {
      if (this.$store.getters.isAuth) {
        this.$router.push('/cart');
      } else {
        this.$router.push('/login');
      }
    },
    logout() {
      this.$store.dispatch('logout');
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style></style>
