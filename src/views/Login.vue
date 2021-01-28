<template>
  <div class="login container d-flex justify-content-between">
    <div>
      <img src="../assets/shoes.png" >
    </div>
    <div>
      <b-card
      title="Login"
      tag="article"
      style="width: 350px;"
      class="mb-2"
     >
      <b-card-text >
        <form class="mt-2" @submit.prevent="login">
          <label class="mt-2">Email</label><br>
          <input type="text" v-model="email" ><br>
          <label class="mt-2">Password</label><br>
          <input type="password" v-model="password"><br>
          <b-button id="show-btn" type="submit" variant="primary" size="sm" class="mt-3" >Submit</b-button>
        </form>
        <p class="mt-2">Don't have account? <router-link to="/register">Register</router-link></p>
      </b-card-text>

      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) next('/')
    next()
  }
}
</script>

<style>

</style>
