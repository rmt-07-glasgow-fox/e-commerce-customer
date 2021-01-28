<template>
<div class="container mt-4 rounded"
  style="height: 640px; width: 1600px; background: #edd3c4">
  <div v-if="orderState.length === 0">
      <img class="pt-5" src="https://cdn.discordapp.com/emojis/670937457281335326.png?v=1" alt="Zero">
      <h3 class=" text-dark">Your Cart is Empty</h3>
      <h4 class=" text-dark">Add some item first</h4>
      <button @click.prevent="toHome" class="btn btn-light">To Home</button>
  </div>

  <div v-if="orderState.length !== 0" class="container mt-4">
    <h1 class="text-dark pt-3"> Your Cart </h1>
    <div class="row justify-content-around m-3 ">
      <div class="col-6 bg-light rounded scrollHide" style="height: 500px;">
        <h4>Item List</h4>
        <div class="scrollHide">
          <OrderCard v-for="cart in orderState" :key="cart.id" :cart="cart"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import OrderCard from '../components/OrderCard.vue'
export default {
  components: { OrderCard },
  name: 'Carts',
  methods: {
    toHome () {
      this.$router.push('/')
    },
    getAllOrder () {
      this.$store.dispatch('getAllOrder')
    }
  },
  computed: {
    orderState () {
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
  .scrollHide {
    overflow-y:auto;
  }
</style>
