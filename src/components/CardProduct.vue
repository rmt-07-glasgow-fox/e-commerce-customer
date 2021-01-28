<template>
    <div class="col-sm-4 text-center">
      <b-card
        :title="product.name"
        :img-src="product.image_url"
        img-alt="Image"
        img-top
        style="max-width: 100vw;"
        class="mb-2 shadow-sm"
      >
      <hr>
        <b-card-text>
          Price Rp. {{ price }},-<br>
          Stock {{ stock }} pcs<br>
          Category {{ product.Category.name}}
        </b-card-text>
        <hr>
        <button class="btn ml-md-2 mb-1 btn-outline-success" @click="detail">Product Detail</button>
        <button class="btn ml-2 mb-1 btn-outline-danger" style="back" v-if="profile" @click="addwishlist">Add To Wishlist</button>
        <button class="btn btn-outline-info ml-2 mb-1" v-if="profile && product.stock > 0" @click="addtocart">Add To Cart</button>
      </b-card>
    </div>
</template>

<script>

export default {
  name: 'CardProduct',
  props: {
    product: Object
  },
  computed: {
    price () {
      return Number(this.product.price).toLocaleString()
    },
    stock () {
      return Number(this.product.stock).toLocaleString()
    },
    profile () {
      return this.$store.state.profile
    }
  },
  methods: {
    detail () {
      const id = this.product.id
      this.$store.dispatch('GETPRODUCTBYID', { id })
      this.$router.push('/product/' + id).catch(() => { })
    },
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
</style>
