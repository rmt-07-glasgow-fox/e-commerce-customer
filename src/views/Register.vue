<template>
<div>
  <main>
    <div class="h-screen flex bg-gray-100">
      <!-- left -->
      <div class="w-1/2 flex flex-col justify-center items-center" style="background-image: url('https://images.unsplash.com/photo-1540827109409-17f40944f276?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'); background-repeat: no-repeat; background-size: cover;">
        <div class="flex-1 flex flex-col justify-center items-center w-1/2">
          <h5 class="font-bold text-xl text-gray-100">WELCOME TO</h5>
          <a href="#" @click.prevent="redirectHome" class="font-semibold text-4xl py-10 text-gray-100 hover:text-yellow-400">STYLE BY MANDA</a>
          <p class="text-sm text-gray-100 text-center">S/S 2021 Collection</p>
        </div>
      </div>
      <!-- left -->
      <!-- right -->
      <div class="w-1/2 flex justify-center items-center bg-white">
        <div class="w-1/2">
          <h3 class="text-3xl font-light text-gray-600 mb-5">Register</h3>
          <form>
              <div class="border-b">
                <input type="email" v-model="user.email" id="login-email" placeholder="email" class="text-gray-700 bg-transparent py-3 focus:ring-2 focus:ring-gray-300 w-full">
              </div>
              <div class="border-b">
                <input type="password" v-model="user.password" id="login-password" placeholder="password" class="text-gray-700 bg-transparent py-3 focus:ring-2 focus:ring-gray-300 w-full">
              </div>
              <div>
                <button @click.prevent="register" type="submit" class="bg-yellow-400 w-full rounded-lg py-2 mt-7 shadow-lg text-white font-semibold hover:bg-yellow-500">REGISTER</button>
              </div>
              <div class="py-3">
                <p class="py-3 inline mr-2 italic">Already have an account?</p>
                <a @click.prevent="redirectLogin" type="submit" class="cursor-pointer text-yellow-500 font-semibold hover:text-yellow-400 italic">Login</a>
              </div>
          </form>
        </div>
      </div>
      <!-- right -->
    </div>
  </main>
</div>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    redirectHome () {
      this.$store.dispatch('redirectHome')
    },
    redirectLogin () {
      this.$store.dispatch('redirectLogin')
    },
    register () {
      this.$store.dispatch('register', this.user)
    }
  }
}
</script>

<style>
form input {
  padding: 0 5px;
  margin-left: 10px;
}
</style>
