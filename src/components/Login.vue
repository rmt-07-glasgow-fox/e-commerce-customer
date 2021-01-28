<template>
  <div>
    <div class="fs-3 mb-3">Login</div>
    <form @submit.prevent="login">
      <div class="mb-3 form-group">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label class="form-label form-group">Password</label>
        <input type="password" class="form-control" v-model="password">
      </div>
      <button type="submit" class="btn btn-outline-success">Log in</button>
    </form>
    <div class="mt-2">Not on R-commerce yet? <a href="" @click.prevent="navigateRegisterForm">Register</a></div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    navigateRegisterForm () {
      this.$router.push('/register')
    },
    login () {
      const { email, password } = this
      const payload = { email, password }
      this.$store.dispatch('login', payload)
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
