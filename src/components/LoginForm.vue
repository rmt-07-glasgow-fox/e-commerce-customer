<template>
  <div>
    <form @submit.prevent="login">
      <h2 class="sr-only">Login Form</h2>
      <div class="illustration"><font-awesome-icon icon="lock"></font-awesome-icon></div>
      <div class="form-group mb-3">
        <input required v-model="email" class="form-control" type="email" name="email" placeholder="Email">
      </div>
      <div class="form-group mb-3">
        <input required v-model="password" class="form-control" type="password" name="password" placeholder="Password">
      </div>
      <div class="form-group d-flex mb-3">
        <button type="submit" class="btn mx-1 btn-warning">Log In</button>
        <div v-if="errorMessage" class="alert alert-danger ms-3 mb-1 p-2" role="alert">
          {{ errorMessage }}
        </div>
      </div>
    </form>
    <p class="text-light">Not a member yet? <a @click.prevent="gotoRegister" class="register" href="#">Register Now</a></p>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login () {
      this
        .$store
        .dispatch('login', {
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
      this.email = ''
      this.password = ''
    },
    gotoRegister () {
      this.$emit('gotoRegister')
    }
  },
  watch: {
    errorMessage: function (val, oldVal) {
      if (val) {
        const vue = this
        console.log(val)
        setTimeout(function () {
          vue.errorMessage = ''
          vue.password = ''
        }, 3000)
      }
    }
  }
}
</script>

<style scoped>
.alert {
  font-size: 12px;
  line-height: 20px;
}

.btn, .alert {
  height: 40px;
}

.illustration {
  text-align: center;
  padding: 15px 0 20px;
  font-size: 50px;
  color: #2980ef;
}
</style>
