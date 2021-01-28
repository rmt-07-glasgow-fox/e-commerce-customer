<template>
  <div id="navbar">
    <header class="header-v3">
      <!-- Header desktop -->
      <div class="container-menu-desktop trans-03">
        <div class="wrap-menu-desktop">
          <nav class="limiter-menu-desktop p-l-45">
            <!-- Logo desktop -->
            <a href="/Home" class="logo">
              <img src="images/icons/logo-roro.png" alt="IMG-LOGO" />
            </a>

            <!-- Menu desktop -->
            <div class="menu-desktop">
              <ul class="main-menu">
                <li>
                  <a @click.prevent="goProducts">Products</a>
                </li>
              </ul>
            </div>

            <!-- Icon header -->
            <div class="wrap-icon-header flex-w flex-r-m h-full">
              <div class="flex-c-m h-full p-r-25 bor6">
                <div
                  class="icon-header-item cl0 hov-cl1 trans-04 p-lr-11 js-show-cart"
                >
                  <i @click.prevent="goCart" class="zmdi zmdi-shopping-cart"></i>
                </div>
              </div>

              <div v-if="isLogin === false " class="flex-c-m h-full p-lr-19">
                <button @click.prevent="goLogin" type="button" class="btn btn-light">Login</button>
              </div>
              <div v-if="isLogin === true" class="flex-c-m h-full p-lr-19">
                <button @click.prevent="logout" type="button" class="btn btn-light">Logout</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  computed: {
    isLogin () {
      return this.$store.state.login
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('logout')
      this.$router.push('/Products')
    },
    statusLogin () {
      this.$store.commit('statusLogin')
    },
    goCart () {
      this.$router.push('/cart')
    },
    goProducts () {
      this.$router.push('/Products')
    },
    goLogin () {
      this.$router.push('/Login')
    }
  },
  created () {
    this.statusLogin()
  }
}
</script>
<style scoped>

</style>
