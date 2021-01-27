<template>
  <div class="container bg-dark mt-4 rounded"
  style="height: 640px; width: 1600px;">
    <div v-if="allOrderState.length === 0">
      <h3 class="pt-5 text-light">Your Cart is Empty</h3>
      <h4 class="py-3 text-light">Add some item first</h4>
      <button @click.prevent="toHome" class="btn btn-light">Game List</button>
    </div>

    <div v-if="allOrderState.length !== 0" class="container mt-4">
      <h1 class="text-light pt-3">Your Cart</h1>
      <div class="row justify-content-around m-3 ">
        <!-- Left Side -->
        <div class="col-6 bg-light rounded scrollY" style="height: 500px;">
          <h4 class="my-2">Item List</h4>
          <div class="scrollY">
            <OrderCard
              v-for="order in allOrderState"
              :key="order.id"
              :order="order"
            />
          </div>
        </div>
        <!-- Left Side -->

        <!-- Right Side -->
        <div class="col-5 bg-light rounded" style="height: 300px;">
          <h4 class="my-2">Checkout:</h4>
          <div>
            <CheckoutCard
              :allOrderState="allOrderState"
            />
          </div>
        </div>
        <!-- Right Side -->
      </div>
    </div>

  </div>
</template>

<script>
import OrderCard from '@/components/OrderCard'
import CheckoutCard from '@/components/CheckoutCard'

export default {
  name: 'MyCart',
  methods: {
    toHome () {
      this.$router.push('/')
    },
    getAllOrder () {
      this.$store.dispatch('getAllOrder')
    }
  },
  components: {
    OrderCard,
    CheckoutCard
  },
  computed: {
    allOrderState () {
      return this.$store.state.allOrder
    }
  },
  created () {
    this.$store.dispatch('getAllOrder')
    this.getAllOrder()
  },
  mounted () {
    this.$store.dispatch('getAllOrder')
  }
}
</script>

<style>
.scrollY {
  overflow-y:auto;
}
</style>
