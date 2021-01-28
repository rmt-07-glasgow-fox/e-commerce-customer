<template>
  <div class="register mt-5">
    <div class="container">
      <div class="d-flex justify-content-center mt-5">
        <div class="card h-400 w-400">
          <div class="card-header">
            <h3>Register</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="register()">
              <div class="input-group form-group pl-5 pr-5">
                <input v-model="user.firstname" type="text" class="form-control" placeholder="first name">
              </div>
              <div class="input-group form-group pl-5 pr-5">
                <input v-model="user.lastname" type="text" class="form-control" placeholder="last name">
              </div>
              <div class="input-group form-group pl-5 pr-5">
                <input v-model="user.email" type="text" class="form-control" placeholder="email">
              </div>
              <div class="input-group form-group pl-5 pr-5">
                <input v-model="user.password" type="password" class="form-control" placeholder="password">
              </div>
              <div class="form-group">
                <input type="submit" value="Register" class="btn float-right register_btn">
              </div>
            </form>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center links">
              Have an account?<a href="#"><router-link to="/login">Login</router-link></a>
            </div>
          </div>
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
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: 'customer'
      }
    }
  },
  methods: {
    async register () {
      await this.$store.dispatch('register', this.user)
      this.user.firstname = ''
      this.user.lastname = ''
      this.user.email = ''
      this.user.password = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3{
    text-align: left;
  }
  .container{
  height: 100%;
  align-content: center;
  }

  .card{
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0,0,0,0.5) !important;
  }

  .card-header h3{
  color: white;
  }

  .input-group-prepend span{
  width: 50px;
  background-color: #FFC312;
  color: black;
  border:0 !important;
  }

  input:focus{
  outline: 0 0 0 0  !important;
  box-shadow: 0 0 0 0 !important;

  }

  .remember{
  color: white;
  }

  .remember input
  {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
  }

  .register_btn{
  color: black;
  background-color: #FFC312;
  width: 100px;
  }

  .register_btn:hover{
  color: black;
  background-color: white;
  }

  .links{
  color: white;
  }

  .links a{
  margin-left: 4px;
  }
</style>
