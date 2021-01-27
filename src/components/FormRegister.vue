<template>
  <form class="mt-2 formRegister">
    <div>
      <p class="h2 text-center text-success">MyRegister</p>
    </div>
    <div class="registerResult">
      <p class="text-center text-success"></p>
    </div>
    <div class="form-group">
      <input type="email" class="form-control" v-model="user.emailReg" placeholder="Email">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" v-model="user.passwordReg" placeholder="Password">
    </div>
    <button class="btn btn-success btn-block"
     v-on:click.prevent="register">Register</button><br>
    <button class="btn btn-link"
     v-on:click.prevent="login">
      Already have account?
    </button>
  </form>
</template>

<script>
export default {
  name: 'FormRegister',
  data () {
    return {
      user: {
        email: '',
        password: '',
        role: 'customer'
      }
    }
  },
  methods: {
    login () {
      this.$store.commit('assignPage', 'login')
    },
    register () {
      this.$store.dispatch('tryRegister', this.user)
    }
  }
}
</script>

<style>

</style>
