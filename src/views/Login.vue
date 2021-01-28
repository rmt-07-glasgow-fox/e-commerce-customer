<template>
<div>
  <Navbar />
  <LoginForm />
  <Footer />
</div>

</template>

<script>
import Footer from '../components/Footer.vue'
import LoginForm from '../components/LoginForm.vue'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Login',
  components: {
    Navbar,
    Footer,
    LoginForm
  }
}
</script>
