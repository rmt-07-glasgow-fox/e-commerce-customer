<template>
<div>
  <navbar/>
  <transition name="fade">
  <div class="container-fluid bg">
  <div class="row justify-content-center">
    <div class="col-12 pt-5 pb-3">
      <h1>Log In</h1>
    </div>
    <div class="col-4">
      <div class="card shadow pt-4">
        <div class="card-body m-auto pb-5" style="width: 70%">
          <form @submit.prevent="login">
            <div class="form-group">
              <label class="text" for="exampleInputEmail1">EMAIL</label>
              <input v-model="email" type="email" class="myform" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="form-group">
              <label class="text" for="exampleInputPassword1">PASSWORD</label>
              <input v-model="password" type="password" class="myform" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-dark w-100 mybtn">LOG IN</button>
          </form>
        </div>
        <div class="card-footer">
          <p class="text mt-2">Don't have an account? <a @click.prevent="goToRegPage" href="">Register here</a></p>
        </div>
      </div>
    </div>
    </div>
  </div>
  </transition>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    goToRegPage () {
      this.$router.push('/register')
    },
    async login () {
      try {
        const payload = {
          email: this.email,
          password: this.password
        }
        const response = await this.$store.dispatch('login', payload)
        if (response.status === 200) {
          localStorage.setItem('access_token', response.data.access_token)
          this.successLogin()
        }
      } catch (err) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.response.data.message
        })
      }
    },
    successLogin () {
      this.$swal.fire({
        icon: 'success',
        title: 'Success',
        showConfirmButton: false,
        timer: 1000
      }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>
@font-face {
  font-family: GraphikBold;
  src: url('../assets/GraphikBold.otf') format("opentype");
}
@font-face {
  font-family: Graphik;
  src: url('../assets/GraphikRegular.otf') format("opentype");
}
h1 {
  color: #272C35;
  font-family: GraphikBold;
  text-align: center;
  font-weight: 900;
  font-size: 40px;
}
.bg {
  height: 100vh;
  background-color: #F7F7F9;
}
.text {
  text-align: center;
  height: 12px;
  color: #636E85;
  font-family: Graphik;
  font-size: 14px;
  font-weight: 600 !important;
  letter-spacing: 0.5px;
}
.mybtn {
  font-weight: 900 !important;
  height: 56px;
  border-radius: 4px;
  border: 0;
  background-color: #040405;
  font-family: Graphik;
  letter-spacing: 2px;
}
.myform {
  margin-top: 8px;
  margin-bottom: 12px;
  height: 48px;
  width: 100%;
  border: 2px solid #B9BFCB;
  border-radius: 4px;
  background-color: #FFF;
  font-family: Graphik;
  font-size: 14px;
  line-height: 15px;
  text-indent: 16px;
  color: #272C35;
}

</style>
