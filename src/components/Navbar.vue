<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class='container'>
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-shopping-cart"></i></a>
          </li>
          <li class="nav-item logout-btn ml-2">
            <a class="nav-link" href="#" style='color:red;'><i class="fas fa-sign-out-alt" style="color:red;"></i> <b>Logout</b></a>
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
    }
  },
  computed: {
    username () {
      return this.$store.state.username
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
