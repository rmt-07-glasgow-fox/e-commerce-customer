<template>
  <div class="col-2">
    <div class="container">
      <div class="card" style="width: 10rem;">
        <img class="card-img-top" :src="product.image_url" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text">{{product.stock}}</p>
          <p class="card-text">{{product.price}}</p>
          <p>{{product.id}}</p>
          <div>
            <button @click="createCart(product.id)">Buy</button>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: 'Products',
  props: ['product'],
  methods: {
    createCart (id) {
      if (!localStorage.access_token) {
        return this.$router.replace('login')
      }
      this.$store.dispatch('createCart', id)
    }
  }
}
</script>

<style scoped>
  img{
    height: 10rem;
  }
</style>
