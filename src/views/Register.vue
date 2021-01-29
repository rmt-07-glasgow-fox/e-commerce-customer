<template>
  <div id="register">
        <div class="container">
            <div class="card col-lg-4 mx-auto mt-5">
                <div class="card-body">
                    <form @submit.prevent="register">
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
    register () {
      this.$store.dispatch('register', this.data)
        .then(response => {
          this.$router.push('/login')
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
