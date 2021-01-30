<template>
    <div class="col">
        <div class="card">
            <img :src="History.Product.imageUrl" style="height: 200px" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title"><b>{{ History.Product.name }}</b> </h5>
            <p class="card-text"><b>price:</b> {{ History.Product.price | currency}}</p>
            <p class="card-text"><b>pcs:</b> {{ History.total }}</p>
            <p class="card-text"><b>total price:</b> {{ History.total * History.Product.price | currency}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['History']
}
</script>

<style>
  .card {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
</style>
