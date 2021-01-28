<template>
<div>
  <Navbar />
  <RegisterForm />
  <Footer />
</div>

</template>

<script>
import Footer from '../components/Footer.vue'
import RegisterForm from '../components/RegisterForm.vue'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Login',
  components: {
    Navbar,
    Footer,
    RegisterForm
  }
}
</script>
