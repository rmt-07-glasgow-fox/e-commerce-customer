<template>
  <div>
    <form @submit.prevent="register">
      <input type="text" v-model="user.name">
      <input type="text" v-model="user.avatar">
      <input type="email" v-model="user.email">
      <input type="password" v-model="user.password" >
      <button type="submit">register</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: '',
      avatar: '',
      email: '',
      password: ''
    }
  }),
  methods: {
    register () {
      this.$store.dispatch('register', this.user)
    },
    clear () {
      this.user.name = ''
      this.user.avatar = ''
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
