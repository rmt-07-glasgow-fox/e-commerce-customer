<template>
  <div class="mt-2 w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10" style="background-image: url('https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');">
    <div class="container max-w-4xl mx-auto text-center">
      <h1 class="text-xl leading-tight md:text-3xl text-center text-gray-100 mb-5 mt-5">The Largest E-Commerce in Indonesia</h1>
      <!-- <h1 class="text-xl leading-tight md:text-3xl text-center text-gray-100 mb-3">100% Original, free delivery, many SALES!</h1> -->
      <a href="#" @click.prevent="goToLogin" class="mt-6 inline-block bg-white text-black no-underline px-4 py-3 shadow-lg">Get Started</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron',
  methods: {
    goToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
