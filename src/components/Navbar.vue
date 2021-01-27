<template>
<div>
  <div v-if="!this.user_status">
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light container-fluid  justify-content-between">
      <div>
      <router-link class="container navbar-brand col-3" to="/"><i>gameShop</i></router-link>
      </div>
      <div class="">
        <div class="col-3" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="goToLogin"><i>Login</i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div v-else>
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid justify-content-evenly">
        <router-link class="navbar-brand col-3" to="/"><i>Home</i></router-link>
        <div class="col-3" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/wishlist"><i>Wishlist</i></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart"><i>Cart</i></router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="logout"><i>logout</i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      user_status: ''
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    goToLogin () {
      this.$router.push('/login')
    },
    goToRegister () {
      this.$router.push('/register')
    },
    getUserStatus () {
      this.user_status = localStorage.getItem('user_status')
    }
  },
  created () {
    this.getUserStatus()
  }
}
</script>

<style>
#navbar {
  height: 100px;
  background-color: rgb(39, 39, 39);
  justify-items: flex-end;
}
.navbar-brand {
  color: aliceblue;
  justify-content: flex-start;
}
i {
  font-style: normal;
  font-size: 25px;
  color: rgb(255, 255, 255);
}
.nav-link {
  color: white;
  margin-right: 30px;
}
#navbarNav {
}
</style>
