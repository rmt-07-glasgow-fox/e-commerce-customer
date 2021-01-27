<template>
  <div class="container-fluid bg">
      <NavbarAuth/>
    <div class="row justify-content-end align-items-center">
      <div class="col-lg-6 d-flex justify-content-center">
        <FormLogin v-if="$route.path === '/login'"/>
        <FormRegister v-if="$route.path === '/register'"/>
      </div>
    </div>
  </div>
</template>

<script>
import FormLogin from '@/components/FormLogin.vue'
import FormRegister from '@/components/FormRegister.vue'
import NavbarAuth from '@/components/NavbarAuth.vue'

export default {
  name: 'Login',
  components: {
    FormLogin,
    FormRegister,
    NavbarAuth
  }

}
</script>

<style scoped>
.bg {
  background-image: url('../assets/klipartz.com.png');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
</style>
