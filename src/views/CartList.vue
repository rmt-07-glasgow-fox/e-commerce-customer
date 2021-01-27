<template>
  <div>
    <cart-list-card
    v-for="cartOne in cartProduct"
    :key="cartOne.id"
    :cartOne="cartOne"
    ></cart-list-card>
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

</style>
