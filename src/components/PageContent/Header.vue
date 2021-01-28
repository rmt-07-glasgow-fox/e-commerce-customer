<template>
  <div class="w3-container" style="margin-top:80px" id="showcase">
    <h1 class="w3-jumbo"><b>{{title}}</b></h1>
    <h1 class="w3-xxxlarge w3-text-red"><b>{{subtitle}}.</b></h1>
    <hr style="width:50px;border:5px solid red" class="w3-round">
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['title', 'subtitle']
}
</script>

<style>

</style>
