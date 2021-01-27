<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="user.email" >
      <input type="password" v-model="user.password" >
      <button type="submit">LOGIN</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),
  methods: {
    login () {
      this.$store.dispatch('login', this.user)
    },
    clear () {
      this.user.email = ''
      this.user.password = ''
    }
  },
  created () {
    this.clear()
  }
}
</script>

<style>

</style>
