<template>
<div>
    <Navbar/>
    <div>
    <div class="container" style="display: flex; flex-direction: column; height: 80vh; width: 35vw; justify-content: center; align-item:center;">
      <h3 class="card-title" style="font-weight:bold">THE MAN STORE</h3>
      <p>Login from here to access.</p>
    <form>
      <p style="color: red; font-weight: bold">{{errHandler}}</p>
    <div class="form-group" style="text-align:left">
    <label for="exampleInputEmail1" >Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" v-model="user.email" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group" style="text-align:left">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="user.password" id="exampleInputPassword1" placeholder="Password">
    </div><br>
        <div style="text-align:left">
        <button type="submit" @click.prevent="login" class="btn btn-primary">Login</button>
        <a href="#" class="link-primary p-2" @click.prevent="toRegister" style="text-decoration: none; float: right;">Don't have an account? Register</a>
        </div>
    </form>
    </div>
  </div>
    <Footer/>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Navbar, Footer },
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
    login () {
      this.$store.dispatch('getUser', this.user.email)
      this.$store.dispatch('login', this.user)
    },
    toRegister () {
      this.$store.state.errorData = ''
      this.$router.push('/register')
    }
  },
  computed: {
    errHandler () {
      return this.$store.state.errorData
    }
  }
}
</script>

<style>
.container {
    font-family: "Lato", sans-serif;
}

.sidenav {
    height: 100%;
    background-color: #000;
    overflow-x: hidden;
    padding-top: 20px;
}

.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>
