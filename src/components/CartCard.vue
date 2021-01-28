<template>
  <div>
    <div class="card">
      <h3>{{ cartItem.Product.name }}</h3>
      <h6>Total Price = {{ getProductPrice }} X {{ quantity }} = {{ getTotalPrice }}</h6>
      <div class="quantity">
        <button v-if="minQty" @click="minus" class="min-btn btn-secondary">-</button>
        <button v-if="!minQty" @click="minus" class="min-btn btn-success">-</button>
        <h5>{{ quantity }}</h5>
        <button v-if="!maxQty" @click="plus" class="plus-btn btn-success">+</button>
        <button v-if="maxQty" @click="plus" class="plus-btn btn-secondary">+</button>
      </div>
      <button @click="removeItem" class="remove-btn">remove item from cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  data () {
    return {
      quantity: 0,
      maxQty: false,
      minQty: false
    }
  },
  props: [
    'cartItem'
  ],
  methods: {
    plus () {
      if (this.quantity < this.cartItem.Product.stock) {
        this.quantity++
        if (this.quantity === this.cartItem.Product.stock) {
          this.maxQty = true
        } else if (this.minQty === true) {
          this.minQty = false
        }
        this.$store.dispatch('addCartQty', { id: this.cartItem.Product.id, quantity: 1 })
      }
    },
    minus () {
      if (this.quantity > 1) {
        this.quantity--
        if (this.quantity === 1) {
          this.minQty = true
        } else if (this.maxQty === true) {
          this.maxQty = false
        }
        this.$store.dispatch('minCartQty', { id: this.cartItem.Product.id, quantity: 1 })
      }
    },
    removeItem () {
      this.$store.dispatch('removeCartItem', { id: this.cartItem.Product.id })
    }
  },
  computed: {
    getProductPrice () {
      let output = 'Rp.'
      output = output + this.cartItem.Product.price.toLocaleString('id-ID')
      return output
    },
    getTotalPrice () {
      let output = 'Rp.'
      const total = this.cartItem.Product.price * this.quantity
      output = output + total.toLocaleString('id-ID')
      return output
    }
  },
  created () {
    this.quantity = this.cartItem.quantity
  }
}
</script>

<style scoped>
  .quantity {
    display: flex;
    justify-content: center;
  }

  h5 {
    padding: 3px 5px;
    margin: 0px;
  }

  .remove-btn {
    border: none;
  }
</style>
