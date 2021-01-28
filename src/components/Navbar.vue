<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow p-2 fixed-top">
    <div class="container">
    <router-link class="navbar-brand text-primary" :to="'/'">Tokopediong</router-link>
    <div class="d-flex align-items-baseline">
      <div v-if="page =='Dashboard'" class="mr-4 border-right">
        <a class="bi-cart-check-fill text-secondary btn" style="font-size:25px;" @click="go('/carts')">
          <span v-if="carts.length > 0">{{carts.length}}</span>
        </a>
        <a class="bi-clock-history mr-3 text-secondary btn" style="font-size:20px;"></a>
      </div>
      <div v-if="page == 'Dashboard' && !login">
        <router-link :to="'/login'" class="btn border-primary mr-3 text-primary" >Login </router-link>
        <router-link :to="'/register'" class="btn btn-primary" >Register </router-link>
      </div>
      <div  v-else-if="page == 'Dashboard' && login">
        <button class="btn btn-danger mb-2" @click="logout">Logout</button>
      </div>
    </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    go (url) {
      this.$router.push(url)
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$store.commit('statusLogin')
    }
  },
  computed: {
    ...mapState([
      'page',
      'login',
      'carts'
    ])
  }
}
</script>

<style>
  router-link:hover, a:hover{
    cursor: pointer;
  }
  .navbar-brand{
    font-size: 30px !important;
    font-weight: bolder !important;;
  }
</style>
