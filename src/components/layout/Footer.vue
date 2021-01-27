<template>
  <div id="Footer">
    <footer class="bg-primary text-white text-center text-lg-start">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <img
              src="@/assets/img_logoLineC.svg"
              alt=""
              width="192px"
              style="margin-bottom: 9px"
            />

            <p>© Ralfarios. 2021</p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Funorama</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <router-link to="/product">
                  <a class="text-white">Products</a>
                </router-link>
              </li>
              <li>
                <router-link to="/category">
                  <a class="text-white">Category</a>
                </router-link>
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-md-0">
            <h5 class="text-uppercase">Follow me</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a
                  href="https://github.com/Ralfarios"
                  target="_blank"
                  class="text-white"
                  >Github</a
                >
              </li>
            </ul>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
