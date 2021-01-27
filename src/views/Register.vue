<template>
  <div>
    <div class="row">
      <div class="col-4 offset-4 bg-light rounded shadow" style="margin-top: 20px; margin-bottom: 20px;padding: 30px;">
        <div class="text-success">
            <h2 style="text-shadow: white 1px 1px;">Register</h2><br>
            <form @submit.prevent="register">
              <input class="rounded" type="text" placeholder="Email" v-model="email_register"><br><br>
              <input class="rounded" type="password" placeholder="Password" v-model="password_register"><br><br>
              <input class="rounded" type="password" placeholder="Confirm Password" v-model="confirm_password_register"><br><br>
              <button class="btn btn-success rounded" type="submit" id="register-btn">Register</button>
            </form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'

export default {
  data () {
    return {
      email_register: '',
      password_register: '',
      confirm_password_register: ''
    }
  },
  methods: {
    register () {
      if (this.password_register === this.confirm_password_register) {
        axios({
          method: 'POST',
          url: '/register',
          data: {
            email: this.email_register,
            password: this.password_register
          }
        })
          .then(({ data }) => {
            return this.$router.push('/login')
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        console.log('password did not match')
      }
    }
  }
}
</script>

<style>

</style>
