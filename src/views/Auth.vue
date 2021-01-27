<template>
  <div class="auth-container">
    <div class="container-fluid" id="login-container" style="height: 80vh">
      <div class="row justify-content-center h-100 align-items-center">
        <div class="col-3">
          <h3 class="align-self-start text-center mb-5 ">MITY COMMERCE</h3>
          <!-- <auth-form /> -->
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>
</style>
