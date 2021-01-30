<template>
    <div class="col">
        <div class="card">
            <img :src="Product.imageUrl" style="height: 200px" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title"><b>{{ Product.name }}</b> </h5>
            <p class="card-text">{{ Product.price | currency}}</p>
            <p class="card-text">stock: {{ Product.stock }}</p>
            <button @click.prevent="addToCart" id="addToCartBtn">Add To Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['Product'],
  methods: {
    addToCart () {
      const payload = {
        ProductId: this.Product.id
      }
      console.log(payload)
      this.$store.dispatch('addToCart', payload)
        .then(({ data }) => {
          this.$router.push({ path: '/cart' })
        })
        .catch(error => {
          console.log(error.response.data)
        })
    }
  }
}
</script>

<style>
  .card {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
  .card:hover {
    box-shadow: 4px 4px 20px 4px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
  #addToCartBtn {
    background-color: black;
    color: white;
    outline: none;
    border: 0;
    padding: 5px;
    border-radius: 5px;
    opacity: 0.8;
    transition: 0.5s;
  }
  #addToCartBtn:hover {
    transition: 0.5s;
    opacity: 1;
  }
</style>
