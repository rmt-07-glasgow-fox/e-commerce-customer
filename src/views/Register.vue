<template>
  <div id="Register">
    <register-form />
  </div>
</template>

<script>
import RegisterForm from '../components/register/RegisterForm.vue'

export default {
  name: 'Register',
  components: {
    RegisterForm
  }
}
</script>

<style scoped>
#Register {
  background-color: #f7fafc;
}
</style>
