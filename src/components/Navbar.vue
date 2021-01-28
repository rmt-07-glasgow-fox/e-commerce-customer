<template>
  <div class="navbar fixed0-top navbar-light bg-light">
    <div class="left-navbar">
      <router-link class="navbar-brand" to='/'> SHOP-DAY </router-link>
    </div>
    <div class="right-navbar ml-4">
    <router-link id="card-link" to="/carts" v-if="isLogin || access_token" class="mt-3">
      <i class="fas fa-shopping-cart fa-lg mr-4 mt-2"></i>
    </router-link>
    <router-link to="/checkout" v-if="isLogin || access_token" class="mt-3">
      <i class="fas fa-history fa-lg"></i>
    </router-link>
      <button v-if="!isLogin && !access_token"  @click="loginBtnClick" class="btn btn-outline-success ml-4"> Login </button>
      <button v-if="isLogin || access_token" id="btn-logout" @click="logoutBtn" class="btn btn-outline-danger ml-4"> Logout </button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Navbar',
  props: ['token'],
  data () {
    return {
      loginBtn: '',
      access_token: localStorage.access_token
    }
  },
  methods: {
    logoutBtn () {
      localStorage.clear()
      this.$store.commit('setIsLogoutUser')
      this.$router.push('/login')
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logout Success',
        showConfirmButton: false,
        timer: 1500
      })
    },
    loginBtnClick () {
      this.$router.push('/login')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    },
    styleLogin () {
      return this.$store.state.loginBtn
    },
    styleLogout () {
      return this.$store.state.logoutBtn
    }
  },
  created () {
    this.$store.commit('setBtnLogin', localStorage.access_token)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .right-navbar{
    color: black;
    margin-right: 10px;
  }
  .bi {
    /* margin-right: 25px; */
    color: black;
  }
  .navbar {
    height: 80px;
    padding-top: 3px;
    padding-bottom: px;
    color: black;

  }
  .navbar-brand{
    margin-left: 15px;
    font-family: 'Kaushan Script', cursive;

  }
  /* .navbar-brand:hover{
    color: rgb(214, 214, 243);
  } */
  /* #btn-logout{
    color: black;
  } */
</style>
