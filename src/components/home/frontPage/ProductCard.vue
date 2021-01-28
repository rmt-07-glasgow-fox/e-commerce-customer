<template>
  <!-- card -->
  <div class="col-12 col-sm-6 col-md-6 col-lg-3" id="ProductCard">
    <div class="card h-100" style="border-radius: 1rem">
      <img
        :src="Product.image_url"
        class="card-img-top card-img-size"
        style="border-top-left-radius: 1rem; border-top-right-radius: 1rem"
      />
      <div class="card-body">
        <p
          class="card-text text-muted"
          style="font-weight: 600; margin-bottom: 8px"
        >
          {{ Product.Category.name }}
        </p>
        <h5
          class="card-title"
          style="
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #e55c3e;
          "
        >
          {{ Product.name }}
        </h5>
        <p class="card-text" style="font-weight: 600; margin-bottom: 4px">
          {{ formatPrice(Product) }}
        </p>
        <p class="card-text" style="font-weight: 600; margin-bottom: 8px">
          {{ formatStock(Product) }}
        </p>

        <div class="btn-group btn-group-sm w-100" role="group">
          <button
            class="btn btn-outline-primary"
            style="
              marign-bottom: 4px;
              border-top-left-radius: 2.4rem;
              border-bottom-left-radius: 2.4rem;
            "
            @click="addCart(Product.id)"
          >
            <shopping-cart-icon
              size="1x"
              style="margin-bottom: 2px; margin-right: 4px"
            ></shopping-cart-icon>
            Add
          </button>
          <button
            class="btn btn-outline-danger"
            style="
              marign-bottom: 4px;
              border-top-right-radius: 2.4rem;
              border-bottom-right-radius: 2.4rem;
            "
            v-if="!wishlist.length"
            @click="addWishlist(Product.id)"
          >
            <heart-icon
              size="1x"
              style="margin-bottom: 2px; margin-right: 4px"
            ></heart-icon>
            Add
          </button>
          <button
            class="btn btn-danger"
            style="
              marign-bottom: 4px;
              border-top-right-radius: 2.4rem;
              border-bottom-right-radius: 2.4rem;
            "
            v-else
            @click="toWishlistPage"
          >
            <heart-icon
              size="1x"
              style="margin-bottom: 2px; margin-right: 4px"
            ></heart-icon>
            Added
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- card// -->
</template>

<script>
import { ShoppingCartIcon, HeartIcon } from 'vue-feather-icons'
import axios from '@/api/axios.js'

export default {
  name: 'ProductCard',
  props: ['Product', 'isLogin'],
  data () {
    return {
      wishlist: {}
    }
  },
  components: {
    ShoppingCartIcon,
    HeartIcon
  },
  methods: {
    toWishlistPage () {
      this.$router.push('/wishlist')
    },
    formatPrice (product) {
      if (product.price) return `Rp. ${product.price.toLocaleString('id')}`

      return 'Free'
    },
    formatStock (product) {
      if (product.stock) return product.stock + ' left'

      return 'Sold'
    },
    addCart (id) {
      if (this.isLogin) return this.$store.dispatch('addCart', id)
      return this.$router.push('/login')
    },
    addWishlist (id) {
      if (this.isLogin) return this.$store.dispatch('addWishlist', id)
      return this.$router.push('/login')
    },
    async fetchOneWishlist (id) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `/wishlist/${id}`,
          headers: { access_token: localStorage.getItem('access_token') }
        })

        this.wishlist = data
        return console.log('OK')
      } catch (err) {
        console.log(err)
      }
    }
  },
  created () {
    if (this.isLogin) return this.fetchOneWishlist(this.Product.id)
  }
}
</script>

<style scoped>
.card-img-size {
  height: 45vh;
  max-width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 766) {
  .card-img-size {
    height: 500vh;
  }
}
@media screen and (max-width: 960px) {
  .card-img-size {
    height: 35vh;
  }
}
</style>
