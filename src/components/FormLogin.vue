<template>
  <div>
    <Navbar/>
    <!-- Fom Login -->
    <div class="container">
      <div class="row justify-content-md-center">
        <form>
          <h5 class="card-title">Login</h5>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input v-model="user.email" type="text" class="form-control" placeholder="your@mail.com">
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input v-model="user.password" type="password" class="form-control" placeholder="Password">
          </div>
          <div>
            <router-link to="/login">
              <button @click="login" type="submit" class="btn btn-outline-primary">Login</button>
            </router-link>
            <router-link to="/register">
              Dont have account yet to login? Click here to register
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
  name: 'FormLogin',
  components: {
    Navbar
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.user)
    }
  }
}
</script>

<style>

</style>
