<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <button class="btn btn-sg btn-info" @click.prevent="toMaterial">Shopping List</button>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-outline-danger my-2 my-sm-0" @click.prevent="logout">LOGOUT</button>
    </form>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavbarCart',
  methods: {
    toMaterial () {
      this.$router.push('/material')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
button {
    margin-left: 10px;
    margin-right: 10px;
}

nav {
  position: sticky;
}
</style>
