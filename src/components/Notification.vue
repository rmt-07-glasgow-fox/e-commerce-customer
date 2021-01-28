<template>
  <div class="alert mx-auto mb-1 p-2" role="alert">
    {{ notif }}
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: ['notif'],
  created () {
    setTimeout(() => {
      this.$store.commit('setNotif', null)
      this.$store.commit('setMessage', null)
    }, 2000)
  }
}
</script>

<style scoped>
.alert {
  position: sticky;
  top: 75px;
  width: 50vw;
  z-index: 999;
}
</style>
