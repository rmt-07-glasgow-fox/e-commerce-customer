<template>
  <div class="nav-flex">
    <button @click="toHome" class="home-btn">LAPAKU</button>
    <ul>
      <li></li>
    </ul>
    <ul>
      <li class="cart" v-if="status == 'logout'">
        <button @click="toCart" class="cart-btn">
          <img src="../assets/cart-2.png" height="40px">
        </button>
        <div v-if="totalCartItems > 0" class="cart-num text-primary">{{ totalCartItems }}</div>
      </li>
      <li>
        <button v-if="status == 'logout'" @click="logout" class="btn btn-danger">LOGOUT</button>
      </li>
      <li>
        <button v-if="status == 'login'" @click="toLogin" class="btn btn-primary">LOGIN</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      cartNumber: 1
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$store.commit('changeStatus', 'login')
      this.$router.push('/login')
    },
    toHome () {
      this.$router.push('/')
    },
    toCart () {
      this.$router.push('/cart')
    }
  },
  computed: {
    status () {
      return this.$store.state.status
    },
    totalCartItems () {
      return this.$store.state.totalCartItems
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('changeStatus', 'logout')
    }
  }
}
</script>

<style>
  .nav-flex {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    padding: 5px 25px;
    margin-bottom: 25px;
    height: 55px;
  }

  .home-btn {
    font-size: 25px;
    margin: 0px;
    padding: 0px;
    background-color: white;
    border: none;
    height: 30px;
  }

  ul {
    list-style: none;
    display: inline-flex;
  }

  .cart {
    display: inline-flex;
    margin-right: 15px;
  }

  .cart-btn {
    border: none;
    padding: 0px;
    display: inline-block;
  }
</style>
