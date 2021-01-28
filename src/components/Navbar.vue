<template>
  <nav class="navbar navbar-light bg-light px-3 fixed-top">
    <div class="container-fluid row">
      <a class="navbar-brand col-2" @click="navigate"><i class="fab fa-battle-net"></i> R-COMMERCE</a>
      <form class="d-flex col-7">
        <input
          v-if="$route.path == '/'"
          class="form-control me-2" type="search" placeholder="Search" v-model="search">
      </form>
      <div class="d-flex col-2 justify-content-evenly align-items-center">
        <div
          @click="navigateToCart"
        >
          <i class="fas fa-shopping-cart"></i>
          <span v-if="$route.path != '/login' && $route.path != '/register' && carts.length ">{{ carts.length }}</span>
        </div>
        <div @click="navigateToHistory"><i class="fas fa-history"></i></div>
        <button
          v-if="!access_token"
          class="btn btn-sm btn-outline-success"
          @click="showLoginForm"
        >Login</button>
        <div v-else @click.prevent="logout"><i class="fas fa-sign-out-alt"></i></div>
      </div>
    </div>
    <div class="container-fluid row">
      <div class="col d-flex justify-content-center align-items-center" v-if="$route.path == '/'">
        <a
          @click="changeFilter(category.id)"
          class="mx-1"
          v-for="category in categories"
          :key="category.id">{{ category.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      access_token: '',
      filter: '',
      search: ''
    }
  },
  watch: {
    filter (value) {
      this.$store.commit('changeFilter', value)
    },
    search (value) {
      this.$store.commit('changeSearch', value)
    },
    access_token (value) {
      this.fetchCarts()
    }
  },
  computed: {
    ...mapState([
      'categories',
      'carts'
    ])
  },
  methods: {
    showLoginForm () {
      if (this.$route.path !== '/login') this.$router.push('/login')
    },
    navigate () {
      this.filter = ''
      if (this.$route.path !== '/') this.$router.push('/')
    },
    navigateToCart () {
      if (this.$route.path !== '/cart') this.$router.push('/cart')
    },
    navigateToHistory () {
      if (this.$route.path !== '/history') this.$router.push('/history')
    },
    fetchCategory () {
      this.$store.dispatch('fetchCategory')
    },
    changeFilter (category) {
      this.filter = category
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    fetchCarts () {
      if (this.access_token) this.$store.dispatch('fetchCarts')
    },
    fetchTransaction () {
      if (this.access_token) this.$store.dispatch('fetchTransaction')
    }
  },
  created () {
    this.access_token = localStorage.access_token
    this.fetchCarts()
    this.fetchCategory()
    this.fetchTransaction()
    this.$store.commit('changeFilter', '')
  },
  updated () {
    this.access_token = localStorage.access_token
    // this.fetchCarts()
  }
}
</script>

<style scoped>
  .fas{
    font-size: 1.2em;
    cursor: pointer;
  }
  nav{
    padding-bottom: 5px !important;
  }
  a{
    text-decoration: none;
    cursor: pointer;
    font-size: 0.8em;
    font-weight: 800;
  }
  .navbar-brand{
    font-size: 1.5em;
  }
</style>
