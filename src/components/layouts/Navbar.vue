<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <b-navbar-brand href="#">Lapak Vue</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        v-if="$route.name !== 'Login' && $route.name !== 'Register'"
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item href="#"> Home</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#"><b-icon icon="cart4"></b-icon> Cart</b-nav-item>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Login</b-button>
          <b-nav-item-dropdown right>
            <template #button-content><b-icon icon="person-circle"></b-icon> User </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style></style>
