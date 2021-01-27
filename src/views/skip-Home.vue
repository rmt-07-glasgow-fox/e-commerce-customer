<template>
  <div class="home-A">
     <!-- <Navbar/> -->
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import Navbar from '../components/Navbar'
export default {
  name: 'Home-A',
  components: {
    HelloWorld
    // Navbar
  }
}
</script>
