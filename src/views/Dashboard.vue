<template>
  <div class="container margin-top mb-5">
      <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.commit('changePage', 'Dashboard')
  }
}
</script>

<style>
  .margin-top{
    margin-top: 120px;
  }
</style>
