<template>
 <nav
    class="absolute top-0 left-0 w-full z-10 bg-gray-400 md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4 mb-10"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4"
    >
      <!-- Brand -->
      <a href="#" @click.prevent="redirectHome">
        <img src='../assets/triangles.png' style="width: 25px" class="mr-3" alt="">
      </a>
      <a class="text-white text-sm uppercase hidden lg:inline-block font-semibold hover:text-gray-300 mr-8"
        href="#"
        @click.prevent="redirectProducts">Style By Manda</a>
      <!-- Form -->
      <div
        class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
        <a class="text-white text-sm uppercase hidden lg:inline-block mr-2 font-semibold hover:text-gray-300"
        href="#"
        @click.prevent="redirectMyCart">My Cart</a>
        <a class="text-gray-200 hover:text-gray-300 text-sm uppercase hidden lg:inline-block font-semibold px-10" href="#" @click.prevent="logout">Logout</a>
      </div>
      <!-- User -->
      <ul
        class="flex-col md:flex-row list-none items-center hidden md:flex"
      >
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Navbar',
  components: {},
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'redirectMyCart',
      'redirectProducts',
      'redirectHome',
      'logout'
    ])
  },
  created () {
    this.$store.dispatch('fetchAllCarts')
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  }
}
</script>
