<template>
    <header class="w-full px-8 text-gray-700 bg-white">
  <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
    <div class="relative flex flex-col md:flex-row">
        <a href="#_" class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0">
            <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">Coffee-Doffee<span class="text-indigo-600">.</span></span>
        </a>
    </div>

    <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
        <a href="#" class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900">
            Sign in
        </a>
        <span class="inline-flex rounded-md shadow-sm">
            <a href="#" class="inline-flex items-center justify-center px-3 py-1 text-base font-small leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700">
                Logout
            </a>
        </span>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
