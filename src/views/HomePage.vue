<template>
  <div class="mx-auto mt-3">
    <carousel
      :perPageCustom="[[768, 1]]">
      <slide>
        <span class="label">
          <img src="https://icms-image.slatic.net/images/ims-web/f2919eed-bf3e-4b2d-8649-6917de9ff9dc.jpg_1200x1200.jpg" style="width: 100%" alt="">
        </span>
      </slide>
      <slide>
        <span class="label">
          <img src="https://icms-image.slatic.net/images/ims-web/f736c2b7-12d9-4159-8cfe-2bded11eed43.jpg" style="width: 100%" alt="">
        </span>
      </slide>
      <slide>
        <span class="label">
          <img src="https://icms-image.slatic.net/images/ims-web/95eb4c2d-765b-4e3e-943e-5cc7b93b58ae.jpg" style="width: 100%" alt="">
        </span>
      </slide>
      <slide>
        <span class="label">
          <img src="https://icms-image.slatic.net/images/ims-web/86d1669b-3f3f-475f-a161-c7b1a36624fa.jpg" style="width: 100%" alt="">
        </span>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
}
/*
.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */
</style>
