<template>
  <b-container class="centered">
    <h3 class="text-center">Register</h3>
    <form @submit.prevent="register">
      <div class="form-group">
        <label class="text-muted">Firstname</label
        ><input
          type="text"
          class="form-control"
          v-model="firstname"
          placeholder="Enter firstname"
        />
      </div>
      <div class="form-group">
        <label class="text-muted">Lastname</label
        ><input type="text" class="form-control" v-model="lastname" placeholder="Enter lastname" />
      </div>
      <div class="form-group">
        <label class="text-muted">Email address</label
        ><input type="text" class="form-control" v-model="email" placeholder="Enter email" />
      </div>
      <div class="form-group">
        <label class="text-muted">Password</label>
        <div class="input-group">
          <input
            class="form-control"
            :type="passwordType"
            v-model="password"
            placeholder="Enter password"
          />
          <div class="input-group-append">
            <span class="input-group-text"
              ><a href="#" style="color: blue;" @click.prevent="switchPassword">
                <b-icon :icon="passwordType === 'password' ? 'eye-slash' : 'eye'"></b-icon> </a
            ></span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">
          Register
        </button>
      </div>
    </form>
    <hr />
    <div class="mt-2">
      Already have an account?
      <router-link to="/login" style="color: blue;"> Login here</router-link>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      passwordType: 'password',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      const payload = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch('register', payload);
        this.clearForm();
        this.$swal.fire('Success!', 'Your account successfully created!', 'success');
        this.$router.replace('/login');
      } catch (err) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        });
      }
    },
    clearForm() {
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.password = '';
    },
    switchPassword() {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    },
  },
};
</script>

<style scoped>
.centered {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 50%;
  min-width: 200px;
  max-width: 400px;
}
</style>
