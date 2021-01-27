<template>
<div>
   <h1>Register</h1>
    <div class="container align-middle">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form class="box">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input v-model="email" type="email" placeholder="e.g. johndoe@mail.com" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input v-model="password" type="password" placeholder="*******" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <button type="submit" @click.prevent="doRegister" class="button is-success">
                Register
              </button>
            </div>
            <router-link class='navbar-item' to='/login'>login here</router-link>
          </form>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    doRegister () {
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
