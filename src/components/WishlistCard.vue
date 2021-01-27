<template>
  <div>
    <div id="product-card" class="card" style="width: 15rem;">
      <img class="card-img-top" :src="imgURL">
      <div class="card-body">
        <h5 class="card-title">{{wishlist.Product.name}}</h5>
        <p class="card-text"><strong>{{this.convertedPrice}}</strong></p>
        <p class="card-text"><em>{{this.currentStock}}</em></p>
      </div>
      <div id="btn-product-card">
        <a @click.prevent="addToCart(wishlist.Product.id)" id="btn-cart" href="#" class="btn"><strong> Add to cart</strong></a>
        <a @click.prevent="removeWishlist(wishlist.id)" id="btn-wishlist" href="#" class="btn"><img src="https://www.flaticon.com/svg/vstatic/svg/3096/3096687.svg?token=exp=1611765413~hmac=53c662e926c74bfbb8796d5730522cec" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'WishlistCard',
  data () {
    return {
      imgURL: this.wishlist.Product.image_url,
      currentStock: this.getStock(),
      convertedPrice: this.convert(this.wishlist.Product.price)
    }
  },
  methods: {
    getStock () {
      if (this.wishlist.Product.stock === 0) {
        return 'Out of stock'
      } else {
        return `${this.wishlist.Product.stock} left`
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
    removeWishlist (id) {
      swal({
        title: 'Are you sure?',
        text: 'Product will be removed from your wishlist',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then(yes => {
          if (yes) {
            this.$store.dispatch('removeWishlist', id)
            swal('Product has been removed from your wishlist', {
              icon: 'success'
            })
          }
        })
    }
  },
  props: [
    'wishlist'
  ],
  created () {
    this.$store.dispatch('fetchWishlist')
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
#btn-wishlist img {
  width: 20px;
}
#btn-product-card a {
}
#btn-product-card a:hover {
  background-color: rgb(245, 245, 245);
}
</style>
