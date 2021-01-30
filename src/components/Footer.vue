<template>
<footer class="bg-secondary text-white text-lg-start" id="footer-container">
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">DISCLAIMER</h5>
        <p>
          This web application is only used for learning, so the product offered is only an example and is not an original product.
All forms of images and videos in this application are not used for commercial use, so please don't sue the creators.
        </p>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0 align-position">
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0 align-position">
        <h5 class="mb-0" style="padding-bottom:8px">Follow Me</h5>
        <ul class="list-unstyled">
          <li>
            <a href="https://www.twitter.com/Afis_ChenZho" class="text-white">Twitter</a>
          </li>
          <li>
            <a href="https://www.github.com/afistapratama12" class="text-white">Github</a>
          </li>
        </ul>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
    © 2021 No Copyright | Created By : Afista Pratama hacktiv8
  </div>
  <!-- Copyright -->
</footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.align-position {
  text-align: right;
}
#footer-container {
  /* position:fixed; */
  /* height: 100%; */
  margin-top:223px;
}
</style>
