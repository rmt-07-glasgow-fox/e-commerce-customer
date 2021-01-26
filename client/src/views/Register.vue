<template>
  <div>
    <div class="container" style="display: flex; flex-direction: column; height: 100vh; width: 35vw; justify-content: center; align-item:center;">
      <h3 class="card-title">Register :</h3>
    <form>
      <p style="color: red;">{{err}}</p>
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" v-model="userRegist.email" aria-describedby="emailHelp" placeholder="Enter email">
    </div><br>
    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="userRegist.password" id="exampleInputPassword1" placeholder="Password">
    </div><br>
    <button type="submit" @click.prevent="register" class="btn btn-primary">Register</button>
    <a href="#" class="link-primary" @click.prevent="toLogin" style="text-decoration: none; float: right;">Login</a>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      userRegist: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', this.userRegist)
    },
    toLogin () {
      this.$router.push('/login')
      this.$store.commit('errHandling', '')
    }
  },
  computed: {
    err () {
      return this.$store.state.err
    }
  }
}
</script>

<style>

</style>
