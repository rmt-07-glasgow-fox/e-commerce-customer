<template>
  <div class="d-lg-flex half">
    <div class="bg order-1 order-md-2" :style="{'background-image': 'url(' + require('../assets/bg_1.jpg') + ')'}"></div>
    <div class="contents order-2 order-md-1">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            <h3>{{ authStatus }} to <strong>MyShopp</strong></h3>
            <p v-if="authStatus === 'Login'" class="mb-4">To keep connected with us please login with your personal info.</p>
            <p v-else class="mb-4">Enter your personal details and start shopping with us.<p>
            <form @submit.prevent="submit(authStatus)">
              <div v-if="authStatus === 'Register'" class="form-group first mb-4">
                <label class="mb-2" for="fullname">Fullname</label>
                <input type="text" class="form-control" placeholder="John Doe" id="fullname"
                v-model="user.name">
              </div>
              <div class="form-group first mb-4">
                <label class="mb-2" for="username">Username</label>
                <input type="text" class="form-control" placeholder="johndoe@mail.com" id="username"
                v-model="user.email">
              </div>
              <div class="form-group last mb-3">
                <label for="password" class="mb-2">Password</label>
                <input type="password" class="form-control" placeholder="Your Password" id="password"
                v-model="user.password">
              </div>

              <div v-if="authStatus === 'Login'">
                <div class="mb-4 align-items-center">
                  <span class="forgot-pass">Don't have an account? </span>
                  <span class="ml-1"><a href="#" class="forgot-pass"
                  @click.prevent="changeForm('Register')">Register here</a></span>
                </div>

                <input type="submit" value="Log In" class="btn btn-block btn-primary w-100">
              </div>

              <div v-else>
                <div class="mb-4 align-items-center">
                  <span class="forgot-pass">Already have an account? </span>
                  <span class="ml-1"><a href="#" class="forgot-pass"
                  @click.prevent="changeForm('Login')">Click here</a></span>
                </div>

                <input type="submit" value="Register" class="btn btn-block btn-success w-100">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormPage',
  data () {
    return {
      bgImg: './assets/bg_1.jpg',
      user: {}
    }
  },
  computed: {
    authStatus () {
      return this.$store.state.authStatus
    }
  },
  methods: {
    changeForm (payload) {
      this.$store.commit('changeAuthStatus', payload)
      this.user = {}
    },
    submit (status) {
      this.$store.dispatch(status.toLowerCase(), this.user)
    }
  }
}
</script>

<style scoped>
  p {
    color: #b3b3b3;
    font-weight: 300; }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: "Roboto", sans-serif; }

  a {
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease; }
    a:hover {
      text-decoration: none !important; }

  .content {
    padding: 7rem 0; }

  h2 {
    font-size: 20px; }

  .half, .half .container > .row {
    height: 100vh;
    min-height: 700px; }

  @media (max-width: 991.98px) {
    .half .bg {
      height: 200px; } }

  .half .contents {
    background: #f6f7fc; }

  .half .contents, .half .bg {
    width: 50%; }
    @media (max-width: 1199.98px) {
      .half .contents, .half .bg {
        width: 100%; } }
    .half .contents .form-control, .half .bg .form-control {
      border: none;
      -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 54px;
      background: #fff; }
      .half .contents .form-control:active, .half .contents .form-control:focus, .half .bg .form-control:active, .half .bg .form-control:focus {
        outline: none;
        -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1); }

  .half .bg {
    background-size: cover;
    background-position: center; }

  .half a {
    color: #888;
    text-decoration: underline; }

  .half .btn {
    height: 54px;
    padding-left: 30px;
    padding-right: 30px; }

  .half .forgot-pass {
    position: relative;
    top: 2px;
    font-size: 14px; }

  .control {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: 14px; }
    .control .caption {
      position: relative;
      top: .2rem;
      color: #888; }

  .control input {
    position: absolute;
    z-index: -1;
    opacity: 0; }

  .control__indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
    border-radius: 4px; }

  .control--radio .control__indicator {
    border-radius: 50%; }

  .control:hover input ~ .control__indicator,
  .control input:focus ~ .control__indicator {
    background: #ccc; }

  .control input:checked ~ .control__indicator {
    background: #fb771a; }

  .control:hover input:not([disabled]):checked ~ .control__indicator,
  .control input:checked:focus ~ .control__indicator {
    background: #fb8633; }

  .control input:disabled ~ .control__indicator {
    background: #e6e6e6;
    opacity: 0.9;
    pointer-events: none; }

  .control__indicator:after {
    font-family: 'icomoon';
    content: '\e5ca';
    position: absolute;
    display: none;
    font-size: 16px;
    -webkit-transition: .3s all ease;
    -o-transition: .3s all ease;
    transition: .3s all ease; }

  .control input:checked ~ .control__indicator:after {
    display: block;
    color: #fff; }

  .control--checkbox .control__indicator:after {
    top: 50%;
    left: 50%;
    margin-top: -1px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%); }

  .control--checkbox input:disabled ~ .control__indicator:after {
    border-color: #7b7b7b; }

  .control--checkbox input:disabled:checked ~ .control__indicator {
    background-color: #7e0cf5;
    opacity: .2; }
</style>
