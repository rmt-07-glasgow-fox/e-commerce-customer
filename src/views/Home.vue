<template>
  <div class="home">
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <a class="navbar-brand border border-dark p-2" href="#">Ecommerce Customer</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link text-white bg-primary rounded" to="/users/login">Login</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link text-dark bg-success ml-2" to="/users/register" href="#">Register</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
