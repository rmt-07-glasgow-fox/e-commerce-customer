<template>
  <div>
    <div class="container" style="display: flex; flex-direction: column; height: 100vh; width: 35vw; justify-content: center; align-item:center;">
      <h3 class="card-title">Welcome to E-commerce</h3>
    <form>
      <p style="color: red;">{{err}}</p>
    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" v-model="user.email" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="user.password" id="exampleInputPassword1" placeholder="Password">
    </div><br>
    <button type="submit" @click.prevent="login" class="btn btn-primary">Login</button>
    <a href="#" class="link-primary" @click.prevent="toRegister" style="text-decoration: none; float: right;">Register</a>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
      this.$store.dispatch('login', this.user)
    },
    toRegister () {
      this.$router.push('/register')
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
