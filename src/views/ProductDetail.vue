<template>
  <div class="container pb-4">
    <div class="row shadow p-3">
      <div class="col-md-6 text-center">
        <img :src="product.image_url" alt="" class="img border p-5" v-if="product">
        <b-skeleton-img v-else no-aspect height="150px"></b-skeleton-img>
      </div>
      <div class="col-md-6 pt-5" v-if="product">
        <h1>{{ product.name }}</h1>
        <h2>Only Rp. {{ price }},-</h2>
        <h2>Stock: {{ stock }}</h2>
        <h2>Category: {{ product.Category.name }}</h2>
        <hr>
        <div class="text-center mt-5" v-if="profile">
          <button class="btn ml-2 mb-1 btn-outline-danger" style="back" @click="addwishlist">Add To Wishlist</button>
          <button class="btn btn-outline-info ml-2 mb-1" v-if="product.stock > 0" @click="addtocart">Add To Cart</button>
        </div>
        <div class="text-center mt-5" v-else>
          <p>Please Login First To Buy This Product</p>
        </div>
      </div>
      <div class="col-md-6" v-else>
        <b-skeleton-img no-aspect height="150px"></b-skeleton-img>
      </div>
      <div class="col-12">
        <hr>
        <h3 class="text-success">Similar Products</h3>
        <hr>
          <div class="container" v-if="similarProduct">
            <div class="row">
              <CardProduct
            v-for="similar in similarProduct"
            :key="similar.id"
            :product="similar"
            />
            </div>
          </div>
          <b-skeleton-img v-else no-aspect height="150px"></b-skeleton-img>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from '../components/CardProduct'
export default {
  name: 'ProductDetail',
  components: {
    CardProduct
  },
  computed: {
    product () {
      return this.$store.state.productById
    },
    price () {
      return Number(this.product.price).toLocaleString()
    },
    stock () {
      return Number(this.product.stock).toLocaleString()
    },
    profile () {
      return this.$store.state.profile
    },
    similarProduct () {
      return this.$store.getters.similarProduct
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('GETPRODUCTBYID', { id })
  },
  methods: {
    addwishlist () {
      const id = this.product.id
      this.$store.dispatch('ADDWISHLIST', { ProductId: id })
    },
    addtocart () {
      const id = this.product.id
      this.$store.dispatch('ADDTOCART', { ProductId: id })
    }
  }
}
</script>

<style>
.img {
  width: 100%;
}
</style>
