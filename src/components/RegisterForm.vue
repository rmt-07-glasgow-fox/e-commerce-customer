<template>
  <FormulateForm
     @submit="registerHandle"
     v-model="formData"
     class="register-form"
  >
      <h2 class="form-title">Register</h2>
      <FormulateInput
      label="Email"
      type="email"
      name="email"
      placeholder="Email"
      />
      <FormulateInput
      label="Password"
      type="password"
      name="password"
      placeholder="Password"
      />
      <FormulateInput
      type="submit"
      name="Register"
      />
  </FormulateForm>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    registerHandle () {
      const obj = {
        email: this.formData.email,
        password: this.formData.password
      }
      this.$store.dispatch('registerHandler', obj)
    }
  }
}
</script>

<style>
.register-form {
  padding: 2em;
  border: 3px solid #000000;
  background: #ffffff;
  border-radius: .5em;
  box-sizing: border-box;
}
.form-title {
  margin-top: 0;
}
.register-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - .5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: .5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: .5em;
  }
}
</style>
