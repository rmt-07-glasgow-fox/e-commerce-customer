<template>
  <div class="container justify-content-center p-4 shadow rounded mt-5" style="background-color: lightslategray;">
    <div class="row">
      <div class="col">
        <div class="container bg-light p-4 shadow rounded" style="text-align: center; max-height: 40rem; max-width: 30rem;">
          <img src="../assets/shopping.svg" class="rounded mx-auto d-block" style="height: 18.3rem;" alt="image">
        </div>
      </div>
      <div class="col">
        <div class="container p-3 bg-light shadow rounded pb-0" style="max-height: 40rem; max-width: 30rem;">
          <form @submit.prevent="registerUser">
            <div class="form-floating my-3">
              <input  v-model="payload.name" type="text" class="form-control" id="name">
              <label for="name">Name</label>
            </div>
            <div class="form-floating my-3">
              <input  v-model="payload.email" type="email" class="form-control" id="email">
              <label for="email">Email</label>
            </div>
            <div class="form-floating my-3">
              <input  v-model="payload.password" type="password" class="form-control" id="password">
              <label for="email">Password</label>
            </div>
            <div class="row mb-0">
              <button type="submit" class="btn btn-primary col m-1">Submit</button>
              <p>Already have an account? <router-link to="/customer">Login</router-link></p>
            </div>
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
      payload: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    registerUser () {
      this.$store.dispatch('registerCustomer', this.payload)
      this.payload.password = ''
    }
  }
}
</script>

<style>

</style>
