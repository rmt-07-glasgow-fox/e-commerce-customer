<template>
  <div>
    <div class="navbar navbar-light bg-info">
      <div>
        <router-link to="/home"
        class="btn btn-outline-secondary ml-3"><i class="fas fa-home mr-2"></i>Home</router-link>
        <router-link to="/cart"
        class="btn btn-outline-secondary ml-3"><i class="fas fa-shopping-cart mr-2"></i>Cart</router-link>
        <button
        class="btn btn-outline-secondary ml-3"
        @click.prevent="logout"><i class="fas fa-sign-out-alt mr-2"></i>Logout</button>
      </div>
    </div>
    <div>
      <h1 id="myCart" class="col-2 mt-5"><i class="fab fa-shopify mr-3"></i>My Cart...</h1>
    </div>
    <div id="cartContainer" class="row mt-1">
      <div id="cart" class="col-5">
        <div v-if="carts.length">
          <router-view
          class="card" style="border-radius: 5px;"
          v-for="cart in carts"
          :key="cart.id"
          :cart="cart"/>
        </div>
        <div v-else class="mt-5">
          <h1 class="mb-5">Please Add Product To Cart First</h1>
          <router-link to="/home">Click here to see Product List...</router-link>
        </div>
      </div>
      <div id="total" class="col-5 border">
        <div class="container my-5">
          <h2 class="row ml-5"><i class="fas fa-dollar-sign mr-4"></i>Cart Price :</h2>
          <div class="border row mx-5 py-2 px-4 mt-3">
            <h3 class="">{{ rupiahFormat(totalPrice) }}</h3>
          </div>
          <div>
            <button
            class="btn btn-primary my-3"
            style="width: 80%;"
            @click.prevent="checkout">Checkout</button>
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
  created () {
    this.$store.dispatch('showCart')
  },
  methods: {
    rupiahFormat (number) {
      return number.toLocaleString('id-ID', { currency: 'IDR', style: 'currency' })
    },
    checkout () {
      this.$store.dispatch('checkoutCart', this.carts[0].CartId)
    },
    logout () {
      this.$store.dispatch('logoutUser')
    },
    showHistory () {
      console.log('showHistory')
      this.$router.push('/histories')
      this.$store.dispatch('showHistories')
    }
  },
  computed: {
    ...mapState([
      'carts',
      'totalPrice'
    ])
  }
}
</script>

<style>

#myCart {
  margin: 0 0 0 5em;
}

#cart {
  height: 580px;
  margin: 3em;
  overflow: scroll;
  border: 1px white transparent;
}

#cartContainer {
  margin: 5em 10em;
}

#total {
  margin: 7em auto;
  height: 250px;
}

</style>
