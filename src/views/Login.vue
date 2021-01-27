<template>
  <b-container class="centered">
    <h3 class="text-center">Login</h3>
    <form @submit.prevent="login">
      <div class="form-group">
        <label class="text-muted" for="emailLogin">Email address</label
        ><input
          type="email"
          class="form-control"
          id="emailLogin"
          v-model="email"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label class="text-muted" for="passwordLogin">Password</label>
        <div class="input-group" id="passwordInput">
          <input
            class="form-control"
            id="passwordLogin"
            :type="passwordType"
            v-model="password"
            placeholder="Enter password"
          />
          <div class="input-group-append">
            <span class="input-group-text"
              ><a href="#" @click.prevent="switchPassword">
                <b-icon :icon="passwordType === 'password' ? 'eye-slash' : 'eye'"></b-icon> </a
            ></span>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">
          Login
        </button>
      </div>
    </form>
    <hr />
    <div class="mt-2">
      Don't have an account?
      <router-link to="/register"> Register here</router-link>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      passwordType: 'password',
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch('login', payload);
        this.clearForm();
        this.$router.replace('/');
      } catch (err) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        });
      }
    },
    clearForm() {
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
