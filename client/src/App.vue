<template>
  <div id="app" class="d-flex flex-column flex-sm-row justify-content-around py-sm-5">
    <div id="nav" class="navbar flex-column mx-sm-2 mx-md-5">
      <div>
        <router-link to="/" class="nav-link" :style="$route.name == 'ItemList' ? 'color: black' : 'color: gray'"><b>Kotoko</b></router-link>
        <router-link to="/cart" class="nav-link" :style="$route.name == 'Cart' ? 'color: black' : 'color: gray'">Cart</router-link>
        <router-link to="/auth/register" class="nav-link" :style="$route.name == 'Register' ? 'color: black' : 'color: gray'">Sign Up</router-link>
        <router-link to="/auth" class="nav-link" :style="$route.name == 'Login' ? 'color: black' : 'color: gray'">Sign In</router-link>
        <a class="nav-link" style="color: red;">Log Out</a>
      </div>
    </div>
    <router-view class="container"/>
  </div>
</template>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
