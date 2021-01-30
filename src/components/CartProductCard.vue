<template>
    <div class="col">
        <div class="card">
            <img :src="Cart.Product.imageUrl" style="height: 200px" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title"><b>{{ Cart.Product.name }}</b> </h5>
            <p class="card-text">{{ Cart.Product.price | currency}}</p>
            <p class="card-text">total: {{ Cart.total }}</p>
            <button @click.prevent="deleteCart" id="deleteCartBtn">delete</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['Cart'],
  methods: {
    deleteCart () {
      const payload = {
        ProductId: this.Cart.Product.id
      }
      this.$store.dispatch('deleteCart', payload)
    }
  }
}
</script>

<style>
  .card {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
  #deleteCartBtn {
    background-color: red;
    color: white;
    outline: none;
    border: 0;
    padding: 5px;
    border-radius: 5px;
    opacity: 0.6;
    transition: 0.5s;
    width: 100px;
  }
  #deleteCartBtn:hover {
    transition: 0.5s;
    opacity: 0.9;
  }
</style>
