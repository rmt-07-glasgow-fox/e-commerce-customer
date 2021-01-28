<template>
  <div class="col-2">
    <div class="container">
      <div class="card" style="width: 10rem;">
        <img class="card-img-top" :src="product.image_url" alt="...">
        <div id="underImg" class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text">{{product.price}}</p>
          <p class="card-text">stock: {{ this.stock }}</p>
          <div>
            <button @click="createCart(product.id)" class="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
  props: ['product'],
  data () {
    return {
      stock: this.product.stock,
      newstock: 0
    }
  },
  methods: {
    createCart (id) {
      if (!localStorage.access_token) {
        return this.$router.replace('login')
      } else {
        this.$store.dispatch('createCart', id)
        this.stock = this.product.stock--
        this.$store.commit('readStock', this.stock)
        this.stock = this.$store.state.stocks
      }
    }
  },
  created () {
    this.newstock = this.product.stock--
    this.$store.commit('readStock', this.product.stock)
  }
}
</script>

<style scoped>
  img{
    height: 10rem;
  }
  .col-2{
    margin: auto;
  }
</style>
