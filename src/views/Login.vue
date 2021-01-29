<template>
    <div id="login">
        <div class="container">
            <div class="card col-lg-4 mx-auto mt-5">
                <div class="card-body">
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label class="float-left">Email address</label>
                            <input type="email" class="form-control" aria-describedby="emailHelp"
                            v-model="data.email">
                        </div>
                        <div class="form-group">
                            <label class="float-left">Password</label>
                            <input type="password" class="form-control"
                            v-model="data.password">
                        </div>
                        <button type="submit" class="btn btn-primary float-left">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.data)
        .then(response => {
          localStorage.access_token = response.data.access_token
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
