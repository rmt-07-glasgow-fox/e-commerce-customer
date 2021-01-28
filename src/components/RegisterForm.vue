<template>
  <div>
    <form @submit.prevent="register">
      <h2 class="sr-only">Register Form</h2>
      <div class="illustration"><font-awesome-icon icon="user-plus"></font-awesome-icon></div>
      <div class="form-group mb-3">
        <input required v-model="fullName" class="form-control" type="text" name="fullName" placeholder="Full Name">
      </div>
      <div class="form-group mb-3">
        <input required v-model="email" class="form-control" type="email" name="email" placeholder="Email">
      </div>
      <div class="form-group mb-3">
        <input required v-model="password" class="form-control" type="password" name="password" placeholder="Password">
      </div>
      <div class="form-group d-flex mb-3">
        <button type="submit" class="btn mx-1 btn-warning">Register</button>
        <div v-if="errorMessage" class="alert alert-danger mb-1 p-2" role="alert">
          {{ errorMessage }}
        </div>
      </div>
    </form>
    <p class="text-light">Already have an account? <a @click.prevent="gotoLogin" class="login" href="#">Login here</a></p>
  </div>

</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      fullName: '',
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    gotoLogin () {
      this.$emit('gotoLogin')
    },
    register () {
      this
        .$store
        .dispatch('register', {
          fullName: this.fullName,
          email: this.email,
          password: this.password
        })
        .then(({ data }) => {
          localStorage.userFullName = data.fullName
          localStorage.access_token = data.access_token
          localStorage.userId = data.id
          localStorage.userEmail = data.email
          this.$store.commit('setUser', data)
          this.clearInput()
          this.$router.go()
        })
        .catch(({ response }) => {
          this.errorMessage = response.data.message
        })
    },
    clearInput () {
      this.fullName = ''
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
.illustration {
  text-align: center;
  padding: 15px 0 20px;
  font-size: 50px;
  color: #2980ef;
}
</style>
