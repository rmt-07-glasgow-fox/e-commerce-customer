<template>
  <div>
    <div>
    </div>
    <div>
      <div id="product-card" class="card" style="width: 15rem;">
        <img class="card-img-top" :src="imgURL">
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text"><strong>{{this.convertedPrice}}</strong></p>
          <p class="card-text"><em>{{this.currentStock}}</em></p>
        </div>
        <div id="btn-product-card">
          <a v-if="this.user_status" @click.prevent="addToCart(product.id)" id="btn-cart" href="#" class="btn"><strong> Add to cart</strong></a>
          <a v-if="this.user_status" @click.prevent="addToWishlist(product.id)" id="btn-wishlist" href="#" class="btn"><img src="https://www.flaticon.com/svg/vstatic/svg/1077/1077035.svg?token=exp=1611720744~hmac=02216e6a58538d4b9899a84f620ef491" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import swal from 'sweetalert'
export default {
  name: 'ProductCard',
  data () {
    return {
      imgURL: this.product.image_url,
      currentStock: this.getStock(),
      convertedPrice: this.convert(this.product.price),
      user_status: ''
    }
  },
  methods: {
    getStock () {
      if (this.product.stock === 0) {
        return 'Out of stock'
      } else {
        return `${this.product.stock} left`
      }
    },
    convert (price) {
      return 'Rp. ' + price.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    },
    addToCart (id) {
      swal({
        title: 'Add this product?',
        text: 'Product will be added to cart',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then(yes => {
          if (yes) {
            this.$store.dispatch('addToCart', id)
            swal('Product has been added to your cart', {
              icon: 'success'
            })
          }
        })
    },
    addToWishlist (id) {
      swal({
        title: 'Add this product?',
        text: 'Product will be added to your wishlist',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then(yes => {
          if (yes) {
            this.$store.dispatch('addToWishlist', id)
            swal('Product has been added to your wishlist', {
              icon: 'success'
            })
          }
        })
    },
    getUserStatus () {
      this.user_status = localStorage.getItem('user_status')
    }
  },
  props: [
    'product'
  ],
  created () {
    this.$store.dispatch('fetchProducts')
    this.getUserStatus()
  },
  computed: {
    ...mapState([
    ])
  }
}
</script>

<style>
#product-card {
  height: 470px;
}
#btn-cart {
  width: 80%;
  height: 50px;
  border-radius: 0;
}
#btn-wishlist {
  width: 20%;
  height: 50px;
  border-radius: 0;
}
#btn-product-card a {
}
#btn-product-card a:hover {
  background-color: rgb(245, 245, 245);
}
</style>
