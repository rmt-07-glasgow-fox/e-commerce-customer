<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
        </ul>
        <div class="inline my-2 my-lg-0">
          <ul class="navbar-nav mr-auto">
              <li class="nav-item active" v-if="!status">
                <router-link class="nav-link" to="/register">Register</router-link>
              </li>
              <li class="nav-item active" v-if="!status">
                <router-link class="nav-link" to="/login">Login</router-link>
              </li>
              <li class="nav-item active" v-if="status">
                <button class="btn btn-link text-danger" @click="logout">Logout</button>
              </li>
              <li class="nav-item active" v-if="status">
                <router-link class="nav-link" to="/history">History</router-link>
              </li>
              <li class="nav-item active" v-if="status">
                <router-link class="nav-link" to="/wishlist"><img src="../assets/wishlist-btn.png" alt="" style="width:75%; height:75%"></router-link>
              </li>
              <li class="nav-item active" v-if="!status">
                <router-link class="nav-link" to="/cart"><img src="../assets/icon-cart.png" alt="" style="width:40%; height:30%"><span class="badge badge-primary">0</span></router-link>
              </li>
              <li class="nav-item active" v-if="status">
                <router-link class="nav-link" to="/cart"><img src="../assets/icon-cart.png" alt="" style="width:40%; height:30%"><span class="badge badge-primary">{{ unpaidItems.length }}</span></router-link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      Swal.fire(
        'Logout successfull',
        'Click OK to continue!',
        'success'
      )
      this.$store.dispatch('isLoggedIn')
      this.$store.dispatch('fetchCart')
      this.$router.push('/')
    }
  },
  computed: {
    unpaidItems () {
      return this.$store.getters.unpaidItems
    },
    status () {
      return this.$store.state.status
    }
  },
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style>

</style>
