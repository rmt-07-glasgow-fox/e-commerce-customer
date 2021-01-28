<template>
  <div>
    <h1>Create Account</h1>
    <form @submit.prevent="regist">
      <div style="margin: 5px 5px">
        <input
          type="email"
          placeholder="Email"
          v-model="data.email"
          required
          form-control
        />
      </div>
      <div style="margin: 5px 5px">
        <input
          type="password"
          placeholder="Password"
          v-model="data.password"
          required
          form-control
        />
      </div>
      <button style="margin: 5px 5px" type="submit" class="btn btn-success">Create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    regist () {
      this.$store.dispatch('regist', this.data)
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
