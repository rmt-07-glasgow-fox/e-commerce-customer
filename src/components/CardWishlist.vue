<template>
  <b-card
      :title="wishlist.Product.name"
      :img-src="wishlist.Product.image_url"
      img-alt="Image"
      img-top
      style="max-width: 100vw;"
      class="mb-2 shadow-sm"
    >
    <hr>
      <b-card-text>
        Price Rp. {{ price }},-<br>
        Stock {{ stock }} pcs<br>
        Category {{ wishlist.Product.Category.name}}
      </b-card-text>
      <hr>
      <button class="btn ml-md-2 mb-1 btn-outline-success" @click="detail">Product Detail</button>
      <button class="btn ml-2 mb-1 btn-outline-danger" style="back" @click="removeWishlist">Remove From Wishlist</button>
      <button class="btn btn-outline-info ml-2 mb-1" v-if="wishlist.Product.stock > 0" @click="addtocart">Add To Cart</button>
    </b-card>
</template>

<script>

export default {
  name: 'CardWishlist',
  props: {
    wishlist: Object
  },
  methods: {
    detail () {
      const id = this.wishlist.Product.id
      this.$store.dispatch('GETPRODUCTBYID', { id })
      this.$router.push('/product/' + id).catch(() => { })
    },
    addtocart () {
      const id = this.wishlist.Product.id
      this.$store.dispatch('ADDTOCART', { ProductId: id })
    },
    removeWishlist () {
      const id = this.wishlist.id
      this.$store.dispatch('DELETEWISHLISTS', { id: id })
    }
  },
  computed: {
    price () {
      return Number(this.wishlist.Product.price).toLocaleString()
    },
    stock () {
      return Number(this.wishlist.Product.stock).toLocaleString()
    }
  }
}
</script>
