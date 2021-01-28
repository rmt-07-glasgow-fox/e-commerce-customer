<template>
  <div id="app">
    <Nav style="position: sticky; z-index: 1000;"></Nav>
    <router-view class="w-screen"/>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
</style>
