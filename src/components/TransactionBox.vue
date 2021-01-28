<template>
  <div class="border p-3" style="width: 280px">
    <pre class="font-weight-bold">PRICE    <span class="text-success">{{ setPrice }}</span></pre>
    <div class="d-flex mt-2">
      <div class="w-50 mr-3">
        <b-input-group size="sm" class="mb-2">
          <b-input-group-prepend is-text class="count-icon"
            @click.prevent="reduce">
            <i class="fas fa-minus"></i>
          </b-input-group-prepend>
          <b-form-input aria-label="Large text input with switch"
            style="text-align: center"
            v-model="counter"
            @blur="checkStock"></b-form-input>
          <b-input-group-append is-text class="count-icon"
            @click.prevent="add">
            <i class="fas fa-plus"></i>
          </b-input-group-append>
        </b-input-group>
      </div>
      <div class="d-flex">
        <span class="m-auto"><span v-if="product.stock > 0">Stock </span><strong>{{ stock }}</strong></span>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-3">
      <span>Subtotal</span>
      <h5><strong>{{ money }}</strong></h5>
    </div>
    <div class="mt-3">
      <button class="btn btn-success mr-2 w-100"
        @click.prevent="addToCart(product)">Add to cart</button>
    </div>
    <div class="mt-2">
      <button class="btn bg-white border-success text-success w-100"
        @click.prevent="buyNow(product)">Buy Now</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransactionBox',
  props: ['product'],
  data () {
    return {
      counter: 1
    }
  },
  computed: {
    stock () {
      if (this.product.stock > 0) return this.product.stock
      return 'Out of stock'
    },
    setPrice () {
      const options1 = { style: 'currency', currency: 'IDR' }
      const numberFormat1 = new Intl.NumberFormat('id-ID', options1)
      const number = numberFormat1.format(this.product.price)
      return number.substring(0, (number.length - 3))
    },
    money () {
      const subtotal = this.product.price * this.counter
      const options1 = { style: 'currency', currency: 'IDR' }
      const numberFormat1 = new Intl.NumberFormat('id-ID', options1)
      const number = numberFormat1.format(subtotal)
      return number.substring(0, (number.length - 3))
    },
    cartItem () {
      return this.$store.state.cartItem
    },
    userProducts () {
      return this.$store.state.userProducts
    }
  },
  methods: {
    add () {
      if (this.counter === this.product.stock) this.counter = this.product.stock
      else this.counter++
    },
    reduce () {
      if (this.counter === 1) this.counter = 1
      else if (this.counter > 1) this.counter--
    },
    checkStock () {
      if (this.product.stock > 0) {
        if (this.counter <= 1) this.counter = 1
        else if (this.counter > this.product.stock) {
          this.counter = this.product.stock
        }
      } else {
        this.counter = 0
      }
    },
    addToCart (product) {
      if (localStorage.access_token) {
        this.counter = +this.counter
        const find = this.userProducts.find(e => e.ProductId === product.id && e.paymentStatus === 'pending')
        let productQuantity
        if (find) {
          productQuantity = product.stock > 0 ? find.quantity : 0
        } else {
          productQuantity = 0
        }

        if (this.counter > 0 && this.counter + productQuantity <= product.stock) {
          this.$store.dispatch('addToCart', {
            product,
            quantity: this.counter,
            paymentStatus: 'pending'
          })
          this.$bvModal.hide('product-detail-' + product.id)
        } else if (this.counter === 0 && productQuantity === 0) {
          console.log('empty product')
        } else {
          console.log('stock exceeded')
        }
      } else {
        this.$router.push('/auth')
      }
    },
    buyNow (product) {
      if (localStorage.access_token) {
        const invoice = (Math.floor(Math.random() * 100000000000000000)).toString()
        if (this.counter > 0) {
          this.$store.dispatch('buyProduct', {
            product,
            quantity: this.counter,
            paymentStatus: 'paid',
            invoice
          })
          this.$store.dispatch('updateStock', {
            id: product.id,
            stock: product.stock - this.counter
          })
          this.$bvModal.hide('product-detail-' + product.id)
        } else {
          console.log('empty product')
        }
      } else {
        this.$router.push('/auth')
      }
    }
  },
  created () {
    if (localStorage.access_token) {
      if (this.product.stock === 0) this.counter = 0
      this.$store.dispatch('fetchUserProducts')
    }
  }
}
</script>

<style scoped>
  .count-icon:hover {
    cursor: pointer
  }
</style>
