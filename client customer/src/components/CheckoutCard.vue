<template>
  <div class="container">
      <div class="mb-3 full">
          <div class="pt-4" id="checkout">
              <h5 class="mb-3">TOTAL PAYMENT</h5>
              <h5>Rp. {{ countTotal() }}</h5><br>
              <div id="button">
                 <button type="button" class="checkout" @click.prevent="addHistory">CHECKOUT!</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutCard',
  methods: {
    countTotal () {
      let temp = 0

      for (let i = 0; i < this.carts.length; i++) {
        const cart = this.carts[i]

        temp = temp + (+cart.Material.price * (+cart.quantity))
      }

      return temp
    },
    addHistory () {
      const payload = {
        description: this.carts,
        amount: this.countTotal()
      }
      console.log(payload)
      this.$store.dispatch('addHistory', payload)
      this.$store.dispatch('removeCart')
    }
  },
  computed: {
    carts () {
      return this.$store.state.carts
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
    this.countTotal()
  }
}
</script>

<style scoped>
  #checkout {
    border: 1px solid goldenrod;
    background-color: #eee3a7;
  }

  h5 {
    text-align: center;
  }

  #button {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }

  .checkout {
    background-color: goldenrod;
    color: black;
    border-radius: 10px;
  }
</style>
