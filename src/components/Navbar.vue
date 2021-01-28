<template>
  <div id="nav" class="fixed-top">
    <nav v-if="$route.path === '/login' && $route.path === '/register'"><h1>E-Disc-Store</h1></nav>
    <nav class="navbar navbar-expand-lg" v-if="$route.path !== '/login' && $route.path !== '/register'">
      <div class="container-fluid">
        <a @click.prevent="$router.push('/')" class="navbar-brand" href="#">E-M-Store</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">

            <div class="dropdown" >
              <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Menu
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#" @click.prevent="$router.push('/carts')"><i class="bi bi-cart4"></i>   Cart</a></li>
                <li><a class="dropdown-item" href="#" @click.prevent="$router.push('/histories')"><i class="bi bi-cart-check"></i>  History</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" @click.prevent="logout">Log Out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
#nav {
  background-color: rgba(255, 255, 255, 0.973);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}
.navbar {
  margin-right: 50px;
  margin-left: 50px;
}
.btn {
  width: 130px;
}
.bi {
  margin-bottom: -200px;
}
.dropdown {
  margin-right: -22px;
}
</style>
