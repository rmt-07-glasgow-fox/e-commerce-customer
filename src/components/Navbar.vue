<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style="font-weight:bold" @click.prevent="toHome">
      THE MAN STORE
    </a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link btn btn-outline-light btn-sm" href="#" @click.prevent="toProducts" v-if="$route.name == 'MyCart'  || $route.name == 'Banners'" style="border:none;">Products</a>
        </li>
        </ul>
        <form
        class="form-inline"
        style="padding-left: 310px"
        v-if="$route.name == 'Home' || $route.name == 'Carts' || $route.name == 'Transactions' || $route.name == 'Wishlists'"
        >
        <input
          class="form-control"
          type="search"
          v-model="search"
          placeholder="barang ..."
          aria-label="Search">
        </form>
        <button
          class="btn btn-outline-dark"
          type="submit"
          v-if="$route.name == 'Home' || $route.name == 'Carts' || $route.name == 'Transactions' || $route.name == 'Wishlists'"
          @click.prevent="toSearch"
          style="margin-left: 6px; border:none; font-weight:bold">Search</button>
      </div>
          <a
          class="nav-link btn btn-outline-danger btn-sm"
          href="#"
          @click.prevent="toWish"
          style="border:none;">
            <img alt="Vue logo" src="../assets/wishlists-img.png" height="27px">
          </a>
          <a
          class="nav-link btn btn-outline-secondary btn-sm"
          href="#"
          @click.prevent="toHistory"
          style="border:none;">
            <img src="../assets/history-img.png" alt="" height="20px">
          </a>
          <a
          class="nav-link btn btn-outline-primary btn-sm"
          href="#"
          @click.prevent="toCarts"
          style="border:none;">
            <img alt="Vue logo" src="../assets/cart-img.png" height="27px">
          </a>
          <p v-if="setAccess"
          style="width: 350px; margin-bottom:-2px; font-weight:bold">
            Hello, {{setName}}
          </p>
          <div style="font-weight:bold; font-color:black">
          <a
            class="nav-link btn btn-outline-dark"
            href="#"
            v-if="$store.state.isLogin === false"
            @click.prevent="toLogin"
            style="border:none;font-weight:bold;">Login</a>
          </div>
          <div style="font-weight:bold; font-color:black">
          <a
            class="nav-link btn btn-outline-dark"
            href="#"
            v-if="$route.name == 'Login' || $route.name == 'Banners'"
            @click.prevent="toRegister"
            style="border:none;font-weight:bold;">Register</a>
          </div>
          <div style="font-weight:bold; font-color:black">
          <a
            class="nav-link btn btn-outline-dark"
            href="#"
            v-if="setAccess || $route.name == 'Banners' ||  $route.name == 'Carts' ||  $route.name == 'Transactions' || $route.name == 'Wishlists'"
            @click.prevent="toLogout"
            style="border:none;font-weight:bold;">Logout</a>
          </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      search: ''
    }
  },
  created () {
    this.$store.dispatch('checkingLogin')
  },
  methods: {
    toHome () {
      this.$store.state.errorData = ''
      this.$router.push('/')
    },
    toLogin () {
      this.$store.state.errorData = ''
      this.$router.push('/login')
    },
    toRegister () {
      this.$store.state.errorData = ''
      this.$router.push('/register')
    },
    toWish () {
      this.$store.state.errorData = ''
      this.$router.push('/wishlists')
    },
    toCarts () {
      this.$store.state.errorData = ''
      this.$router.push('/carts')
    },
    toHistory () {
      this.$store.state.errorData = ''
      this.$router.push({ name: 'Transactions' })
    },
    toLogout () {
      this.$store.state.errorData = ''
      this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    toSearch () {
      this.$store.state.errorData = ''
      this.search = ''
      this.$router.push('/')
    }
  },
  computed: {
    setName () {
      return localStorage.username
    },
    setAccess () {
      return localStorage.access_token
    }
  }
}
</script>

<style>

</style>
