<template>
  <router-view/>
</template>

<script>
export default {
  name: 'Auth',
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      return next({ name: 'ItemList' })
    } else {
      return next()
    }
  }
}
</script>

<style>

</style>
