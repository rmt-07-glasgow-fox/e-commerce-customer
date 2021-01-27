<template>
  <vs-navbar shadow square center-collapsed v-model="active">
    <template #left>
      <vs-button @click="activeSidebar = !activeSidebar" flat icon>
        <i class='bx bx-menu'></i>
      </vs-button>
    </template>
    <vs-navbar-item :active="active == 'guide'" id="guide">
      Guide
    </vs-navbar-item>
    <vs-navbar-item :active="active == 'docs'" id="docs">
      Documents
    </vs-navbar-item>
    <vs-navbar-item :active="active == 'components'" id="components">
      Components
    </vs-navbar-item>
    <vs-navbar-item :active="active == 'license'" id="license">
      license
    </vs-navbar-item>
    <template #right>
      <vs-button flat >Login</vs-button>
      <vs-button>Get Started</vs-button>
    </template>
  </vs-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      active: 'home',
      activeSidebar: false
    }
  }
}
</script>

<style>

</style>
