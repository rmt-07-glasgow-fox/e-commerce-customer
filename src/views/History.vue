<template>
<div>
  <Navbar />
  <HistoryForm />
  <Footer />
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HistoryForm from '../components/HistoryForm'

export default {
  name: 'Cart',
  components: {
    Navbar,
    Footer,
    HistoryForm
  }
}
</script>

<style>

</style>
