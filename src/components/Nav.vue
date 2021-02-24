<template>

  <div id="nav" class="bg-white m-0 p-0 top-0 flex justify-between">
      <div class="mx-2 text-lg">
        <span>welcome, <span v-if="user" class="font-semibold"> {{ user }} </span> </span>
      </div>
      <div>
        <router-link to="/"><span class="italic font-semibold text-2xl ml-20" style="padding-left: 6rem;">tokosidia.</span></router-link>
      </div>
      <div>
        <div>
          <router-link to="/cart" class="mx-2 text-lg focus:outline-none">shopping bag.</router-link>
          <router-link to="/history" class="mx-2 text-lg focus:outline-none">histories.</router-link>
          <button v-if="!user" @click="toggleLogin" class="mx-2 text-lg focus:outline-none">login.</button>
          <button v-if="user" @click="logout" class="mx-2 text-lg focus:outline-none">logout.</button>
        </div>
        <div v-if="showLogin"
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center flex">
          <div class="relative w-auto my-6 mx-auto max-w-sm">
            <div class="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300">
                <span class="text-lg font-semibold">
                  login.
                </span>
              </div>
                <form @submit.prevent="login" class="mt-5 mx-10">
                  <div class="mb-4 flex justify-center">
                    <input
                      v-model="loginEmail"
                      type="email"
                      class="block appearance-none w-auto bg-white border-t border-gray-100 px-2 py-2 rounded shadow-lg"
                      placeholder="your email"
                    />
                  </div>
                  <div class="mb-4 flex justify-center">
                    <input
                      v-model="loginPassword"
                      type="password"
                      class="w-auto bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
                      placeholder="your password"
                    />
                  </div>
                <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded">
                  <button class="text-white bg-black font-bold uppercase text-xs px-6 py-3 outline-none focus:outline-none mr-1 mb-1" type="submit" style="transition: all .15s ease">
                    login
                  </button>
                  <button class="text-black background-transparent font-bold uppercase px-6 py-2 text-xs outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease"
                  @click="toggleLogin">
                    cancel
                  </button>
                </div>

              </form>
              <a href="#"
                @click.prevent="toggleRegister"
                class="text-xs pb-5"
                >don't have an account? register!</a>
            </div>
          </div>
        </div>
        <div v-if="showRegister" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 justify-center items-center flex">
          <div class="relative w-auto my-6 mx-auto max-w-sm">
            <div class="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300">
                <span class="text-lg font-semibold">
                  register.
                </span>
              </div>
                <form @submit.prevent="register" class="mt-5 mx-10">
                  <div class="mb-4 flex justify-center">
                    <input
                      v-model="registerEmail"
                      type="email"
                      class="block appearance-none w-auto bg-white border-t border-gray-100 px-2 py-2 rounded shadow-lg"
                      placeholder="your email"
                    />
                  </div>
                  <div class="mb-4 flex justify-center">
                    <input
                      v-model="registerPassword"
                      type="password"
                      class="w-auto bg-white border border-gray-100 px-2 py-2 rounded shadow-lg"
                      placeholder="your password"
                    />
                  </div>
                <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded">
                  <button class="text-white w-1/2 bg-black font-bold uppercase text-xs px-6 py-3 outline-none focus:outline-none mr-1 mb-1" type="submit" style="transition: all .15s ease"
                  >
                    register
                  </button>
                  <button class="text-black background-transparent font-bold uppercase px-6 py-2 text-xs outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease"
                  @click="toggleRegister">
                    cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      <div v-if="showLogin" class="opacity-60 fixed inset-0 z-40 bg-black"></div>
      <div v-if="showRegister" class="opacity-60 fixed inset-0 z-40 bg-black"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      // showLogin: false,
      // showRegister: false,
      loginEmail: '',
      loginPassword: '',
      registerEmail: '',
      registerPassword: ''
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    showLogin () {
      return this.$store.state.showLogin
    },
    showRegister () {
      return this.$store.state.showRegister
    }
  },
  methods: {
    toggleLogin () {
      this.$store.commit('toggleLogin', !this.showLogin)
    },
    toggleRegister () {
      this.toggleLogin()
      this.$store.commit('toggleRegister', !this.showRegister)
    },
    login () {
      this.$store.dispatch('login', {
        email: this.loginEmail,
        password: this.loginPassword
      }).catch(err => {
        err.response.data = Array.isArray(err.response.data) ? err.response.data[0] : err.response.data
        this.$swal({
          icon: 'warning',
          text: err.response.data.message
        })
      })
      this.loginEmail = ''
      this.loginPassword = ''
      this.toggleLogin()
    },
    register () {
      this.$store.dispatch('register', {
        email: this.registerEmail,
        password: this.registerPassword
      }).catch(err => {
        err.response.data = Array.isArray(err.response.data) ? err.response.data[0] : err.response.data
        this.$swal({
          icon: 'warning',
          text: err.response.data.message
        })
      })
      this.registerEmail = ''
      this.registerPassword = ''
      this.toggleRegister()
    },
    logout () {
      localStorage.clear()
      this.$store.commit('logout')
      this.$router.push('/')
    }
  },
  created () {
    if (localStorage.user) {
      this.$store.commit('setUser', localStorage.user)
    }
  }
}
</script>

<style>

</style>
