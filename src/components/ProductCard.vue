<template>
  <div class="card col-2 m-1">
    <img :src="product.image_url" class="card-img-top" alt="...">
    <div class="">
      <p class="card-title">{{ product.name }}</p>
      <div class="footer">
        <div>Rp. {{ product.price }}</div>
        <button class="btn btn-sm btn-outline-primary"><i class="fas fa-cart-plus"></i></button>
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

<style scoped>
  .card{
    padding: 0 !important;
    height: 280px;
    border: 1px solid blue;
  }
  img{
    width: 100%;
    height: 200px !important;
    object-fit: cover;
  }
  .footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-left: 5px;
  }
</style>
