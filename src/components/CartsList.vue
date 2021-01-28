<template>
  <div>
    <div class="row" v-if="(this.carts.length > 0 && this.products.length > 0)">
      <div class="col-md-9 d-flex flex-column align-items-center">
        <Cart
          v-for="(cart, i) in carts"
          :key="i"
          :cart="cart"
        />
      </div>
      <div class="col-md-3">
        <div class="checkout border-left">
          Total
          <p>
            Rp {{price}}
          </p>
          <button class="btn btn-success" @click="checkout">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import priceIDR from '../helpers/priceIDR'
import Cart from '../components/Cart'

export default {
  components: {
    Cart
  },
  data () {
    return {

    }
  },
  methods: {
    checkout () {
      this.$store.dispatch('checkout')
    }
  },
  computed: {
    ...mapState([
      'carts',
      'products'
    ]),
    total () {
      if (this.carts.length > 0 && this.products.length > 0) {
        let sum = 0
        this.carts.forEach(el => {
          sum = sum + el.quantity * this.products.find(el2 => el2.id === el.ProductId).price
        })
        return sum
      }
      return 0
    },
    price () {
      if (this.carts.length > 0 && this.products.length > 0) {
        return priceIDR(this.total)
      }
      return 0
    }
  }
}
</script>

<style scoped>
  .checkout{
    padding-left: 20px;
    height: 8em;
    font-size: 20px;
    font-weight: bold;
  }
</style>
