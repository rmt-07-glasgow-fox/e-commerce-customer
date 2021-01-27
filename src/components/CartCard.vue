<template>
    <tr scope="row">
      <td class="align-middle">{{index+1}}</td>
      <td class="align-middle">{{cart.Product.name}}</td>
      <td class="align-middle">{{this.convertedPrice}}</td>
      <td class="align-middle">
        <button @click.prevent="removeQty" class="btn btn-secondary"> - </button>
        {{this.cart.quantity}}
        <button @click.prevent="addQty" class="btn btn-primary"> + </button>
      </td>
    </tr>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'CartCard',
  data () {
    return {
      imgURL: this.cart.Product.image_url,
      currentStock: this.getStock(),
      convertedPrice: this.convert(this.cart.Product.price)
    }
  },
  methods: {
    getStock () {
      if (this.cart.stock === 0) {
        return 'Out of stock'
      } else {
        return `${this.cart.Product.stock}`
      }
    },
    convert (price) {
      return 'Rp. ' + price.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    },
    removeCart () {
      swal({
        title: 'Remove this product?',
        text: 'Product will be removed from cart',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then(yes => {
          if (yes) {
            this.$store.dispatch('removeCart', this.cart.id)
            swal('Product has been removed', {
              icon: 'success'
            })
          }
        })
    },
    addQty () {
      this.$store.dispatch('addQty', this.cart.id)
    },
    removeQty () {
      this.$store.dispatch('removeQty', this.cart.id)
    }
  },
  props: [
    'cart',
    'index'
  ],
  created () {
    this.$store.dispatch('fetchCart')
  }
}
</script>

<style scoped>
.btn {
  width: 40px;
  margin: 0px 20px;
}
</style>
