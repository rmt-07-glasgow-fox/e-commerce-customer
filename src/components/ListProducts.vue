<template>
  <div class="container">
    <div style="margin-bottom:1%; width:20%">
        <label for="category">Filter products by category...</label>
          <select class="form-control" id="category" v-model="category">
            <option value="all">all</option>
            <option value="Makeup">Makeup</option>
            <option value="Skincare">Skincare</option>
            <option value="Haircare">Haircare</option>
          </select>
      </div>
    <div class="row">
      <!-- card products -->
      <div class="card mx-2 my-2" style="width:16.5rem;" v-for="product in products" :key="product.id">
        <div class="card-body text-center">
          <img class="card-img-top mb-2" :src="product.imageUrl" alt="Sample">
          <h5>{{ product.name }}</h5>
          <p class="small text-muted text-uppercase mb-2">{{ product.category }}</p>
          <hr>
          <h6 class="mb-3">
            <span class="text-dark mr-1">$ {{ product.price }}</span>
          </h6>
          <p v-if="product.stock">
            <span class="text-dark mr-1"> {{ product.stock }} left in stock</span>
          </p>
          <p v-if="!product.stock">
            <span class="text-danger mr-1"> SOLD OUT</span>
          </p>
          <button type="button" class="btn btn-dark btn-sm mr-1 mb-2" @click="addCart(product.id)" :disabled='!product.stock'>
            <i class="fas fa-shopping-cart pr-2"></i>Add to cart
          </button>
          <button type="button" class="btn btn-light btn-sm mr-1 mb-2" data-toggle="tooltip" data-placement="top" title="Add to wishlist" @click="addWishlist(product.id)" :disabled='!product.stock'>
            <img src="../assets/wishlist.png" alt="" style="width:50%; height:50%">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListProducts',
  data () {
    return {
      category: ''
    }
  },
  watch: {
    category (value) {
      this.$store.commit('filterCategory', value)
    }
  },
  methods: {
    addCart (id) {
      if (!localStorage.getItem('access_token')) {
        this.$router.push('/login')
      } else {
        this.$store.dispatch('addCart', id)
      }
    },
    addWishlist (id) {
      if (!localStorage.getItem('access_token')) {
        this.$router.push('/login')
      } else {
        this.$store.dispatch('addWishlist', id)
      }
    }
  },
  computed: {
    products () {
      return this.$store.getters.filterCategory
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
    this.$store.dispatch('fetchCart')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
