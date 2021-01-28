<template>
  <div class="Navbar">
    <b-navbar id='navigasi' toggleable="lg" type="dark">
      <div class="col-lg-3 col-md-3" id="center-nav">
        <b-navbar-brand>
          <img src="https://cdn.discordapp.com/emojis/596707359053840401.gif?v=1" alt="Kitten" width="25px" height="25px">
        </b-navbar-brand>
        <b-navbar-brand to="/">Munthe Commerce</b-navbar-brand>
      </div>

      <div class="col-lg-6 col-md-6" id="center-nav">
          <b-navbar-nav >
            <b-nav-item v-if="loginStatus == 'true' " to="/cart">Cart</b-nav-item>
          </b-navbar-nav>
      </div>

      <div class="col-lg-3 col-md-3" id="center-nav">
        <b-navbar-nav class="ml-auto">
         <b-nav-item v-if="loginStatus == 'false' " @click.prevent="loginHandler">Log in</b-nav-item>
         <b-nav-item v-if="loginStatus == 'false' " @click.prevent="registerHandler">Register</b-nav-item>
         <b-nav-item v-if="loginStatus == 'true'" @click.prevent="logoutHandler" >Log Out</b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    homeHandler () {
      this.$router.push('/')
    },
    logoutHandler () {
      localStorage.clear()
      this.$router.push('/login')
    },
    loginHandler () {
      this.$router.push('/login')
    },
    registerHandler () {
      this.$router.push('/register')
    },
    checkLogin () {
      if (!localStorage.getItem('access_token')) {
        this.$store.commit('changeLoginStatus', 'false')
      } else {
        this.$store.commit('changeLoginStatus', 'true')
      }
    }
  },
  computed: {
    isLogin () {
      return this.$route.name !== 'Login'
    },
    loginStatus () {
      return this.$store.state.loginStatus
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
  #center-nav {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .Navbar {
    background: #7765e3 !important;
    font-family: 'Russo One', sans-serif;
  }
  .navbar {
    color: #edd3c4 !important;
  }
</style>
