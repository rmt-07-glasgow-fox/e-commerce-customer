<template>
  <div id="LoginForm">
    <div class="main-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col align-self-center">
            <div class="card card-login">
              <div class="card-body">
                <div style="text-align: center">
                  <router-link to="/">
                    <img
                      src="@/assets/img_logoC.svg"
                      width="80px"
                      style="margin-bottom: 32px"
                    />
                  </router-link>
                  <h4>Welcome back!</h4>
                  <p class="text-muted" style="font-size: 14px">
                    Please login to continue your transaction. For better
                    security, Funorama will make sure every transactions are
                    safe.
                  </p>
                </div>
                <form action="" @submit.prevent="login">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="email-login-icon"
                      ><mail-icon size="1x"></mail-icon
                    ></span>
                    <input
                      v-model="payload.email"
                      type="email"
                      class="form-control"
                      id="email-admin-login"
                      placeholder="Email"
                    />
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-text" id="password-login-icon"
                      ><lock-icon size="1x"></lock-icon
                    ></span>
                    <input
                      v-model="payload.password"
                      :type="passwordType"
                      class="form-control"
                      id="password-admin-login"
                      placeholder="Password"
                    />
                  </div>

                  <div class="form-check" style="margin-top: 9px">
                    <input
                      @click="showPassword"
                      type="checkbox"
                      class="form-check-input"
                      id="show-admin-password-login"
                    />
                    <label
                      class="form-check-label"
                      for="show-admin-password-login"
                      style="text-align: left"
                      >Show password</label
                    >
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary w-100"
                    style="margin-top: 16px"
                  >
                    Login
                  </button>
                </form>
                <!-- <button
                  v-google-signin-button="this.clientid"
                  class="btn btn-outline-primary w-100"
                  style="margin-top: 16px"
                >
                  <img
                    src="@/assets/img_gLogo.svg"
                    height="16"
                    style="margin-bottom: 4px; margin-right: 8px"
                  />
                  Login with Google
                </button> -->

                <p
                  style="margin-bottom: 0; margin-top: 24px"
                  class="footer-inside"
                >
                  Don't have account?
                  <router-link to="/register" style="text-decoration: none">
                    <a style="font-weight: 600"> Register </a>
                  </router-link>
                </p>
              </div>
            </div>
            <div
              class="card footer-card"
              style="background-color: transparent; border: 0; margin: 8px auto"
            >
              <p style="margin-bottom: 0">
                Don't have account?
                <router-link to="/register" style="text-decoration: none">
                  <a style="font-weight: 600"> Register </a>
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from '@/api/axios.js'
// import router from '@/router/index.js'
import { MailIcon, LockIcon } from 'vue-feather-icons'

export default {
  name: 'LoginForm',
  data () {
    return {
      // clientid: '823604279916-3c18fv7m0r4icev5ebcneasfl5mgee0c.apps.googleusercontent.com',
      payload: {
        email: '',
        password: ''
      },
      passwordType: 'password'
    }
  },
  components: {
    MailIcon,
    LockIcon
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.payload)
    },
    showPassword () {
      this.passwordType === 'password' ? this.passwordType = 'text' : this.passwordType = 'password'
    // },
    // OngoogleAuthSuccess (idToken) {
    //   axios({
    //     method: 'POST',
    //     url: '/glogin',
    //     headers: { id_token: idToken }
    //   })
    //     .then(result => {
    //       this.$store.auth.commit('isLogin', true)
    //       localStorage.setItem('access_token', result.access_token)
    //       router.replace('/')
    //     })
    //     .catch(err => console.log(err))
    // },
    // OnGoogleAuthFail (error) {
    //   console.log(error)
    }
  }
}
</script>

<style scoped>
.main-wrapper {
  height: 100vh;
}
div > .row {
  height: 100vh;
}

.card {
  border-radius: 0.4rem;
}
.card-login {
  width: 368px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 48px;
  padding-right: 40px;
  padding-bottom: 36px;
  padding-left: 40px;
}
.footer-card {
  width: 368px;
  margin-left: auto;
  margin-right: auto;
}
.footer-inside {
  display: none;
}
@media screen and (max-width: 600px) {
  div > .col {
    padding: 0;
  }
  .card {
    height: 100vh;
    width: 100vh;
    margin: 0;
  }
  .card-login {
    width: auto;
    border: none;
  }
  .footer-card {
    display: none;
  }
  .footer-inside {
    display: block;
  }
}

.card-body {
  padding: 0;
}
</style>
