<template>
  <v-sheet
    color="white"
    elevation="1"
    height="100%"
    width="350"
    align="center"
    justify="center"
    class="pa-6"
  >
    <div class="text-h4 mb-3">Login</div>
    <v-divider class="mb-3"></v-divider>
    <form @submit.prevent="login">
      <v-text-field
        v-model="user.email"
        type="email"
        label="Email"
        outlined
        dense
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        label="Password"
        hint="Input right password"
        @click:append="showPassword = !showPassword"
        outlined
        dense
        counter
      ></v-text-field>
      <v-btn
        type="submit"
        width="100%"
        :loading="loading"
        :disabled="loading"
        color="blue-grey"
        class="white--text"
      >
        Login
        <v-icon right dark>mdi-login</v-icon>
      </v-btn>
    </form>
    <div class="d-flex flex-row mb-3 mt-3">
      <v-divider class="mt-4 mr-4"></v-divider>
      <div class="text-caption mt-1">OR</div>
      <v-divider class="mt-4 ml-4"></v-divider>
    </div>
    <div>
      <div class="d-inline text-caption">
        Don't have account yet?
      </div>
      <router-link class="d-inline accent--text text-caption font-weight-black" :to="'/register'">
        Register
      </router-link>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: '',
      password: ''
    },
    showPassword: false
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
  computed: {
    loading () {
      return this.$store.state.isLoadLogin
    }
  },
  created () {
    this.clear()
  }
}
</script>

<style scoped>

</style>
