<template>
  <div
    class="card p-1 m-1 flex flex-row shadow-sm rounded"
    style="width: 900px"
  >
    <div>
      <img class="" :src="cart.image_url" style="height: 280px; width: 450px" />
        <legend class="shadow-md">{{cart.name}}</legend>
    </div>
    <div class="p-5 flex flex-col justify-center">
      <h4 class="text-gray-900 font-medium"></h4>
      <div class="flex flex-row py-3">
      <p>
        On Stock: {{cart.stock}}
      </p>
      <hr>
      <br>
    <fieldset>
        <input v-if="ableToDecrement" type="button" value="-" :class="decrement"  @click="decrease" />
        <input v-if="!ableToDecrement" type="button" value="-" :class="decrement" @click="decrease"  />
        <input type="text" id="" :value="cart.Cart.quantity" />
        <input v-if="ableToIncrement" type="button" value="+" :class="increment" @click="increase" disabled />
        <input v-if="!ableToIncrement" type="button" value="+" :class="increment"  @click="increase" />
    </fieldset>
      </div>
      <p>
        Price:
      </p>
      {{
        totalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
      }}
      <hr>
      <p id="buttonRemove"  @click="destroy"
        >Remove item from cart</p
      >
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'CartCard',
  props: ['cart'],
  data () {
    return {
      cartInfo: []
    }
  },
  created () {
    this.cartInfo = this.cart.Cart
  },
  computed: {
    update () {
      return this.$store.state.update
    },
    increment () {
      if (this.cartInfo.quantity >= this.cart.stock) {
        return 'bg-secondary disabled'
      } else {
        return ''
      }
    },
    decrement () {
      if (this.cartInfo.quantity > this.cart.stock || this.cartInfo.quantity === 0) {
        return 'bg-secondary disabled'
      } else {
        return ''
      }
    },
    ableToIncrement () {
      return this.cartInfo.quantity >= this.cart.stock
    },
    ableToDecrement () {
      return this.cartInfo.quantity < this.cart.stock
    },
    totalPrice () {
      return this.cartInfo.quantity * this.cart.price
    }
  },
  methods: {
    increase () {
      this.cartInfo.quantity++
      this.$store.dispatch('updateCart', {
        productId: this.cart.Cart.id,
        quantity: this.cartInfo.quantity
      })
    },
    destroy () {
      this.$store.dispatch('destroyCart', this.cart.Cart.id)
    },
    decrease () {
      if (this.cartInfo.quantity === 0 || this.cartInfo.quantity === 1) {
        Swal.fire({
          title: 'Do you want to remove this item instead ?',
          text: 'You wont be able to revert this!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes Remove it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('destroyCart', this.cart.Cart.id)
          }
        })
      } else {
        this.cartInfo.quantity--
        this.$store.dispatch('updateCart', {
          productId: this.cart.Cart.id,
          quantity: this.cartInfo.quantity
        })
      }
    }
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    text-align: center;
}
body {
    background-color: #F4F3F3;
    font: normal 14px/100% Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
    color: #444;
}
form {
    background-color: #fff;
    width: 300px;
    padding: 10px;
    margin: 20px auto;
    -webkit-box-shadow: 0 0 5px rgba(170, 169, 169, .3);
    box-shadow: 0 0 5px rgba(170, 169, 169, .3);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
legend {
    padding-bottom: 14px;
    text-align: left;
}
fieldset {
    margin-bottom: 14px;
    padding-bottom: 14px;
}
fieldset, input[type="button"] {
    border: 0;
}
input[type="button"] {
    background-color: #ED5A48;
    color: #fff;
    cursor: pointer;
    width: 24px;
    height: 24px;
}
input[type="text"] {
    border: 1px solid #F4F3F3;
    height: 22px;
    width: 50px;
}
#buttonRemove:hover {
  cursor: pointer
}

#buttonRemove {
  color: blue;
}
</style>
