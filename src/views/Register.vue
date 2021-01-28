<template>
  <div class="register container d-flex justify-content-between">
    <div>
      <img src="../assets/shoes.png" >
    </div>
    <div>
      <b-card
      title="Register"
      tag="article"
      style="width: 350px;"
      class="mb-2"
     >
      <b-card-text >
        <form class="mt-2" @submit.prevent="register">
          <label class="mt-2">Email</label><br>
          <input type="text" v-model="email" ><br>
          <label class="mt-2">Password</label><br>
          <input type="password" v-model="password"><br>
          <b-button id="show-btn" type="submit" variant="primary" size="sm" class="mt-3" >Submit</b-button>
        </form>
      </b-card-text>

      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
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
