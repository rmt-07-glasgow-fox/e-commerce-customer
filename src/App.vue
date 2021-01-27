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

.main-div {
  padding: 2rem 1.5rem;
  text-align: center;
}
</style>
