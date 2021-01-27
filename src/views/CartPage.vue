<template>
  <div>
    <Navbar></Navbar>
      <button @click.prevent="home" id="backHomeBtn">Home</button>
      <h1 style="margin-top:20px; font-family: 'Pacifico', cursive;">My Cart</h1>
      <div id="cartCardBox" class="col-10" style="margin-left:8%; margin-top: 5%; margin-bottom: 50px;">
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <CartProductCard
          v-for="Cart in allCarts"
          :key="Cart.id"
          :Cart="Cart"
          ></CartProductCard>
        </div>
      </div>
      <div id="checkOut">
        <div id="totalPrice">
          <p style="color: white;"><b> Total Price: {{ totalPrice | currency}}</b></p>
        </div>
        <div id="checkOutBtn">
          <button @click.prevent="checkOut"><b>checkout</b></button>
        </div>
      </div>
  </div>
</template>

<script>
import CartProductCard from '../components/CartProductCard'
import Navbar from '../components/Navbar'

export default {
  data () {
    return {
    }
  },
  components: {
    CartProductCard,
    Navbar
  },
  methods: {
    fetchCart () {
      this.$store.dispatch('fetchCart')
    },
    home () {
      this.$router.push({ path: '/' })
    },
    checkOut () {
      const addHistory = []
      for (let i = 0; i < this.allCarts.length; i++) {
        addHistory.push({
          ProductId: this.allCarts[i].ProductId,
          total: this.allCarts[i].total,
          allCartId: this.allCarts[i].id
        })
      }
      this.$store.dispatch('addHistory', addHistory)
    }
  },
  computed: {
    allCarts () {
      return this.$store.state.carts
    },
    totalPrice () {
      let price = 0
      for (let i = 0; i < this.allCarts.length; i++) {
        price += (this.allCarts[i].Product.price * this.allCarts[i].total)
      }
      return price
    }
  },
  created () {
    this.fetchCart()
  }
}
</script>

<style>
  #backHomeBtn {
    margin-top: 80px;
    outline: none;
    border: 0;
    width: 100px;
    height: 40px;
    transition: 0.5s;
  }
  #backHomeBtn:hover {
    transition: 0.5s;
    background-color: black;
    color: white;
  }
  #checkOut {
    width: 600px;
    height: 50px;
    background-color: #050517;
    margin-bottom: 20px;
    margin-left: 28%;
    display: flex;
    border-radius: 5px;
  }
  #totalPrice {
    width: 400px;
    height: 30px;
    color: white;
    margin-left: 10%;
    margin-top: 10px;
    color: black;
    border-radius: 5px;
  }
  #checkOutBtn {
    margin-left: 20%;
    margin-right: 10%;
    margin-top: 10px;
  }
  #checkOutBtn button{
    width: 150px;
    height: 30px;
    background-color: white;
    color: black;
    border: 0;
    outline: none;
    opacity: 0.7;
    border-radius: 5px;
  }
  #checkOutBtn button:hover {
    opacity: 1;
  }
</style>
