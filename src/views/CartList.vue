<template>
  <div>
  <div v-if="cartProduct.length !== 0">
    <cart-list-card
    v-for="cartOne in cartProduct"
    :key="cartOne.id"
    :cartOne="cartOne"
    ></cart-list-card>
  </div>
  <div class="nocart" v-if="cartProduct.length === 0">
    <h1><b>Your cart is empty</b></h1>
    <h4><router-link to="/">Add product to your cart here</router-link></h4>
    <img src="https://image.freepik.com/free-vector/add-cart-concept-illustration_114360-1435.jpg" >
  </div>
  </div>
</template>

<script>
import CartListCard from '../components/CartListCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'CartList',
  data () {
    return {

    }
  },
  components: {
    CartListCard
  },
  methods: {
    getCart () {
      this.$store.dispatch('getCartProduct')
    }
  },
  computed: {
    ...mapState([
      'cart', 'cartProduct'
    ])
  },
  created () {
    this.getCart()
  },
  beforeRouteEnter (to, from, next) {
    if (!localStorage.access_token) next('/')
    next()
  }
}
</script>

<style>
.nocart h4 a {
  color: #42b983;
}
</style>
