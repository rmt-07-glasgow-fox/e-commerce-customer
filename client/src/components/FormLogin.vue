<template>
  <div>
    <h1 class="font-weight-bold py-3">Balanya</h1>
      <h4>Sign into your account</h4>
      <form @submit.prevent="login">
        <div class="form-row">
          <div class="col-lg-7">
            <input v-model="newUser.email" type="email" class="form-control my-3 p-2" placeholder="Email address">
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-7">
            <input v-model="newUser.password" type="password" class="form-control my-3 p-2" placeholder="*******">
          </div>
        </div>
        <div class="form-row">
          <div class="col-lg-7">
            <button type="submit" class="btn1 mb-3">Login</button>
          </div>
        </div>
        <p class="mb-1">Don't have an account? <a @click.prevent="setAccount(false)" href="#">Register here</a></p>
      </form>
  </div>
</template>

<script>
export default {
  name: 'FormLogin',
  data () {
    return {
      newUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.newUser)
    },
    setAccount (e) {
      this.$store.commit('setAccount', e)
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
.btn1:hover {
  background: white;
  border: 1px solid;
  color: black;
}
.btn1 {
  border: none;
  outline: none;
  height: 50px;
  width: 100%;
  background-color: black;
  color: white;
  border-radius: 4px;
  font-weight: bold;
}
</style>
