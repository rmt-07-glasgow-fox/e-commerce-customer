<template>
  <div class="col-6">
    <div class="card " style="margin-top: 30px; margin-bottom: 10px;">
    <img :src="banner.image_url" class="card-img-top" alt="">
    <div class="card-body">
    <h5 class="card-title">{{banner.title}}</h5>
    <p class="card-text text-muted">status: {{banner.status}}</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerCard',
  props: ['banner']
}
</script>

<style>

</style>
