<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class='container'>
      <router-link class="navbar-brand" to='/main'><b>Lajada</b></router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0" v-show="currentRouteName !== 'CartPage'">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" @click='goToCartPage' v-show="currentRouteName !== 'CartPage'">
            <a class="nav-link" href="#"><i class="fas fa-shopping-cart fa-lg"></i></a>
          </li>
          <li class="nav-item logout-btn ml-4" @click='logout'>
            <a class="nav-link" href="#" style='color:red;'><i class="fas fa-sign-out-alt" style="color:red;"></i> <b>Logout</b> </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    goToCartPage () {
      this.$router.push('/carts')
    }
  },
  computed: {
    username () {
      return this.$store.state.username
    },
    currentRouteName () {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.logout-btn  {
  border: 1px solid #fff;
}

.logout-btn:hover {
  background: black;
  border-color: red;
}

</style>
