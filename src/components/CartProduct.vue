<template>
  <article class="sneaker">
        <div class="sneaker__sale">{{product.category.name}}</div>
        <img :src="product.image_url" alt="" class="sneaker__img">
        <span class="sneaker__name">{{product.name}}</span>
        <span class="sneaker__name">stock: {{product.stock}}</span>
        <span class="sneaker__price">{{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}}</span>

        <a @click.prevent="addCart(product.id)" type="button" style="cursor:pointer" class="button-light"><i class='bx bx-cart' ></i> Add to Cart <i class='bx bx-right-arrow-alt button-icon' ></i></a>
        <a @click.prevent="addWishlist(product.id)" type="button" style="cursor:pointer" class="button-light"><i class='bx bx-heart'></i> Add to Wishlist <i class='bx bx-right-arrow-alt button-icon' ></i></a>
      </article>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CartProduct',
  props: ['product'],
  computed: {
    ...mapGetters(['isAuth'])
  },
  methods: {
    ...mapActions('cart', ['addItemCart']),
    ...mapActions('wishlist', ['addItemWishlist']),
    addCart (id) {
      if (this.isAuth) {
        this.addItemCart({ productId: id, add: true })
      } else {
        this.$router.push({ name: 'Login' })
      }
    },
    addWishlist (id) {
      if (this.isAuth) {
        this.addItemWishlist({ productId: id })
      } else {
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>
