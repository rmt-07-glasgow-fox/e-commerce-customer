<template>
<div class="row container mt-5">
    <div class="col-md-5 mt-5"></div>
  <div class="col-md-5 mt-2">
    <br><br><br>
    <b class="h1">Register</b>
    <br>
    <form @submit.prevent="register">
    <div class="form-group">
      <br>
      <input type="text" class="form-control" required v-model="name" placeholder="Enter Your Name">
    </div>
    <div class="form-group">
      <br>
      <input type="email" class="form-control" required v-model="email" placeholder="Enter email">
      <br>
    </div>
    <div class="form-group">
      <input type="password" class="form-control" required v-model="password" placeholder="Password">
      <br>
    </div>
    <div class="row">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
  </div>
  <div class="col-md-4 mt-5"></div>
</div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      error: 0
    }
  },
  methods: {
    register () {
      const payload = { name: this.name, email: this.email, password: this.password }
      this.$store.dispatch('register', payload)
        .then(data => {
          if (!data) {
            this.error++
          }
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    error  (payload) {
      if (this.error === 1) {
        console.log(payload, 'masuk watcher')
        Swal.fire(
          'Wrong Input?',
          'Account Password must be 3 - 30 charcters',
          'warning'
        )
        this.error = 0
      }
    }
  }
}
</script>
