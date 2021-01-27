<template>
  <div>
    <!-- default: class == container-fluid -->
    <div class="">
      <div class="row no-gutter">
        <!-- The image half -->
        <div class="col-md-6 d-none d-md-flex bg-image"><img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80" alt=""></div>

        <!-- The content half -->
        <div class="col-md-6 bg-light">
          <div class="login d-flex align-items-center py-5">

            <!-- Demo content-->
            <div class="container">
              <div class="row">
                <div class="col-lg-10 col-xl-7 mx-auto">
                  <h3 class="display-4">gameShop</h3>
                  <!-- <p class="text-muted mb-4"></p> -->
                  <form href="#" @submit.prevent="login">
                    <div class="form-group mb-3">
                      <input v-model="loginData.email" id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                    </div>
                    <div class="form-group mb-3">
                      <input v-model="loginData.password" id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary">
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                      <input id="customCheck1" type="checkbox" checked class="custom-control-input">
                      <label for="customCheck1" class="custom-control-label">Remember password</label>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                  </form>
                    <button @click="goTo" class="btn btn-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm">Register</button>
                </div>
              </div>
            </div><!-- End -->

          </div>
        </div><!-- End -->

      </div>
    </div><!-- End -->

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Login',
  methods: {
    login () {
      const body = {
        email: this.loginData.email,
        password: this.loginData.password
      }
      this.$store.dispatch('login', body)
    },
    goTo () {
      this.$router.push('/register')
    }
  },
  computed: {
    ...mapState([
      'loginData'
    ])
  }
}
</script>

<style>

</style>
