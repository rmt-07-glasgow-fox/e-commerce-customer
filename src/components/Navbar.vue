<template>
  <nav class="navbar bg-light">
    <div class="d-flex bd-highlight mb-3">
      <div class="mr-auto p-2 bd-highlight">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/user">login</router-link> |
          <router-link to="/carts">Carts</router-link>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div class="ml-auto p-2 bd-highlight">
          <button @click="logout" class="btn btn-danger btn-sm">Log Out</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('removeCart')
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>
  nav {
    height: 70px;
  }
</style>
