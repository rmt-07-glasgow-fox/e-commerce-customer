<template>
  <div class="container">
    <div class="text-center" id="nav">
    <h2 v-if="profile">Hello, {{profile.email}}</h2>
      <router-link to="/wishlist">Wishlist</router-link> |
      <router-link to="/history">History</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Profile',
  computed: {
    profile () {
      return this.$store.state.profile
    }
  },
  created () {
    this.$store.dispatch('GETUSER')
  }
}
</script>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #292b2c;
}

#nav a.router-link-exact-active {
  color: #5cb85c;
}
</style>
