<template>
  <div class="hidden">
    <vs-navbar shadow square center-collapsed v-model="active">
      <template #left>
        <vs-button @click="activeSidebar = !activeSidebar" shadow icon>
          <i class='bx bx-menu'></i>
        </vs-button>
      </template>
      <vs-navbar-item :active="active == 'Products'" id="Products">
        H8E-commerce
      </vs-navbar-item>
      <template #right>
      <vs-navbar-item :active="active == 'Wishlist'" id="Wishlist">
        Wishlist
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'Cart'" id="Cart">
        Cart
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'Transaction History'" id="Transaction History">
        Transaction History
      </vs-navbar-item>
        <vs-button shadow>Log Out</vs-button>
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
      <vs-sidebar-item id="home">
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
      activeSidebar: false
    }
  },
  created () {
    this.$store.dispatch('fetchCategories')
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>

</style>
