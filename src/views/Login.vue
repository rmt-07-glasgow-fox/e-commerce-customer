<template>
  <div class="login">
      <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  computed: {
    LoginPageStatus () {
      return this.$store.state.loginPage
    }
  }
}
</script>

<style scoped>
.login {
  width: 325px;
  margin: auto;
  margin-top: 10px;
}

.loginForm {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
