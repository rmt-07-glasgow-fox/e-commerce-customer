<template>
  <div>
    <form-page></form-page>
  </div>
</template>

<script>
import FormPage from '../components/FormPage'
export default {
  name: 'AuthPage',
  components: {
    FormPage
  },
  data () {
    return {
      bgImg: './assets/bg_1.jpg'
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
