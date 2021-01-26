<template>
    <div class="container">
    <div class="sidenav">
         <div class="login-main-text">
            <h2>The Man Store<br>Register Page</h2>
            <p> register from here to access. </p>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form>
                   <div class="form-group">
                       <p style="color: red">{{errHandler}}</p>
                   </div>
                  <div class="form-group">
                     <label>Email</label>
                     <input
                     type="text"
                     class="form-control"
                     v-model="user.email"
                     placeholder="Email Adress">
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input
                     type="password"
                     class="form-control"
                     v-model="user.password"
                     placeholder="Password">
                  </div>
                  <button
                  type="submit"
                  class="btn btn-black"
                  @click.prevent="register"
                  href="#">Register</button>
               </form>
            </div>
         </div>
      </div>
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
      this.$store.dispatch('register', this.user)
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

/* .main-head{
    height: 150px;
    background: #FFF;

} */

.sidenav {
    height: 100%;
    background-color: #000;
    overflow-x: hidden;
    padding-top: 20px;
}

/* .main {
    padding: 0px 10px;
} */

/* @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}

@media screen and (min-width: 768px){
    .main{
        margin-left: 40%;
    }

    .sidenav{
        width: 40%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    .login-form{
        margin-top: 80%;
    }

    .register-form{
        margin-top: 20%;
    }
}

.login-main-text{
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}

.login-main-text h2{
    font-weight: 300;
} */

.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>
