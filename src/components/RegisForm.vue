<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <form v-on:submit.prevent="register">
        <h3>REGISTER</h3>
        <label for="email">Email</label><br>
        <input v-model="email" name="email" type="email" placeholder="Enter Email"><br>
        <label for="password">Password</label><br>
        <input v-model="password" class="pass-input" name="password" type="password" placeholder="Password"><br>
        <div class="regis-flex">
          <label class="regis-label">already have an account?</label>
          <button @click="loginForm" class="btn regis-btn">Login</button>
        </div>
        <button @click="register" type="submit" class="btn btn-primary">Register</button>
      </form>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
export default {
  name: 'RegisForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', { email: this.email, password: this.password })
    },
    loginForm () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  h3 {
    margin: 0px;
  }

  label{
    margin-bottom: 0px;
    font-size: 20px;
    text-align: left;
    width: 90%;
  }

  .regis-label {
    font-size: 13px;
  }

  input {
    margin-bottom: 10px;
    width: 90%;
  }

  .pass-input {
    margin: 0px;
  }

  button {
    margin-bottom: 10px;
  }

  .regis-btn {
    color: blue;
    font-size: 13px;
    padding: 0px;
    margin: 0px;
  }

  .regis-flex {
    display: flex;
    width: 90%;
    margin: 0px auto;
    margin-bottom: 10px;
  }

  form {
    border: 1px solid grey;
    border-radius: 15px;
    padding: 10px;
  }
</style>
