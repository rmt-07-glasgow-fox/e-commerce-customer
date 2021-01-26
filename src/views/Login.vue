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
              <h4>Login</h4>
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
              <button v-on:click.prevent="login" type="submit" class="btn btn-primary">Login</button>
            </div>
            <div>
              Don't have an account?
              <router-link to='/register'> Sign up>> </router-link>
            </div>
        </form>
    </div>
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
    login () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
    }
  },
  created () {
    this.$store.dispatch('changePage', 'login')
  }
}
</script>

<style scoped>
.loginPage {
  background-color: black;
}
</style>
