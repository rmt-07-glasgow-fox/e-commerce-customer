<template>
  <form style="max-width: 30rem;">
    <h3 class="m-3">Hello</h3>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="user.email" required>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user.password" required>
      <label for="floatingPassword">Password</label>
    </div>
    <div class="d-flex flex-column align-items-center">
      <button type="submit" class="btn btn-primary my-3">Sign Up</button>
      <router-link to="/auth">Already have an account?</router-link>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    reset () {
      this.user.email = ''
      this.user.password = ''
    }
  }
}
</script>

<style>

</style>
