<template>
  <form style="max-width: 30rem;" @submit.prevent="login">
    <h3 class="m-3">Welcome Back</h3>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="user.email" required>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user.password" required>
      <label for="floatingPassword">Password</label>
    </div>
    <div class="d-flex flex-column align-items-center">
      <button type="submit" class="btn btn-primary my-3">Sign In</button>
      <router-link to="/auth/register">Doesn't have an account?</router-link>
    </div>
  </form>
</template>

<script>
import axios from '../api/axios'
import swal from 'sweetalert'

export default {
  name: 'Login',
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
    },
    login () {
      axios({
        method: 'post',
        url: '/login',
        data: {
          email: this.user.email,
          password: this.user.password
        }
      })
        .then((response) => {
          localStorage.access_token = response.data.access_token
          this.$router.push({ name: 'ItemList' })
        })
        .catch((err) => {
          swal(err.response.data.msg.join(', '), '', 'error')
        })
    }
  }
}
</script>

<style>

</style>
