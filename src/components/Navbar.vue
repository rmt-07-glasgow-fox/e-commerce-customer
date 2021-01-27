<template>
  <div id="navbar">
    <nav class="navbar fixed-top navbar-light bg-dark justify-content-between">
      <div class="container">
        <a id="nameBrand" class="navbar-brand">BelanjaYuk</a>
        <a @click.prevent="cart" id="cartBtn"><b>Cart</b></a>
      </div>
      <form class="form-inline">
        <a @click.prevent="history" id="historyBtn"><b>History</b></a>
        <a v-if="access_token !== null" @click.prevent="logout" id="logoutBtn"><b>Logout</b></a>
        <a v-else id="loginBtn" @click.prevent="login"><b>Login</b></a>
      </form>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      access_token: localStorage.getItem('access_token')
    }
  },
  methods: {
    login () {
      this.$router.push({ path: '/login' })
    },
    cart () {
      this.$router.push({ path: '/cart' })
    },
    logout () {
      localStorage.clear()
      this.$router.push({ path: '/login' })
    },
    history () {
      this.$router.push({ path: '/history' })
    }
  },
  created () {
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  #cartBtn {
    color: white;
    text-align: center;
    opacity: 0.7;
    cursor: pointer;
  }
  #cartBtn:hover {
    color: white;
    opacity: 1;
  }
  #historyBtn {
    color: white;
    text-align: center;
    margin-right: 30px;
    opacity: 0.7;
    cursor: pointer;
  }
  #historyBtn:hover {
    color: white;
    opacity: 1;
  }
  #nameBrand {
    font-family: 'Pacifico', cursive;
    color: white;
  }
  #logoutBtn {
    margin-right: 20px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    opacity: 0.7;
    transition: 0.3s;
    border: 0;
    outline: none;
  }
  #logoutBtn:hover {
    color: red;
    opacity: 0.9;
    transition: 0.3s;
    border: 0;
    outline: none;
  }
  #loginBtn {
    margin-right: 20px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    transition: 0.3s;
    opacity: 0.6;
  }
  #loginBtn:hover {
    color: white;
    opacity: 1;
    transition: 0.3s;
  }
</style>
