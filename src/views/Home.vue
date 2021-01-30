<template>
  <div id="Home">
    <router-view :isLogin="isLogin" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  props: ['isLogin']
}
</script>

<style scoped>
#Home {
  background-color: #f7fafc;
}
</style>
