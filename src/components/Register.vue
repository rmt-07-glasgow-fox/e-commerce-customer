<template>
  <div class="half">
    <div class="contents order-2 order-md-1">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-6">
            <div class="form-block">
              <div class="text-center mb-5">
              <h3>Register to <strong>Your new Online Shop!</strong></h3>
              </div>
              <form @submit.prevent="registerUser">
                <div class="form-group first">
                  <label for="email">Email</label>
                  <input v-model="payload.email" type="text" class="form-control" placeholder="your-email@gmail.com" id="username">
                </div>
                <div class="form-group last mb-3">
                  <label for="password">Password</label>
                  <input v-model="payload.password" type="password" class="form-control" placeholder="Your Password" id="password">
                </div>
                <p>Have an Account? <router-link to="/login">login</router-link></p>
                <input type="submit" value="Register" class="btn btn-block btn-primary">
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
  name: 'Register',
  data () {
    return {
      payload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    registerUser () {
      const payload = this.payload
      this.$store.dispatch('registerUser', payload)
      this.payload.email = ''
      this.payload.password = ''
      this.$router.replace('login')
    }
  }
}
</script>

<style>

</style>
