<template>
  <div class="half">
    <div class="contents order-2 order-md-1">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-6">
            <div class="form-block">
              <div class="text-center mb-5">
              <h3>Login to <strong>Your new Online Shop!</strong></h3>
              </div>
              <form @submit.prevent="loginUser">
                <div class="form-group first">
                  <label for="email">Email</label>
                  <input v-model="payload.email" type="text" class="form-control" placeholder="your-email@gmail.com" id="username" required>
                </div>
                <div class="form-group last mb-3">
                  <label for="password">Password</label>
                  <input v-model="payload.password" type="password" class="form-control" placeholder="Your Password" id="password" required>
                </div>
                <p>Doesn't have an Account? <router-link to="/register">Register</router-link></p>
                <input type="submit" value="Log In" class="btn btn-block btn-primary">
              </form>
            </div>
          </div>
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
      payload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginUser () {
      const payload = this.payload
      this.$store.dispatch('loginUser', payload)
      this.payload.email = ''
      this.payload.password = ''
      this.$router.replace('/')
    },
    goRegis () {
      this.$router.replace('register')
    }
  }
}
</script>

<style scoped>
</style>
