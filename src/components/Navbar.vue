<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top bg-white">
      <h5 role="button" class="nav-link text-dark">
        <b>Rolax</b>
        </h5>
        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
          <i class="fas fa-bars"></i>
          </button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <div>
                  <button class="btn btn-light mx-2">
                    <b>Login</b>
                  </button>
                  <button class="btn btn-dark mr-4">
                    <b>Register</b>
                  </button>
                </div>
              </li>
            </ul>
          </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logOut () {
      this.$store.dispatch('logOut')
    },
    addProduct () {
      this.$router.push('/addproduct')
    }
  }
}
</script>

<style>

</style>
