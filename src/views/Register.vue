<template>
  <div class="register">
    <Navbar />
    <div class="col-12 com-sm-6 col-md-3">
        <div class="form-container">
            <form  @submit.prevent="register">
                <h4 class="text-center">Register</h4>
                <hr>
                <div class="form-group">
                    <label for="">Email address</label>
                    <input type="text"
                    placeholder="e.g. email@gmail.com"
                    class="form-control"
                    v-model="email_register_input"
                    >
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password"
                    placeholder="*******"
                    class="form-control"
                    v-model="password_register_input"
                    >
                </div>
                    <button type="submit" class="btn btn-warning form-control">Submit</button>
            </form>
                <p class="pt-2 text-center">Don't have an account <a href="" @click.prevent="goToLogin">Login</a></p>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'Register',
  components: {
    Navbar
  },
  data () {
    return {
      email_register_input: '',
      password_register_input: ''
    }
  },
  methods: {
    register () {
      const payload = {
        email: this.email_register_input,
        password: this.password_register_input
      }
      this.$store.dispatch('register', payload)
    },
    goToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
