<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://myfirststory.net/s3/skiyaki/uploads/link/image/26945/stmg_banner.png" class="d-block w-100" alt="My First Story">
      </div>
      <div class="carousel-item">
        <img src="https://yt3.ggpht.com/INblPUSHfIe17ppbrYoGHjT5KgwISGanEPwClll-ZBIx28nq5XJI50GDJZkYeMsOYpF515_Z=w640-fcrop64=1,32b75a57cd48a5a8-k-c0xffffffff-no-nd-rj" class="d-block w-100" alt="One Ok Rock">
      </div>
      <div class="carousel-item">
        <img src="https://fbcoverstreet.com/content/JxORsgJYtLmH7dVzgbGJBPYvyrpAiRm23QXn17nzeEPNElbJ8jrxxKo4ZcbB1Izc.jpg" class="d-block w-100" alt="Green Day">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Banner'

}
</script>

<style scoped>
img {
  width: 100%;
  height: 250px;
}
</style>
