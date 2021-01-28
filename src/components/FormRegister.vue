<template>
  <div class="card">
    <h3 class="card-header">Register</h3>
    <div class="card-body">
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input v-model="payload.name" type="text" class="form-control" id="name">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input v-model="payload.email" type="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="payload.password" type="password" class="form-control" id="password">
        </div>
          <p>Have an have account ? <a href="" @click.prevent="$router.push('/login')">Login</a> here</p>

        <button type="submit" class="btn btn-primary" @click.prevent="register">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormRegister',
  data () {
    return {
      payload: {
        name: '',
        email: '',
        password: '',
        role: 'Client'
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', this.payload)
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
  margin-top: 110px;
}
</style>
