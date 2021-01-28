<template>
    <div>
    <nav class="navbar navbar-expand-lg fixed-top bg-white">
      <h5 role="button" class="nav-link text-dark">
        <b v-on:click="home()">Rolax</b>
        </h5>
        <button class="navbar-toggler">
          <i class="fas fa-bars"></i>
          </button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <div>
                  <button class="btn btn-light mx-2" v-on:click="history()" v-if="status === true">
                    <b>History</b>
                  </button>
                  <button class="btn btn-light mx-2" v-on:click="cart()" v-if="status === true">
                    <b>Cart</b>
                  </button>
                  <button class="btn btn-dark mr-4" v-on:click="logOut()" v-if="status === true">
                    <b>Log Out</b>
                  </button>
                  <button class="btn btn-light mx-2" v-on:click="login()" v-if="status === false">
                    <b>Login</b>
                  </button>
                  <button class="btn btn-dark mx-2" v-on:click="register()" v-if="status === false">
                    <b>Register</b>
                  </button>
                  {{status}}
                </div>
              </li>
            </ul>
          </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'NavbarLogin',
  methods: {
    cart () {
      this.$router.push('/cart')
    },
    home () {
      this.$router.push('/')
    },
    logOut () {
      this.$store.dispatch('logOut')
    },
    history () {
      this.$router.push('/history')
    },
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    }
  },
  computed: {
    ...mapState(['status'])
  }
}
</script>

<style>

</style>
