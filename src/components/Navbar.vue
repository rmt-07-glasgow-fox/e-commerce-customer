<template>
  <div>
    <!-- Navigation bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <div>
          <router-link to="/" class="navbar-brand"><h3>Danuspedia</h3></router-link>
        </div>
        <div>
          ...
        </div>
        <div class="col-3 navbar-account">
          <div v-if="isLogin == true">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <router-link to="/cart" class="nav-link"> Cart </router-link>
              </li>
              <li class="nav-item active" >
                <router-link to="/history" class="nav-link"> History </router-link>
              </li>
            </ul>
          </div>
          <div v-if="isLogin == true">
            <button class="btn btn-danger mb-2" @click.prevent="logout">Logout</button>
          </div>
          <div v-if="isLogin == false">
            <router-link to="login" class="nav-link"> Login </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
.navbar-account{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
