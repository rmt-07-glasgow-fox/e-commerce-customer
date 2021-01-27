<template>
  <div>
    <Navbar />
    <ListHistory />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'
import ListHistory from '../components/ListHistory.vue'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    ListHistory,
    Navbar,
    Footer
  },
  name: 'History'
}
</script>

<style scoped>
footer {
  margin-top: 16rem;
}
</style>
