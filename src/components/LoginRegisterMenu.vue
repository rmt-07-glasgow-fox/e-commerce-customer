<template>
  <div>
    <login-form v-if="form === 'login'" v-on:gotoRegister="gotoRegister"></login-form>
    <register-form v-else @gotoLogin="gotoLogin"></register-form>
  </div>
</template>

<script>
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default {
  name: 'LoginRegisterMenu',
  components: {
    LoginForm, RegisterForm
  },
  data () {
    return {
      form: 'login'
    }
  },
  methods: {
    gotoRegister () {
      this.form = 'register'
    },
    gotoLogin () {
      this.form = 'login'
    }
  },
  props: ['isHidden'],
  watch: {
    form: function (val, oldVal) {
      const ele = document.getElementById('navbarDropdown')

      setTimeout(function () {
        ele.click()
      }, 150)
    }
  }
}
</script>

<style scoped>

</style>
