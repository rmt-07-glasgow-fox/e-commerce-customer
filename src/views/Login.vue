<template>
  <div>
    <h1 style="margin: 10px 10px;">Login</h1>
      <form class="container" @submit.prevent="login">
          <div style="margin: 5px 5px">
              <input
              type="email"
              form-control
              placeholder="Enter your email.."
              v-model="data.email"
              required
              />
          </div>
          <div style="margin: 5px 5px">
              <input
              type="password"
              form-control
              placeholder="Your password.."
              v-model="data.password"
              required
              />
          </div>
          <button style="margin: 10px 10px" class="btn btn-success">Login</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log(this.data)
      this.$store.dispatch('login', this.data)
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next('/products')
    } else next()
  }
}
</script>

<style>

</style>
