<template>
  <div class="row mt-5">
    <div class="col-sm-4"/>
    <div class="col-sm-4">
      <form-login
      v-if="page === 'login'"/>
      <form-register
      v-else/>
    </div>
    <div class="col-sm-4"/>
  </div>
</template>

<script>
import FormLogin from '../components/FormLogin.vue'
import FormRegister from '../components/FormRegister.vue'
export default {
  components: { FormLogin, FormRegister },
  name: 'Auth',
  mounted () {
    this.$store.commit('assignPage', 'login')
  },
  computed: {
    page () {
      return this.$store.state.page
    }
  }
}
</script>

<style>

</style>
