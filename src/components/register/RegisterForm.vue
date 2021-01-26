<template>
  <div id="RegisterForm">
    <div class="main-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col align-self-center">
            <div class="card card-login">
              <div class="card-body">
                <div style="text-align: center">
                  <img
                    src="@/assets/img_logoC.svg"
                    width="80px"
                    style="margin-bottom: 32px"
                  />

                  <h4>Welcome to Funorama!</h4>
                  <p class="text-muted" style="font-size: 14px">
                    Want to buy some games for kill your free time? Register and
                    buy from here!
                  </p>
                </div>
                <form action="">
                  <div class="input-group mb-3">
                    <span class="input-group-text"
                      ><user-icon size="1x"></user-icon
                    ></span>
                    <input
                      type="text"
                      aria-label="First name"
                      class="form-control"
                      placeholder="First name"
                    />
                    <input
                      type="text"
                      aria-label="Last name"
                      class="form-control"
                      placeholder="Last name"
                    />
                  </div>

                  <div class="input-group mb-3">
                    <span class="input-group-text" id="email-login-icon"
                      ><mail-icon size="1x"></mail-icon
                    ></span>
                    <input
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
                      type="password"
                      class="form-control"
                      id="password-admin-login"
                      placeholder="Password"
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary w-100"
                    style="margin-top: 16px"
                  >
                    Register
                  </button>
                </form>

                <p
                  style="margin-bottom: 0; margin-top: 24px"
                  class="footer-inside"
                >
                  Already have an account?
                  <router-link to="/login" style="text-decoration: none">
                    <a style="font-weight: 600"> Login </a>
                  </router-link>
                </p>
              </div>
            </div>
            <div
              class="card footer-card"
              style="background-color: transparent; border: 0; margin: 8px auto"
            >
              <p style="margin-bottom: 0">
                Already have an account?
                <router-link to="/login" style="text-decoration: none">
                  <a style="font-weight: 600"> Login </a>
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
import { UserIcon, MailIcon, LockIcon } from 'vue-feather-icons'

export default {
  name: 'RegisterForm',
  components: {
    UserIcon,
    MailIcon,
    LockIcon
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
