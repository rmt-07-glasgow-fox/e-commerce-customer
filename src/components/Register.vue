<template>
  <div>
    <div class="fs-3 mb-3">Register</div>
    <form @submit.prevent="register">
      <div class="mb-3 form-group">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label class="form-label form-group">Password</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <button type="submit" class="btn btn-outline-primary">Register</button>
    </form>
    <div class="mt-2">Have an account? <a href="" @click.prevent="navigateLoginForm">Login</a></div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    navigateLoginForm () {
      this.$router.push('/login')
    },
    register () {
      const { email, password } = this
      const payload = { email, password }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style scoped>
  .form-group{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
