<template>
  <div class="card-body">
    <h5 class="card-title text-center">Login</h5>
    <form class="form-signin" @submit.prevent="register">

      <div class="form-label-group">
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="user.email" required>
        <label for="inputEmail">Email</label>
      </div>

      <div class="form-label-group">
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="user.password" required>
        <label for="inputPassword">Password</label>
      </div>

      <div class="btnGroup">
        <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      try {
        await this.$store.dispatch('login', this.user)
        this.user.email = ''
        this.user.password = ''
        this.$router.replace('/')
      } catch (error) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error
        })
      }
    }
  }
}
</script>

<style>
</style>
