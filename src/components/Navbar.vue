<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Shopi</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-if="($route.name !== 'Login') && ($route.name !== 'Register')" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products List
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><router-link to="/" class="dropdown-item">Products</router-link></li>
              <li
                v-for="category in getCategories" :key="category"
              >
                <router-link :to="'/category/' + category" class="dropdown-item">
                  {{category}}
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item" v-if="($route.name !== 'Login') && ($route.name !== 'Register')">
            <a class="nav-link active" aria-current="page" href="#">Cart</a>
          </li>
          <li class="nav-item" v-if="($route.name !== 'Login') && ($route.name !== 'Register')">
            <a class="nav-link" href="#">History</a>
          </li>
        </ul>
        <form class="d-flex">
          <router-link to="/logout">
            <button v-if="($route.name !== 'Login') && ($route.name !== 'Register')" class="btn btn-outline-danger" type="submit">Logout</button>
          </router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {

    }
  },
  methods: {

  },
  created () {
    this.$store.dispatch('fetchCategories')
  },
  computed: {
    getCategories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>

</style>
