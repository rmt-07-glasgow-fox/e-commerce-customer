<template>
<div>
    <Navbar/>
    <div>
    <div class="container" style="display: flex; flex-direction: column; height: 80vh; width: 35vw; justify-content: center; align-item:center;">
      <h3 class="card-title" style="font-weight:bold">ERROR 404</h3>
      <h5>Error the router not found</h5>
    <form>
    </form>
    </div>
  </div>
    <Footer/>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Navbar, Footer },
  name: 'NotFound',
  data () {
    return {

    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', this.user)
    },
    toLogin () {
      this.$router.push('/login')
    }
  },
  computed: {
  }
}
</script>

<style>
.container {
    font-family: "Lato", sans-serif;
}

.sidenav {
    height: 100%;
    background-color: #000;
    overflow-x: hidden;
    padding-top: 20px;
}

.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>
