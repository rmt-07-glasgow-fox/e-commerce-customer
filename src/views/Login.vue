<template>
  <div class="body">
    <div class="row">
      <Navbar />
    </div>
   <div>
    <div id="login-form" class="container">
      <div class="form-page">
        <div class="container" id="login-page">
          <div>
            <h4 class="text-center">Login</h4>
          </div>
          <hr />
          <form @submit.prevent="loginPost">
            <div class="form-group">
              <label>Email address :</label>
              <input
                v-model="user.email"
                type="text"
                name="email-login"
                id="email-login"
                class="form-control"
                placeholder="Input your email"
              />
              <label>Password :</label>
              <input
                v-model="user.password"
                type="password"
                name="password-login"
                id="password-login"
                class="form-control"
                placeholder="Input your password"
              />
            </div>
            <br />
            <button type="submit" class="btn btn-primary" id="login-btn">
              login
            </button>
          </form>
          <br>
            <button @click.prevent="goRegister" class="btn btn-danger" id="login-btn">
              Register
            </button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Login',
  components: {
    Navbar
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginPost () {
      this.$store.dispatch('LoginPost', this.user)
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          this.$store.commit('isLogin')
          this.$router.push('/Products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    goRegister () {
      this.$router.push('/Register')
    }
  }
}
</script>
<style scoped>
.body {
  background: url(https://www.itl.cat/pngfile/big/62-627633_more-wallpaper-collections-raindrops-desktop-background.jpg);
  background-repeat: no-repeat;
  max-width: 100vw;
  height: 100vh;
}
.form-page {
  width: 30%;
  margin-top: 20%;
  margin-left: 25%;
  padding: 4%;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
  background: white
}

.form-group {
  text-align: left;
}

#login-btn {
  width: 100%;
}
</style>
