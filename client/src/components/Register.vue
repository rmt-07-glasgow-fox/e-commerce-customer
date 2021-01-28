<template>
  <section class="flex flex-col items-center h-screen md:flex-row ">
    <div class="hidden w-full h-screen bg-gray-200 bg-left-bottom bg-cover lg:block md:w-1/3 xl:w-1/3">
      <img src="https://ae01.alicdn.com/kf/Hdc428a7c5c494ee2aff9675b8fdc67a5Z.jpg_q50.jpg"
          alt="" class="object-cover w-full h-full ">
    </div>
    <div class="ml-20 px-15">
      <div class="flex flex-row">
        <div class="min-h-screen flex flex-col justify-center sm:py-2">
          <div class="p-20 xs:p-0 mx-auto md:w-full md:max-w-md">
            <h1 class="font-bold text-center text-2xl mb-5"><i class="fas fa-atom"> Atomizer</i></h1>
            <div class="bg-white shadow w-full bg-gray-100 rounded-lg divide-y divide-gray-200">
              <form @submit.prevent="registerUser">
                <div class="px-5 py-7">
                  <label class="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
                  <input
                    type="text"
                    class="border rounded-lg px-3 py-1 mt-1 mb-3 text-sm w-full"
                    v-model="username"/>
                  <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                  <input
                    type="email"
                    class="border rounded-lg px-3 py-1 mt-1 mb-3 text-sm w-full"
                    v-model="email"/>
                  <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                  <input
                    type="password"
                    class="border rounded-lg px-3 py-1 mt-1 mb-3 text-sm w-full"
                    v-model="password"/>
                  <button type="submit" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                      <span class="inline-block mr-2">Login</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                  </button>
                </div>
              </form>
              <div class="py-5">
                <div class="grid grid-cols-2 gap-1">
                  <div class="text-center sm:text-left whitespace-nowrap">
                  <button
                      @click="goToHome"
                      class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span class="inline-block ml-1">Get Back</span>
                    </button>
                  </div>
                  <div class="text-center sm:text-right  whitespace-nowrap">
                    <button
                      @click="goToLogin"
                      class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-300 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-bottom">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span class="inline-block ml-1">Login</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
              <h1 class="font-bold text-center text-2xl mt-5">Register</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    goToHome () {
      this.$router.push('/')
    },
    goToLogin () {
      this.$router.push('/login')
    },
    registerUser () {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('registerUser', payload)
    }
  }
}
</script>

<style>

</style>
