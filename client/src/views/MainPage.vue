<template>
  <div>
    <header class="relative w-full px-8 text-gray-700 bg-white body-font mb-10">
      <Navbar/>
    </header>
    <main class="relative w-full px-8 text-gray-700 bg-white body-font mt-10">
        <div
          class="container w-full p-5 m-4 mx-auto my-2 text-center bg-white h-full rounded-xl">
          <div class="flex flex-row">
              <router-view/>
          </div>
          <!-- <div>
            <Cart/>
            <router-view/>
          </div> -->
        </div>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'MainPage',
  components: {
    Navbar
  }
}
</script>

<style scoped>

</style>
