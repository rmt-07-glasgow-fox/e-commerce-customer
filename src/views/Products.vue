<template>
<div>
  <navbar/>
  <div class="container-fluid bg" style="height: auto;">
  <div class="container pl-5">
    <h1 class="pt-4" style="padding-right: 60px">Products</h1>
    <div class="row mt-5">
      <div class="col-4 pb-5" v-for="product in allProducts" :key="product.id">
        <div class="card bg-light trform" style="width: 18rem; padding: 10px;">
          <img class="card-img-top" :src="product.imageUrl" alt="Card image cap">
          <div class="card-body">
            <p class="card-text text">{{ product.name }}</p>
            <p class="card-text text">{{ product.price.toLocaleString() }}</p>
            <p class="card-text text">Stock: {{ product.stock }}</p>
          </div>
          <div v-if="product.stock !== 0" class="card-footer text-center" @click.prevent="addCart(product.id)" style="background-color: #E02D5C; cursor: pointer;">
            <a class="w-100 text-white text" href="">Add To Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  methods: {
    async fetchAllProducts () {
      await this.$store.dispatch('fetchAllProducts')
    },
    async addCart (ProductId) {
      if (!localStorage.access_token) {
        this.$router.push('/login')
      } else {
        const payload = { ProductId, qty: 1 }
        await this.$store.dispatch('addCart', payload)
        this.$router.push('/cart')
      }
    }
  },
  computed: {
    allProducts () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchAllProducts()
  }
}
</script>

<style>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
.trform:hover {
  box-shadow: 0 2px 8px 0 rgba(0,0,0,.25);
  transition: transform .6s ease,-webkit-transform .6s ease;
  transform: scale(1.2);
  transition-property: transform, -webkit-transform;
  transition-duration: 0.6s, 0.6s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
}
</style>
