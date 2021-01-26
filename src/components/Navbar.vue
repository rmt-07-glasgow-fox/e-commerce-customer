<template>
  <nav class="navbar navbar-light bg-light px-3 fixed-top">
    <div class="container-fluid row">
      <a class="navbar-brand col-2">R-COMMERCE</a>
      <form class="d-flex col-7">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>
      <div class="d-flex col-2 justify-content-evenly align-items-center">
        <div><i class="fas fa-shopping-cart"></i></div>
        <div><i class="fas fa-history"></i></div>
        <button v-if="!access_token" class="btn btn-sm btn-outline-success">Login</button>
        <div v-else><i class="fas fa-sign-out-alt"></i></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      access_token: localStorage.access_token
    }
  }
}
</script>

<style scoped>
  .fas{
    font-size: 1.2em;
  }
</style>
