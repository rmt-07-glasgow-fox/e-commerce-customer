<template>
  <div class="card product-card">
    <img class="card-img-top img-product"
     :src="item.image_url">
    <div class="card-body">
      <h4 class="card-title">{{ item.name }}</h4>
      <div class="text-card">
        <div>
          <p class="card-text">{{ item.price }} IDR</p>
          <p class="card-text">stock: {{ item.stock }}</p>
        </div>
        <img src="../assets/wishlist.png" alt="wishlist" class="wishlist"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['item']
}
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: row;
}

.img-product {
  height: 150px;
  width: 100px;
}

.wishlist {
  height: 50px;
  width: 50px;
  margin-left: 100px;
  filter: invert(1);
}

.text-card {
  display: flex;
  flex-direction: row;
}
</style>
