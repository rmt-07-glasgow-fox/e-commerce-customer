<template>
  <div id="nav" class="fixed-top">
    <h1>E-Disc-Store</h1>
  </div>
</template>

<script>
export default {
  name: 'NavbarAuth',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
#nav {
  background-color: rgba(255, 255, 255, 0.973);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.navbar {
  margin-right: 50px;
  margin-left: 50px;
}
.btn {
  width: 130px;
}
.bi {
  margin-bottom: -200px;
}
.dropdown {
  margin-right: -22px;
}
</style>
