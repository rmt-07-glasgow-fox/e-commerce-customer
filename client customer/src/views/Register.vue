<template>
  <div class="register-form">
      <form>
        <div class="form-title">
          <h3>Sign Up Your Account</h3>
        </div>
        <div class="form-icon">
          <span><i class="icon icon-user"></i></span>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control item"
            id="email"
            v-model="user.email"
            placeholder="Email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control item"
            id="password"
            v-model="user.password"
            placeholder="Password"
          />
        </div>
        <div class="form-group">
          <button
            type="button"
            class="btn btn-block btn-primary create-account"
            @click.prevent="register"
            id="sign-up"
          >
            SIGN UP
          </button>
          <button
            type="button"
            class="btn btn-block btn-primary create-account"
            @click.prevent="toLogin"
            id="sign-in"
          >
            SIGN IN
          </button>
        </div>
      </form>
    </div>
</template>

<script>

export default {
  name: 'Register',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      const payload = this.user
      this.$store.dispatch('register', payload)
    },
    toLogin () {
      this.$router.push('/login')
    }
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next({ name: 'Home' })
    } else {
      next()
    }
  }
}
</script>

<style scoped>
.register-form{
  padding-top: 90px;
  height: 100vh;
}

.register-form form{
    background-color: black;
    max-width: 600px;
    margin: auto;
    padding: 50px 70px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.form-title{
    color: white;
    text-align: center;
    margin-bottom: 20px;
}

.register-form .form-icon{
  text-align: center;
    background-color: goldenrod;
    border-radius: 50%;
    font-size: 40px;
    color: white;
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 50px;
    line-height: 100px;
}

.register-form .item{
  border-radius: 20px;
    margin-bottom: 25px;
    padding: 10px 20px;
}

.register-form .create-account{
    background-color: goldenrod;
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    border: none;
    color: black;
    margin-top: 20px;
}

#sign-in {
    background-color: khaki;
}

</style>
