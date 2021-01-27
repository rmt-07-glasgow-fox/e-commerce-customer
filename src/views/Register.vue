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
                  <form @submit.prevent="register">
                    <div class="form-group mb-3">
                      <input v-model="userData.first_name" id="inputFirstName" type="text" placeholder="First name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                    </div>
                    <div class="form-group mb-3">
                      <input v-model="userData.last_name" id="inputLastName" type="text" placeholder="Last name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4">
                    </div>
                    <div class="form-group mb-3">
                      <input v-model="userData.email" id="inputEmail" type="email" placeholder="Email address" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" autocomplete="">
                    </div>
                    <div class="form-group mb-3">
                      <input v-model="userData.password" id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" autocomplete="">
                    </div>
                    <div class="form-group mb-3">
                      <input v-model="userData.confirm" id="confirmPassword" type="password" placeholder="Confirm Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" autocomplete="">
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                      <p class="text-muted mb-4">By clicking register, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use</p>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Register</button>
                  </form>
                    <button @click="goTo" class="btn btn-secondary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Cancel</button>
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
import swal from 'sweetalert'
export default {
  name: 'Register',
  methods: {
    register () {
      if (this.userData.password === this.userData.confirm) {
        const body = {
          first_name: this.userData.first_name,
          last_name: this.userData.last_name,
          email: this.userData.email,
          password: this.userData.password
        }
        this.$store.dispatch('register', body)
      } else {
        swal({
          title: 'Oops! wrong password',
          text: 'Please check your password',
          icon: 'error'
        })
      }
    },
    goTo () {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState([
      'userData'
    ])
  }
}
</script>

<style>

</style>
