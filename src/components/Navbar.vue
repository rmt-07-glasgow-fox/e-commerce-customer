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
        <b>Local Shoes</b>
      </button>
      <div>
        <button class="btn btn-outline-primary mx-2"><b-icon icon="cart4"/> Cart </button>
        <button @click="toLogin" class="btn btn-outline-primary mx-2"><b-icon icon="person-circle"/> Login </button>
      </div>
    </nav>
</template>

<script>
export default {
  methods : {
    toLogin () {
      this.$router.push('/login')
    },
    toHome () {
      this.$router.push('/')
    }
  }
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
