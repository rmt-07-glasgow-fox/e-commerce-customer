<template>
  <div id="app">
    <navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/layouts/Navbar.vue';
import Footer from './components/layouts/Footer.vue';

export default {
  components: { Navbar, Footer },
  created() {
    this.$store.dispatch('autoLogin');
    this.$store.dispatch('fetchBanners');
    this.$store.dispatch('fetchCategories');
    this.$store.dispatch('fetchProducts');
  },
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a {
  color: #ffffff;
  text-decoration: none;
}
a:hover {
  color: #ff9900;
}

.main-div {
  padding: 2rem 1.5rem;
}

.bg-one {
  background-color: #000000;
}
.bg-two {
  background-color: #131b23;
}
.bg-three {
  background-color: #22303e;
}
.bg-fourth {
  background-color: #ff9900 !important;
}
.text-white {
  color: #ffffff !important;
}
.navbar-dark .navbar-brand {
  color: #ff9900 !important;
  font-weight: bold;
}
.navbar-dark .navbar-nav .nav-link {
  color: #ffffff !important;
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: #ff9900 !important;
}
.active {
  background-color: #ff9900 !important;
  border-color: rgba(0, 0, 0, 0.125) !important;
}

.text-yellow {
  color: #ff9900 !important;
}
</style>
