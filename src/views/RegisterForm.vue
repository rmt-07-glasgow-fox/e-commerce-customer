<template>
    <section class="mt-5 w-full px-8 py-16 bg-gray-100 xl:px-8 justify-content-center">
    <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-center md:flex-row">
            <div class="w-full mt-16 md:mt-0 md:w-2/5">
                <form @submit.prevent="register" class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                    <h3 class="mb-6 text-2xl font-medium text-center">Sign Up here!</h3>
                    <div class="block mb-4 border border-gray-200 rounded-lg">
                        <input type="text" name="email" v-model="email" class="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Email address">
                    </div>
                    <div class="block mb-4 border border-gray-200 rounded-lg">
                        <input type="password" name="password" v-model="password" class="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Password">
                    </div>
                    <div class="block">
                        <button class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">Register</button>
                    </div>
                    <p class="w-full mt-4 text-sm text-center text-gray-500">Already have account? <a href="#" @click.prevent="toLogin" class="text-blue-500 underline">Sign in here</a></p>
                </form>
            </div>
            <div class="w-full space-y-5 md:w-3/5 md:pl-16">
                <h2 class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                    The most visited marketplace in Indonesia
                </h2>
                <p class="text-align-center text-xl text-gray-600 md">100% Original, Free Delivery, Satisfaction Guaranteed!</p>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', { email: this.email, password: this.password })
    },
    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
