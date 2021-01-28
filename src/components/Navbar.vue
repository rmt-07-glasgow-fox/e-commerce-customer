<template>
  <nav class="navbar navbar-expand-sm bg-light navbar-light fixed-top">
    <a class="navbar-brand logo" href="#">excommerce</a>
      <div class="nav-menu">
        <div v-if="loggedIn">
          <button @click="goToHome" class="btn btn-sm btn-outline-info mr-5"><i class='fa fa-home' style='color:black'/></button>
          <button @click="goToWishlists" class="btn btn-sm btn-outline-info mr-2" data-toggle="modal" data-target="#cartModal"><i class='far fa-heart' style='color:red'></i> <span class="ml-1 badge badge-light">{{wishlistsCount}}</span></button>
          <button @click="goToCarts" class="btn btn-sm btn-outline-success mr-2" data-toggle="modal" data-target="#cartModal"><i class=" fa fa-cart-arrow-down"></i> <span class="ml-1 badge badge-light">{{cartsCount}}</span></button>
          <button @click="logout" class="btn btn-sm btn-outline-danger rounded-pill font-weight-bold text-dark" type="button">Logout</button>
        </div>
        <div v-else>
          <ul class="navbar-nav">
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-dark" href="#" id="navbardrop" data-toggle="dropdown">
                      Menu
                  </a>
                  <div class="dropdown-menu">
                  <button @click="goToHome" class="dropdown-item" type="button">Home</button>
                  <button @click="login" class="dropdown-item" type="button">Login</button>
                  <button @click="register" class="dropdown-item" type="button">Register</button>
                  </div>
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
  data () {
    return {
      loggedIn: false
    }
  },
  methods: {
    goToHome () {
      this.$router.push('/')
    },
    login () {
      this.$router.push('/login')
    },
    register () {
      this.$router.push('/register')
    },
    logout () {
      localStorage.removeItem('access_token')
      Swal.fire({
        title: 'Are you sure?',
        text: 'You can back any time to visit Us',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes, i'm leaving~"
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('access_token')
          this.$router.push('/')
          Swal.fire({
            icon: 'success',
            title: 'Good Bye',
            text: 'Thank you for your visit, have a nice day'
          })
          this.isLogin()
        }
      })
    },
    isLogin () {
      if (localStorage.access_token) {
        this.loggedIn = true
      } else {
        this.loggedIn = false
      }
    },
    goToWishlists () {
      this.$router.push('/wishlists')
    },
    goToCarts () {
      this.$router.push('/carts')
    },
    getCarts () {
      this.$store.dispatch('fetchCarts')
    },
    getWishlists () {
      this.$store.dispatch('fetchWishlists')
    }
  },
  computed: {
    cartsCount () {
      return this.$store.state.cartsCount
    },
    wishlistsCount () {
      return this.$store.state.wishlistsCount
    }
  },
  created () {
    this.isLogin()
    this.getCarts()
    this.getWishlists()
  }
}
</script>

<style>
</style>
