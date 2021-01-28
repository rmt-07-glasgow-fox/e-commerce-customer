<template>
  <div class="hidden">
    <vs-navbar shadow square center-collapsed v-model="active" id="navbar">
      <template #left>
        <vs-button @click="activeSidebar = !activeSidebar" shadow icon>
          <i class='bx bx-menu'></i>
        </vs-button>
      </template>
      <vs-navbar-item :active="active == 'Home'" id="Home" @click.prevent="redirectProducts">
        <img src="https://global-uploads.webflow.com/5f0d53c042a9ed6288de7f8d/5f68150db527de25e82c86f1_Hacktiv8%20logo%20horizontal%2001%20black.png" width="100">
      </vs-navbar-item>
      <template #right>
      <vs-navbar-item :active="active == 'Wishlist'" id="Wishlist" @click.prevent="redirectWishlist">
        Wishlist
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'Cart'" id="Cart" @click.prevent="redirectCart">
        Cart
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'Transaction History'" id="Transaction History" @click.prevent="redirectTransaction">
        Transaction History {{isAuth}}
      </vs-navbar-item>
        <vs-button shadow v-if="!isAuth" @click.prevent="redirectLogin">Log In</vs-button>
        <vs-button shadow v-if="isAuth" @click.prevent="logout">Log Out</vs-button>
      </template>
    </vs-navbar>
    <vs-sidebar
      absolute
      v-model="active"
      :open.sync="activeSidebar"
      >
      <template #logo>
        <!-- ...img logo -->
        <img src="https://global-uploads.webflow.com/5f0d53c042a9ed6288de7f8d/5f68150db527de25e82c86f1_Hacktiv8%20logo%20horizontal%2001%20black.png">
      </template>
      <vs-sidebar-item id="home" @click.prevent="redirectProducts">
        <template #icon>
          <i class='bx bx-home'></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-group>
        <template #header>
          <vs-sidebar-item arrow>
            <template #icon>
              <i class='bx bx-grid-alt'></i>
            </template>
            Category
          </vs-sidebar-item>
        </template>

        <vs-sidebar-item v-for="(category, i) in categories" :key="i" :id="`${category.name}`">
          {{ category.name }}
        </vs-sidebar-item>

      </vs-sidebar-group>
      <template #footer>
      </template>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      active: 'home',
      activeSidebar: false,
      isAuth: false
    }
  },
  methods: {
    checkAuth () {
      localStorage.getItem('access_token') ? this.isAuth = true : this.isAuth = false
      console.log(this.isAuth)
    },
    redirectLogin () {
      this.$router.replace('/auth/login')
    },
    logout () {
      localStorage.clear()
      this.redirectLogin()
    },
    redirectProducts () {
      this.$router.replace('/')
    },
    redirectCart () {
      this.$router.replace('/cart')
    },
    redirectWishlist () {
      this.$router.replace('/wishlist')
    },
    redirectTransaction () {
      this.$router.replace('/transaction')
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
    this.checkAuth()
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>
  #navbar {
    position: fixed;
  }
</style>
