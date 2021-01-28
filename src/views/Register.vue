<template>
  <div>
    <Navbar></Navbar>
    <div class="container mt-5">
      <div class="row">
          <div class="col-md-5 mx-auto">
              <div class="myform form">
                  <div class="logo mb-3">
                      <h1>Register</h1>
                  </div>
                  <form @submit.prevent="saveDataUser">
                    <div class="form-group">
                        <label>Email Address</label>
                        <input type="email" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="password">
                    </div>
                    <div class="col-md-12 text-center ">
                        <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Register</button>
                    </div>
                      <div class="col-md-12 ">
                        <div class="login-or">
                          <hr class="hr-or">
                        </div>
                      </div>
                      <div class="form-group">
                        <p class="text-center">have account? <router-link to="/login" id="signup">Login here</router-link></p>
                      </div>
                  </form>
                </div>
          </div>
    </div>
  </div>
</div>

</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'Register',
  components: {
    Navbar
  },
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    saveDataUser () {
      this.$store.dispatch('registerUser', { email: this.email, password: this.password })
    }
  }
}
</script>

<style>
.myform{
  position: relative;
  display: -ms-flexbox;
  display: flex !important;
  padding: 1rem;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 1.1rem;
  outline: 0;
  max-width: 500px;
}
.tx-tfm{
  text-transform:uppercase;
}
.mybtn{
  border-radius:50px;
}

.login-or {
  position: relative;
  color: #aaa;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.span-or {
  display: block;
  position: absolute;
  left: 50%;
  top: -2px;
  margin-left: -25px;
  background-color: #fff;
  width: 50px;
  text-align: center;
}
.hr-or {
  height: 1px;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

</style>
