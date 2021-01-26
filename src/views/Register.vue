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
        ><input type="text" class="form-control" v-model="email" placeholder="Enter lastname" />
      </div>
      <div class="form-group">
        <label class="text-muted" for="emailLogin">Email address</label
        ><input
          type="text"
          class="form-control"
          id="emailLogin"
          v-model="lastname"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label class="text-muted" for="passwordLogin">Password</label>
        <div class="input-group" id="passwordInput">
          <input
            class="form-control"
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
          Register
        </button>
      </div>
    </form>
    <hr />
    <div class="mt-2">
      Already have an account?
      <router-link to="/login"> Login here</router-link>
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
    register() {},
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
