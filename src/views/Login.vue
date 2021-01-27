<template>
  <main class="d-flex align-items-center mt-5">
    <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-3">
            <img src="https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            style="height:400px;object-fit:cover" alt="login" class="login-card-img">
          </div>
          <div class="col-6 bg-light">
            <div class="card-body p-5">
              <div class="brand-wrapper">
                <h1>Modemarkt</h1>
              </div>
              <p class="login-card-description">Welcome back!</p>
              <form @submit.prevent="login">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">@</span>
                  <input type="email" v-model="formLogin.email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                  </span>
                  <input type="password" v-model="formLogin.password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1">
                </div>
                <input type="submit" value="Login" class="btn btn-primary mb-4">
              </form>
              <p class="login-card-footer-text">Don't have an account? <router-link to="/register" class="text-reset">Register here</router-link></p>
            </div>
          </div>
        </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('postLogin', this.formLogin)
    }
  }

}
</script>

<style scoped>

</style>
