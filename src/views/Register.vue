<template>
  <div class="row" style="margin-top:1%">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <main class="form-signin text-center border px-4">
        <!-- <img class="mb-4" src="https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2899&q=80" alt="" width="50%" height="50%"> -->
      <form class="my-2" v-on:submit.prevent='register'>
        <h1 class="h3 mb-3 fw-normal">Join us</h1>
        <label for="name" class="visually-hidden">Full Name</label>
        <input type="text" id="email" class="form-control " placeholder="Full name" required autofocus v-model="name">
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input type="email" id="email" class="form-control " placeholder="Email address" required autofocus v-model="email">
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input type="password" id="password" class="form-control " placeholder="Password" required v-model="password"><br>
        <button class="w-50 btn btn-sm btn-dark" type="submit">Register</button>
        <p class="mt-5 mb-3 text-muted">Already have an account? <router-link to="/login">Login</router-link> </p>
      </form>
    </main>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const { name, email, password } = this
      this.$store.dispatch('register', { name, email, password })
    }
  }
}
</script>

<style>

</style>
