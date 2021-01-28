<template>
    <div style="width:100%; height:inherit;" class="d-flex justify-content-end align-items-center margin-top">
      <div style="width:35%" class="shadow-lg p-5 mr-5">
        <form @submit.prevent="register">
          <h1 class="h3 mb-3 fw-normal text-center">Register</h1>
          <div class="mb-3">
            <div class="text-left">
            <label for="email" class="form-label">
              Email Address:
            </label>
            </div>
            <input type="email" class="form-control mb-2" v-model="data.email" id="email" autofocus>
            <div class="form-text text-left text-secondary fs-2">contoh: customer@email.com</div>
          </div>
          <div class="mb-3">
            <div class="text-left">
            <label for="password" class="form-label">
              Password:
            </label>
            </div>
            <input type="password" id="password" class="form-control mb-2" v-model="data.password">
          </div>
          <button class="w-100 btn btn-lg btn-success mb-2" type="submit">Register</button><br>
          <div class="text-left">
            <router-link :to="'/login'" class="text-left">already have an account ?</router-link>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', this.data)
        .then(({ data }) => {
          this.$router.push('/login')
          this.$store.dispatch('sweetSuccess', 'User created')
        })
        .catch(err => {
          const message = err.response.data.message
          this.$store.dispatch('sweetError', message)
        })
    }
  },
  created () {
    this.$store.commit('changePage', 'nodash')
  }
}
</script>

<style>

</style>
