<template>
  <div>
    <Navbar/>
    <!-- Form Register -->
    <div class="container">
      <div class="row justify-content-md-center">
        <form>
          <h5 class="card-title">Register</h5>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input v-model="newUser.name" type="text" class="form-control" placeholder="John Doe">
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input v-model="newUser.email" type="email" class="form-control" placeholder="john@doe.com">
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input v-model="newUser.password" type="password" class="form-control" placeholder="Password">
          </div>
          <div>
            <router-link to="/register">
              <button @click.prevent="register" type="submit" class="btn btn-outline-primary">Register</button>
            </router-link>
            <router-link to="/login">
              Already have an account to login? Click here to Login
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'FormRegister',
  components: {
    Navbar
  },
  data () {
    return {
      newUser: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', this.newUser)
    }
  }
}
</script>

<style>

</style>
