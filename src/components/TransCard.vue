<template>
<div class="col-3">
    <div class="card" style="margin-top: 20px; margin-bottom: 20px;" height="300px">
    <img :src="transaction.image_url" class="card-img-top" height="250px">
    <div class="card-body">
    <h5 class="card-title">{{transaction.name}}</h5>
    <p class="card-text text-muted">Quantity: {{transaction.quantity}}</p>
    <p class="card-text" >Total Rp. {{transaction.price}}</p>
    <div style="text-align: center; padding-left:20px">
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransCard',
  props: ['transaction'],
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
