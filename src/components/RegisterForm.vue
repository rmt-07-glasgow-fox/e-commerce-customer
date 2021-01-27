<template>
  <vs-card
    type="3"
    justify="center"
    align="center"
  >
    <template #title>
      <h3>Register</h3>
    </template>
    <template #img>
      <img src="https://images.unsplash.com/photo-1591528287637-f3d5eaa83a3c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80" alt="">
    </template>
    <template #text>
      <div class="center content-inputs">
        <vs-input color="#7d33ff" shadow type="email" v-model="email" placeholder="Email">
          <template #icon>
            <i class='bx bx-user'></i>
          </template>
        </vs-input>

        <vs-input color="#7d33ff" shadow type="password" v-model="password" placeholder="Password">
          <template #icon>
            <i class='bx bx-lock-open-alt'></i>
          </template>
        </vs-input>
        <div class="center grid">
          <vs-row
            justify="space-around">
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-button @click.prevent="register">
                Submit
              </vs-button>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="6">
              <vs-button
                shadow
              >
                Login
              </vs-button>
            </vs-col>
          </vs-row>
        </div>
      </div>
    </template>
    <template #interactions>
    </template>
  </vs-card>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      email: '',
      password: '',
      active: 0
    }
  },
  methods: {
    async register () {
      try {
        const user = {
          email: this.email,
          password: this.password
        }
        await this.$store.dispatch('register', user)
        this.email = ''
        this.password = ''
        this.$router.replace('/')
      } catch (error) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error
        })
      }
    },
    changeForm (payload) {
      this.sign = payload
    }
  }
}
</script>

<style>
</style>
