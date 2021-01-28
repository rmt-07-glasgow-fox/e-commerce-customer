<template>
  <div class="">
    <v-row v-if="cart.length > 0">
      <CartItem v-for="item in cart" :key="item.id" :item="item"/>
    </v-row>
    <v-row v-else>
      <v-col cols="12" align="center" justify="center">
        NO DATA
      </v-col>
    </v-row>
    <v-btn
        type="submit"
        width="100%"
        color="blue-grey"
        class="white--text"
        @click="checkout"
      >
        CHECKOUT
        <v-icon right dark>mdi-cart-plus</v-icon>
      </v-btn>
  </div>
</template>

<script>
import CartItem from '@/components/carts/CartItem.vue'
import { mapState } from 'vuex'

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapState({
      cart: state => state.mCart.cart
    })
  },
  methods: {
    checkout () {
      this.$store.dispatch('checkout', null, true)
    }
  },
  created () {
    this.$store.dispatch('fetchCart', null, true)
  }
}
</script>

<style>

</style>
