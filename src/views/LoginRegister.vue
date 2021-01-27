<template>
  <div class="center grid">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="12">
        <login-form v-if="sign === 'login'"></login-form>
        <register-form v-if="sign === 'register'"></register-form>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'
export default {
  components: { LoginForm, RegisterForm },
  name: 'LoginRegister',
  data () {
    return {
      sign: 'login'
    }
  }
}
</script>

<style>
</style>
