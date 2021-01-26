<template>
  <div class="col-md-4 mb-3 mt-3">
    <div class="card">
      <img class="card-img-top" :src="product.image_url" alt="Card image cap" style="max-height:40vh">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.price }}</p>
        <p>{{ product.Category.name }}</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style>

</style>
