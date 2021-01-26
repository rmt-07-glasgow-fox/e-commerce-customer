<template>
  <div style="height: 100vh">
    <div>
      <header style='display: block; padding: 32px 0 9px; text-align: center; margin-bottom: 50px'>
        <router-link to='/'>E-Shop-E</router-link>
      </header>
    </div>
    <div style='display: block; margin: 0 auto;'>
          <form class="border rounded shadow" style="position: relative; display: block; width:368px; margin: 0 auto; padding: 40px 32px 12px;">
            <div style="text-align: left">
              <h4>Register</h4>
            </div>
            <div class="mb-3" style="text-align: left">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3" style="text-align: left">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="d-grid mt-1 mb-2">
              <button v-on:click.prevent="register" type="submit" class="btn btn-primary">Register</button>
            </div>
            <div>
              Already have an account?
              <router-link to='/login'> Click here>> </router-link>
            </div>
        </form>
    </div>
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
    register () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', user)
    }
  },
  created () {
    this.$store.dispatch('changePage', 'login')
  }
}
</script>

<style>

</style>
