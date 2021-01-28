<template>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <form v-on:submit.prevent="login">
        <h3>LOGIN</h3>
        <label for="email">Email</label><br>
        <input v-model="email" name="email" type="email" placeholder="Enter Email"><br>
        <label for="password">Password</label><br>
        <input v-model="password" class="pass-input" name="password" type="password" placeholder="Password"><br>
        <div class="regis-flex">
          <label class="regis-label">not have an account yet?</label>
          <button @click="regisForm" class="btn regis-btn">Register</button>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
    <div class="col-md-4"></div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
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
    },
    regisForm () {
      this.$router.push('/register')
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
