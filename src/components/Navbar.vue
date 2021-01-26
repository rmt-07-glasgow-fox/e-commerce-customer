<template>
  <nav class="navbar navbar-light bg-light px-3 fixed-top">
    <div class="container-fluid row">
      <a class="navbar-brand col-2" @click="navigate">R-COMMERCE</a>
      <form class="d-flex col-7">
        <input class="form-control me-2" type="search" placeholder="Search" v-model="search">
      </form>
      <div class="d-flex col-2 justify-content-evenly align-items-center">
        <div><i class="fas fa-shopping-cart"></i></div>
        <div><i class="fas fa-history"></i></div>
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
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    showLoginForm () {
      if (this.$route.path !== '/login') this.$router.push('/login')
    },
    navigate () {
      this.filter = ''
      if (this.$route.path !== '/') this.$router.push('/')
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
    }
  },
  created () {
    this.access_token = localStorage.access_token
    this.fetchCategory()
    this.$store.commit('changeFilter', '')
  },
  updated () {
    this.access_token = localStorage.access_token
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
</style>
