<template>
  <form class="mt-2 formLogin">
    <div>
      <p class="h2 text-center text-primary">MyLogin</p>
    </div>
    <div class="loginResult">
      <p class="text-center text-danger"></p>
    </div>
    <div class="form-group">
      <input type="email" class="form-control" v-model="user.email" placeholder="Email">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" v-model="user.password" placeholder="Password">
    </div>
    <button class="btn btn-primary btn-block"
     @click.prevent="login">Login</button><br>
    <button class="btn btn-link no-wrap"
     @click.prevent="register">
        Don't have an account? Register here
    </button>
  </form>
</template>

<script>
export default {
  name: 'FormLogin',
  data () {
    return {
      user: {
        email: '',
        password: '',
        role: 'customer'
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('tryLogin', this.user)
      this.$router.push({ name: 'Home' })
    },
    register () {
      this.$store.commit('assignPage', 'register')
    }
  }
}
</script>

<style>
.no-wrap {
  word-wrap: normal;
}
</style>
