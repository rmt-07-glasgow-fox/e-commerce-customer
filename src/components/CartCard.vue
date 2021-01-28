<template>
    <tr class="table_row">
      <td class="column-1">
        <div class="how-itemcart1">
          <img :src="cart.Product.image_url" alt="IMG" />
        </div>
      </td>
      <td class="column-2">{{ cart.Product.name }}</td>
      <td class="column-3">Rp. {{ (cart.Product.price.toLocaleString()) }}</td>
      <td class="column-4">
        <div class="wrap-num-product flex-w m-l-auto m-r-0">
          <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
            <i @click.prevent="decrement" class="fs-16 zmdi zmdi-minus"></i>
          </div>

          <input
            class="mtext-104 cl3 txt-center num-product"
            type="number"
            name="num-product1"
            :value="cart.quantity"
          />

          <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
            <i @click.prevent="increment" class="fs-16 zmdi zmdi-plus"></i>
          </div>
        </div>
      </td>
      <td class="column-5">Rp. {{ (cart.Product.price * cart.quantity).toLocaleString() }}</td>
      <td >
        <button @click.prevent="deleteCart" class="btn"><i class="fa fa-trash" style="color: red"></i></button>
      </td>
    </tr>
</template>
<script>
export default {
  name: 'CartCard',
  props: ['cart'],
  methods: {
    increment () {
      const data = {
        quantity: this.cart.quantity + 1,
        ProductId: this.cart.Product.id
      }
      this.update(data)
      this.showPrice()
    },
    decrement () {
      if (this.cart.quantity > 1) {
        const data = {
          quantity: this.cart.quantity - 1,
          ProductId: this.cart.ProductId
        }
        this.update(data)
        this.showPrice()
      }
    },
    update (payload) {
      this.$store.dispatch('updateQuantity', payload)
        .then(data => {
          console.log('success')
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    },
    showPrice () {
      const totalPrice = this.cart.Product.price * this.cart.quantity
      this.$store.commit('total', totalPrice)
    },
    deleteCart () {
      const ProductId = this.cart.ProductId
      console.log(ProductId, '<<<<<')

      this.$store.dispatch('deleteCart', ProductId)
        .then(data => {
          this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.showPrice()
  }
}
</script>
