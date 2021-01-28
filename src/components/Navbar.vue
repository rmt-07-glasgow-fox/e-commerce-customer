<template>
    <header class="w-full px-8 text-gray-700 bg-white">
  <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
    <div class="relative flex flex-col md:flex-row">
        <a href="" @click.prevent="" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
            <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">Coffee-Doffee<span class="text-indigo-600">.</span></span>
        </a>
    </div>

    <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
        <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
          <a href="" role="button" class="relative flex">
            <svg @click="goToCart" class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
              </svg>
              <!-- ini untuk jumlah di cart -->
              <span @click="goToCart" class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
            </span>
          </a>
        </li>
        <span class="inline-flex rounded-md shadow-sm">
            <a href="" @click="logout" class="inline-flex items-center justify-center px-3 py-1 text-base font-small leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700">
                Logout
            </a>
        </span>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    goToCart () {
      this.$router.push('/cart')
    }
  }
}
</script>
