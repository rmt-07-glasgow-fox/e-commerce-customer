<template>
  <div>
    <Navbar></Navbar>
    <div class="jumbotron text-center" v-if="cartList.length">
      <h3>Shopping cart</h3>
    </div>
    <div class="container" v-if="!cartList.length">
      <div class="d-flex justify-content-center aligns-item-center flex-column">
        <h1 class="mt-3 mb-3">Your cart is empty</h1>
        <img src="https://static.wixstatic.com/media/7742ef_dfe620d0354b471b8620fcb2c3a46e62~mv2.gif" alt="">
      </div>
    </div>
    <div class="container" v-else>
      <div class="row">
        <div class="col-lg-7">
          <div class="card wish-list mb-3">
            <div class="card-body">
              <h5 class="mb-4">Cart (<span>{{cartList.length}}</span> items)</h5>
                <CartCard v-for="cart in cartList" :key="cart.id" :carts="cart"></CartCard>
            </div>
          </div>
        </div>
         <div class="col-lg-5">
           <div class="card">
           <div class="p-2 ml-3">
                <h4>Order Recap</h4>
            </div>
           <CardTotalCart v-for="cart in cartList" :key="cart.id" :carts="cart" :price="cart.Product.price * cart.quantity"></CardTotalCart>
           <div class="border-top px-4 mx-3"></div>
            <div class="p-2 d-flex pt-3">
                <div class="col-8"><b>Total</b></div>
                <div class="ml-auto"><b class="green">{{price.toLocaleString('en-ID', {style: 'currency', currency: 'IDR'})}}</b></div>
            </div>
            <div class="card-footer">
              <button class="btn btn-outline-primary" @click="checkout">Checkout</button>
            </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartCard from '../components/CartCard.vue'
import Navbar from '../components/Navbar'
import CardTotalCart from '../components/CardTotalCart'
export default {
  name: 'Cart',
  data () {
    return {
      cart: []
    }
  },
  components: {
    Navbar,
    CartCard,
    CardTotalCart
  },
  computed: {
    cartList () {
      return this.$store.state.carts
    },
    price () {
      return this.$store.state.price
    }
  },
  methods: {
    totalPrice () {
      console.log(this.cart)
    },
    checkout () {
      this.$store.dispatch('checkout', this.cartList)
    }
  },
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style>
</style>
