<template>
  <footer
    class="bg-light text-center text-lg-start"
    v-if="$route.name !== 'Login' && $route.name !== 'Register'"
  >
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">Lapak Vue</h5>
          <p>
            Lapak Vue merupakan e-commerce nomor satu di Indonesia yang menyediakan elektronik.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2021 Copyright:
      <a class="text-dark" href="https://lapakvue.web.app/">Lapak Vue</a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
