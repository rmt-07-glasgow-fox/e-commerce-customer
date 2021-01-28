<template>
   <div class="container">
    <div class="row" style="display: flex; height: 100vh; align-items: center;">
      <div class="col-md-4 col-sm-4 col-xs-12"></div>
      <div class="col-md-4 col-sm-4 col-xs-12 rounded shadow-lg">
        <input type="radio" name="tab" id="tab-login" value="login" v-model="tab" checked> <label for="tab-login"><h4>Login</h4></label>
        <input type="radio" name="tab" id="tab-register" value="register" v-model="tab"> <label for="tab-register"><h4>Register</h4></label>
        <!-- Register -->
        <div id="register" v-if="tab === 'register'">
          <form @submit.prevent="register">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" v-model="regemail" placeholder="Enter your email address">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" v-model="regpassword" placeholder="Enter your password">
            </div>
            <button type="submit" class="btn btn-primary" id="register-btn" style="float: right;">Register</button>
          </form>
        </div>
        <!-- Login -->
        <div id="login" v-else>
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" v-model="email" placeholder="Enter your email address">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" v-model="password" placeholder="Enter your password">
            </div>
            <button type="submit" class="btn btn-primary" id="login-btn" style="float: right;">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      tab: '',
      regemail: '',
      regpassword: '',
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    },
    register () {
      this.$store.dispatch('register', { email: this.regemail, password: this.regpassword })
        .then(({ data }) => {
          console.log(data)
          this.tab = 'login'
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
