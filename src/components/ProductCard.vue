<template>
  <div class="col"
    v-if="product.status">
    <div class="card h-100">
      <img :src="product.image_url" class="card-img-top show-product" alt=""
      @click.prevent="showProduct(product.id)"
      :class="{'filter': product.stock == 0}">
      <div class="card-body">
        <h5 class="card-title">{{ product.Category.categoryName }}</h5>
        <p class="card-text">{{ shortening }}</p>
      </div>
      <div class="card-footer">
        <div class="d-flex justify-content-between">
          <div>
            <p class="text-muted" style="margin: 0" v-if="product.stock > 0"><strong>In stock</strong></p>
            <p class="text-muted" style="margin: 0" v-else><strong>Out of stock</strong></p>
            <p class="text-muted" style="margin: 0"><strong> {{ money }}</strong></p>
          </div>
          <div class="d-flex">
            <i class="love-icon fas fa-heart m-auto text-white"
              :class="{ 'text-danger': wishlistStatus }"
              @click.prevent="addWishlist(product.id)"></i>
          </div>
        </div>
      </div>
    </div>
    <product-detail :product="product"></product-detail>
  </div>
</template>

<script>
import ProductDetail from '../components/ProductDetail'
export default {
  name: 'ProductCard',
  components: {
    ProductDetail
  },
  methods: {
    showProduct (id) {
      this.$bvModal.show('product-detail-' + id)
    },
    addWishlist (id) {
      if (localStorage.access_token) {
        this.$store.dispatch('addWishlist', {
          ProductId: id,
          wishlist: !this.wishlistStatus
        })
      } else {
        this.$router.push('/auth')
      }
    }
  },
  computed: {
    shortening () {
      if (this.product.name.length > 57) return this.product.name.substring(0, 50) + '...'
      return this.product.name
    },
    money () {
      const options1 = { style: 'currency', currency: 'IDR' }
      const numberFormat1 = new Intl.NumberFormat('id-ID', options1)
      return numberFormat1.format(this.product.price)
    },
    wishlistStatus () {
      const find = this.$store.state.userProducts.find(e => e.ProductId === this.product.id)

      if (find) return find.wishlist
      return false
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.dispatch('fetchUserProducts')
    }
  },
  props: ['product']
}
</script>

<style scoped>
  .filter {
    filter: grayscale(100%);
  }
  .show-product:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  .love-icon{
     text-shadow: 0 0 1px #000;
  }
  .love-icon:hover {
    cursor: pointer;
  }
</style>
