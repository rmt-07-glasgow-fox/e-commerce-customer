<template>
  <div class="container" style="background-color: white;">
    <div class="row" style="height: auto">
      <div class="col-md-6 g-0" style="border-style: ridge; border-radius: 25px 0px 0px 25px; ">
        <form @submit.prevent="loginSubmit" class="form-container" style="width: auto; padding-top:180px; padding-left:100px; padding-right:100px;">
          <h3 class="login-p">Login</h3>
          <div class="mb-3 mt-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" id="login-email" v-model="payload.email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="login-password" class="form-label">Password</label>
            <input type="password" class="form-control" id="login-password" v-model="payload.password">
          </div>
          <div>
          <button type="submit" class="btn btn-primary" id="login-btn">Log In</button>
          <button class="btn btn-success" type="button" id="login-button" style="margin-left: 20px" @click="goToRegister">Register Here</button>
          </div>
          <p style="margin-top: 20px"><a href="" @click="goToHome">Back to Home</a></p>
        </form>
      </div>
      <div class="col-md-6 g-0">
        <div>
          <img src="../../resources/city-background.jpg" style="width: 103%; height: 650px; border-radius: 0px 25px 25px 0px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

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
    goToRegister () {
      this.$router.push('/register')
    },
    loginSubmit () {
      if (!this.payload.email || !this.payload.password) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email/Password is required'
        })
      } else {
        this.$store.dispatch('loginSubmit', this.payload)
          .then(({ data }) => {
            localStorage.access_token = data.access_token
            this.$store.commit('loggedIn')
            this.$router.push('/')
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
