<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About Us</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/carts">Carts</router-link> |
      <router-link to="/transactions">History</router-link> |
      <router-link to="/checkout">Check Out</router-link> |
      <router-link to="/wishlists">Wishlist</router-link> |
      <router-link to="/register">Register</router-link> |
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(197, 197, 197);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
