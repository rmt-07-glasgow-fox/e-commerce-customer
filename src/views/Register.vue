<template>
<div>
  <navbar/>
  <div class="container-fluid bg">
  <div class="row justify-content-center">
    <div class="col-12 pt-5 pb-3">
      <h1>Register</h1>
    </div>
    <div class="col-4">
      <div class="card shadow pt-4">
        <div class="card-body m-auto pb-5" style="width: 70%">
          <form @submit.prevent="register">
            <div class="form-group">
              <label class="text" for="exampleInputEmail1">EMAIL</label>
              <input v-model="email" type="email" class="myform" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label class="text" for="exampleInputPassword1">PASSWORD</label>
              <input v-model="password" type="password" class="myform" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-success w-100 mybtn">REGISTER</button>
          </form>
        </div>
        <div class="card-footer">
          <p class="text mt-2">Already have an account? <a @click.prevent="goToLoginPage" href="">Login</a></p>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    goToLoginPage () {
      this.$router.push('/login')
    },
    async register () {
      try {
        const payload = {
          email: this.email,
          password: this.password,
          role: 'customer'
        }
        const response = await this.$store.dispatch('register', payload)
        if (response.status === 201) {
          this.successRegister()
        }
      } catch (err) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.errors[0]
        })
      }
    },
    successRegister () {
      this.$swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Please login',
        showConfirmButton: true
      }).then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style>

</style>
