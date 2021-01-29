<template>
    <div id="navbar">
        <div class="container-fluid m-0 p-0">
            <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/cart" v-if="localStorage">Cart</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" v-if="localStorage">Transaction History</a>
                        </li>
                        <li class="nav-item">
                            <router-link class="btn btn-outline-dark my-2 my-sm-0" :to="`/login`" v-if="!localStorage">
                                Login</router-link>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-outline-dark my-2 my-sm-0" type="submit" v-if="localStorage"
                                @click="logout()">Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  computed: {
    localStorage () {
      return localStorage.access_token
    }
  }
}
</script>

<style>

</style>
