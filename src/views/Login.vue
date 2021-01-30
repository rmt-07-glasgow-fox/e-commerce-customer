<template>
  <div id="Login">
    <login-form />
  </div>
</template>

<script>
import LoginForm from '../components/login/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped>
#Login {
  background-color: #f7fafc;
}
</style>
