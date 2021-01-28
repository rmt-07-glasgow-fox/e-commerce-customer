<template>
  <div class="card">
    <h3 class="card-header">Log In</h3>
    <div class="card-body">
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input v-model="payload.email" type="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="payload.password" type="password" class="form-control" id="password">
        </div>
        <p>Don't have account ? <a href="" @click.prevent="$router.push('/register')">Register</a> here</p>
        <button type="submit" class="btn btn-primary" @click.prevent="login">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormLogin',
  data () {
    return {
      payload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.payload)
    }
  }
}
</script>

<style scoped>
.card-body {
  text-align: left;
}

.card {
  width: 60%;
  margin-top: 150px;
}
</style>
