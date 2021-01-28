<template>
    <section>
    <a href="" @click.prevent="showHome">Back to Home</a>
    <div class="card col-4 mx-auto my-2 mt-4">
        <h2 class="login-text mt-4">Login</h2>
        <div class="card-body d-flex flex-row">
          <form class="col-12" @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="email" class="form-control" v-model="email" required />
            </div>
            <div class="form-group">
              <label for="caption">Password</label>
              <input id="caption" type="password" class="form-control" v-model="password" required />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-info">Submit</button>
            </div>
          </form>

        </div>
    </div>
    <div>
        <a href="" @click.prevent="showRegister" >Didn't Have an account yet?</a>
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
    showRegister () {
      this.$router.push({ path: '/register' })
    },
    showHome () {
      this.$router.push({ path: '/' })
    },
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

</style>
