<template>
  <div class="home">
    <Navbar />
    <Main />
    <Feature />
    <Footer />
  </div>
</template>

<script>
import Main from '../components/Main.vue'
import Navbar from '../components/Navbar'
import Feature from '../components/Feature'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Main,
    Feature,
    Footer
  }
}
</script>
