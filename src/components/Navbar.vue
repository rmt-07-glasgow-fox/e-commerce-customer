<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/cart">Cart</router-link>
    <button v-if="isLogin" @click="logout" class="btn">LOGOUT</button>
    <button v-if="!isLogin" @click="goTo('Login')" class="btn">MASUK</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout')
      // localStorage.clear()
      // this.$router.push({ name: 'Home' })
    },
    goTo (name) {
      this.$router.push({ name })
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
