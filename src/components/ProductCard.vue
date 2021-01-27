<template>
  <vs-col vs-type="flex" vs-justify="center" vs-align="center" w="3">
    <vs-card id="productCard">
      <template #title>
        <h3>{{ product.name }}</h3>
        <p>{{ "IDR " + product.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")}}</p>
        <small>stock: {{ product.stock }}</small>
      </template>
      <template #img>
        <img :src="`${product.image_url}`" alt="">
      </template>
      <template #text>
        <p>
        </p>
      </template>
      <template #interactions>
        <vs-button
          color="rgb(59,222,200)"
          gradient
          icon>
          <i class='bx bx-cart'></i>
        </vs-button>
      </template>
    </vs-card>
  </vs-col>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product']
}
</script>

<style>
  #productCard {
    margin: 20px 0px 20px 0px;
  }
</style>
