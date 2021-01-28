<template>
  <v-menu transition="scroll-y-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-avatar color="indigo" size="36">
        <v-btn
          color="accent"
          class="ma-2"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-btn>
      </v-avatar>
    </template>
    <v-list>
      <v-list-item link>
        <v-list-item-title @click="logout">Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout', { currentRouteName: this.$route.name })
    }
  }
}
</script>

<style>

</style>
