<template>
<div>
    <h1>Your Cart</h1>
  <div class="cart">
    <div class="col-3 ">
      <div
        class="card"
        style="margin: 10px 10px"
        v-for="cart in carts"
        :key="cart.id"
      >
        <img :src="cart.Product.image_url" class="card-img-top" />
        <div class="card-body">
          <h4 class="card-title">{{ cart.Product.name }}</h4>
          <div class="def-number-input number-input safari_only mb-0 w-100">
            <button
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
              class="btn-danger"
              @click="updateCart(cart.id, (cart.amount - 1))"
            >
              -
            </button>
            <input
              type="number"
              class="quantity"
              min="0"
              :max="cart.Product.stock"
              name="quantity"
              v-model="cart.amount"
            />
            <button
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
              class="btn-success"
              @click="updateCart(cart.id, (cart.amount + 1))"
            >
              +
            </button>
          </div>
          <h5>Price: {{ cart.amount * cart.Product.price }}</h5>
          <div>
            <button
              style="margin: 5px 5px"
              class="btn btn-danger"
              @click="goDel(cart.id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Cart',
  data () {
    return {
      amount: ''
    }
  },
  methods: {
    goDel (id) {
      this.$store.dispatch('delCart', id)
    },
    updateCart (id, amount) {
      this.$store.dispatch('updateCart', { id, amount })
    }
  },
  created () {
    this.$store.dispatch('getCarts')
  },
  computed: {
    ...mapState(['carts'])
  },
  beforeRouteEnter (to, from, next) {
    if (localStorage.getItem('access_token')) {
      next()
    } else next('/login')
  }
}
</script>

<style>
.cart{
  height: 100px;
  display: flex;
  flex-direction: row;
}

</style>
