<template>
    <section>
        <a href="" @click.prevent="showHome">Back to Home</a>
        <div class="card col-4 mx-auto my-2 mt-4">
            <h2 class="login-text mt-4">Register</h2>
            <div class="card-body d-flex flex-row">
            <form class="col-12" @submit.prevent="register">
                <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" class="form-control" v-model="email" required />
                </div>
                <div class="form-group">
                <label for="caption">Password</label>
                <input id="caption" type="password" class="form-control" v-model="password" required />
                </div>
                <div class="text-center">
                <button type="submit" class="btn btn-info">Create Account!</button>
                </div>
            </form>

            </div>
        </div>
        <div>
            <a href="" @click.prevent="showLogin">I already have an account</a>
        </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    showLogin () {
      this.$router.push({ path: '/login' })
    },
    showHome () {
      this.$router.push({ path: '/' })
    },
    register () {
      console.log('register bos')
      console.log({ email: this.email, password: this.password })
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style>

</style>
