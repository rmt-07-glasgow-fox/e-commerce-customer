<template>
<div class="make-center">
  <div class="cont-cart">
    <div class="cart-page">
        <table>
          <thead>
            <th>Product</th>
            <th></th>
          </thead>
          <tbody>
            <tr v-if="listWishlist.length === 0">
              <td> no item in wishlist</td>
            </tr>
            <tr v-for="wishlist in listWishlist" :key="wishlist.productId">
            <td>
              <div class="cart-info">
                <img :src="wishlist.product.image_url" alt="">
              <div>
                <p>{{wishlist.product.name}}</p>
                <small>Price: {{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(wishlist.product.price)}}</small>
                <a href="javascript:void(0)" @click="removeFromWishlist(wishlist.id)"> Remove</a>
              </div>
              </div>
            </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'WishlistForm',
  data () {
    return {
      totalItem: 0
    }
  },
  computed: {
    ...mapState('wishlist', ['listWishlist'])
  },
  methods: {
    ...mapActions('wishlist', ['getAllWishlist', 'removeItemWishlist']),
    removeFromWishlist (id) {
      this.removeItemWishlist(id)
    }
  },
  created () {
    this.getAllWishlist()
  }
}
</script>
