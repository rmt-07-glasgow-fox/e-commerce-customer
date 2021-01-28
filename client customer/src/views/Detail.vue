<template>
<div class="full">
<NavbarCart></NavbarCart>
<div class="container">
    <div class="card">
        <div class="container-fluid">
            <div class="wrapper row">
                <div class="preview col-md-6">
                    <div class="preview-pic tab-content">
                        <img :src="material.image_url" />
                    </div>
                </div>
                <div class="details col-md-6" id="text">
                    <h3 class="product-title">{{ material.name }}</h3><br>
                    <p class="product-description">{{ material.description }}</p>
                    <h4 class="price">current price: <span>Rp. {{ material.price }}</span></h4>
                    <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                    <h5 class="sizes">Category : {{ material.category }}</h5>
                    <h5 class="colors">Stock : {{ material.stock }}</h5>
                    <div class="qty mt-3">
                        <label for="amount">Amount : </label>
                        <span class="minus bg-dark">-</span>
                        <input type="number" class="count" name="qty" min="1" :max="material.stock" v-model="amount">
                        <span class="plus bg-dark">+</span>
                    </div><br>
                    <div class="action">
                        <button class="add-to-cart btn btn-dark" type="button" @click.prevent="addCart">add to cart</button>
                        <button class="add-to-cart btn btn-light" type="button" @click.prevent="addWishlist(material.id)">add to wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import NavbarCart from '../components/NavbarCart.vue'

export default {
  name: 'Detail',
  components: {
    NavbarCart
  },
  data () {
    return {
      amount: 1
    }
  },
  methods: {
    addCart () {
      const payload = {
        MaterialId: this.material.id,
        amount: this.amount
      }
      console.log(payload)
      this.$store.dispatch('addCart', payload)
    },
    addWishlist (id) {
      this.$store.dispatch('addWishlist', id)
    }
  },
  computed: {
    material () {
      return this.$store.state.material
    }
  },
  created () {
    this.$store.dispatch('fetchOneMaterial', this.$route.params.id)
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.access_token) {
      next()
    } else {
      next({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
    .container {
        margin-top: 20px;
        padding: 50px;
        height: 700px;
        display: flex;
        align-content: center;
    }

    .card {
        background-color: khaki;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    img {
        height: 300px;
        width: 350px;
        margin-top: 35px;
        margin-left: 70px;
    }

    #text {
        padding-left: 40px;
        padding-right: 20px;
        border-left: 1px solid goldenrod;
    }

    button {
        margin-right: 20px;
    }

</style>
