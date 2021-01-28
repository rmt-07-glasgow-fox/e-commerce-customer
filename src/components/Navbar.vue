<template>
  <nav class="navbar navbar-light bg-light sticky-top shadow-lg">
      <button @click="toHome" class="btn btn-light navbar-brand">
        <img
          src="../assets/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top mx-2"
          alt=""
        />
        <b>SEPATU LOKAL</b>
      </button>
      <div>
        <button v-if="isUserLogin" @click="toCart" class="btn text-primary mx-2"><b-icon icon="cart4"/> Cart </button>
        <button v-if="!isUserLogin" @click="toLogin" class="btn text-primary mx-2"><b-icon icon="person-circle"/> Login </button>
        <button v-if="isUserLogin" @click="logout" class="btn text-danger mx-2"><b-icon icon="person-circle"/> Logout </button>
      </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    toHome () {
      this.$router.push('/')
    },
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/login')
    },
    toCart () {
      this.$router.push('/cart')
    }
  },
  computed: { ...mapState(['isUserLogin']) }
}
</script>

<style scoped>
button {
  border-radius: 20px;
}

nav {
  height: 80px;
}
</style>
