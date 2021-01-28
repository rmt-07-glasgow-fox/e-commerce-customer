<template>
  <div class="container flex flex-col mb-10 flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
    <a href="#_" class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"><i class="fas fa-atom"> Atomizer</i></a>
    <nav class="top-0 left-0 right-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
      <router-link
        :to="'/carts'"
        class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900" x-data="{ hover: false }" @mouseenter="hover = true" @mouseleave="hover = false">
        <span class="block"><i class="fas fa-cart-arrow-down"></i>   MyCart</span>
        <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden">
          <span x-show="hover" class="absolute inset-0 inline-block w-full h-1 h-full transform bg-gray-900" x-transition:enter="transition ease duration-200" x-transition:enter-start="scale-0" x-transition:enter-end="scale-100" x-transition:leave="transition ease-out duration-300" x-transition:leave-start="scale-100" x-transition:leave-end="scale-0" style="display: none;"></span>
        </span>
      </router-link>
        <div class="dropdown inline-block relative">
          <button class="text-gray-600 py-2 px-1 rounded inline-flex items-center">
            <span class="mr-1"><i class="fas fa-boxes"></i> Category</span>
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
          </button>
          <div class="container">
            <div class="flex flex-row">
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li
                  v-for="(item, i) in listCategory"
                  :key="i">
                  <a class="rounded-t bg-gray-200 hover:bg-gray-400 text-sm py-1 px-8 block whitespace-no-wrap" href="#">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </nav>
    <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
      <span class="inline-flex rounded-md shadow-sm">
        <button @click="logout" class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-red-300 border border-red-700 rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Logout
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    goToCart () {
      this.$router.push('/carts')
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    ...mapState([
      'listCategory'
    ])
  }

}
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
