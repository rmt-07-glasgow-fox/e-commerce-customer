<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mx-3">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Qweged</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mt-2 mx-3">
              <router-link to="/" style="text-decoration: none;">Home</router-link>
            </li>
            <li class="nav-item dropdown" v-if="isLoggedIn === true">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Balance: {{ formatRp(balance) }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#" @click="topUp">Top Up</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <div class="d-inline-flex text-center me-3 navbar-toggler border border-primary" @click="showCart" v-if="isLoggedIn === true">
              <img :src="cartIcon" alt="cart-icon" height="30px" id="cart" class="mx-2">
              <label for="cart" class="mx-2 mt-1">Cart</label>
            </div>
             <button type="button" class="btn btn-primary" style="width: 120px;" v-if="isLoggedIn === false" @click="loginFormOpen">Login</button>
            <button type="button" class="btn btn-danger" style="width: 120px;" v-else-if="isLoggedIn === true" @click="logout">Logout</button>
          </form>
        </div>
      </div>
    </nav>
    <div class="jumbotron jumbotron-fluid banner text-white p-3">
      <div class="container">
        <h1 class="display-4">Qweged Store</h1>
        <p class="lead">The store where you can find the perfect choice for your outfit.</p>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import eCommerceAPI from './api/eCommerce'
import Swal from 'sweetalert2'
import formatRp from './helpers/formatRp'

export default {
  name: 'App',
  data () {
    return {
      cartIcon: require('./assets/shopping-cart.png')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    },
    balance () {
      return this.$store.state.balance
    }
  },
  methods: {
    loginFormOpen () {
      this.$router.push('/login')
    },
    logout () {
      localStorage.clear()
      this.$store.commit('setIsLoggedIn', false)
      this.$router.push('/')
      Swal.fire(
        'Logged out!',
        'You have been logged out',
        'success'
      )
    },
    showCart () {
      if (this.$route.name !== 'ShoppingCart') {
        this.$router.push('/shoppingCart')
      }
    },
    formatRp (value) {
      return formatRp(value)
    },
    topUp () {
      Swal.fire({
        title: 'Input Amount to Add',
        icon: 'question',
        input: 'range',
        inputLabel: 'Amount of Balance',
        inputAttributes: {
          min: 50000,
          max: 100000000,
          step: 10000
        },
        inputValue: 100000
      })
        .then(data => {
          if (data.isConfirmed) {
            return eCommerceAPI.patch('/user/balance', { balance: data.value }, {
              headers: { access_token: localStorage.access_token }
            })
          }
        })
        .then(({ data }) => {
          this.$store.commit('setBalance', data.balance)
        })

        .catch(err => {
          console.log(err, 'error add balance')
        })
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('setIsLoggedIn', true)
      this.$store.dispatch('checkBalance')
      this.$store.dispatch('fetchProducts')
      this.$store.dispatch('fetchCart')
    } else {
      this.$store.commit('setIsLoggedIn', false)
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  word-wrap: break-word;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.banner {
  background-image: url('./assets/banner1.jpg');
  background-size: cover;
}

</style>
