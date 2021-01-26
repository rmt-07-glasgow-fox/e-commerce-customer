<template>
    <div class="container-fluid d-flex justify-content-between w-75 mx-auto mt-5 h-100">
      <div class="w-100 p-3 text-center">
        <h3>Welcome to Buka Warung</h3>
        <!-- <img class="img" src="../assets/bg.svg" alt=""> -->
      </div>
      <div class="w-75 rounded">
        <div class="shadow rounded">
          <div id="login" class="p-5">
            <div class="mb-3 text-center">
              <h4>Register</h4>
                <p>Already have an account
                  <router-link to="/login">
                    <span class="text-primary">login</span>
                  </router-link>
                </p>
            </div>
            <form @submit.prevent="handleRegister" class="w-100 mb-3 text-start" id="form-login">
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" v-model="user.email">
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" v-model="user.username">
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="user.password">
              </div>
              <button type="submit" class="btn btn-primary w-100" id="submit-login">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Formregister',
  data () {
    return {
      user: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleRegister () {
      this.$store.dispatch('handleRegister', this.user)
    }
  }
}
</script>

<style>

</style>
