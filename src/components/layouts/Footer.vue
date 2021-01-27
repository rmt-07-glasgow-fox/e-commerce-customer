<template>
  <footer
    class="bg-two text-center text-lg-start"
    v-if="$route.name !== 'Login' && $route.name !== 'Register'"
  >
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase text-yellow">Lapak H8</h5>
          <p class="text-white">
            Lapak H8 merupakan e-commerce nomor satu di Indonesia yang menyediakan kurus
            programming, digital marketing, dll.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase text-yellow">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#" class="text-white">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-one text-center text-white p-3">
      © 2021 Copyright
      <router-link class="text-yellow" to="/"><strong> Lapak H8</strong></router-link>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
