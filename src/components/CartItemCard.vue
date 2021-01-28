<template>
  <div class="row">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{item.Product.name}}</h5>
        <p class="card-text">Price: Rp. {{item.Product.price}}</p>
        <p class="card-text">In stock ({{item.Product.stock}} Items)</p>
        <div class="row">
          <div class="col-md-2 mb-2">
            <input
              v-model="quantity" type="number" min="1" max="10" placeholder="[1-10]"
              class="form-control" width="10%">
          </div>
          <div class="col-md-2 mb-2">
            <button @click.prevent="onUpdate(
              item.id,
              item.Product.price,
              item.quantity
            )" class="btn btn-primary">Update</button>
          </div>
          <div class="col">
            <button @click.prevent="onDelete(
              item.id,
              item.Product.id,
              item.Product.price,
              item.quantity
            )" class="btn btn-outline-danger">Remove From Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItemCard',
  props: ['item'],
  data () {
    return {
      quantity: ''
    }
  },
  methods: {
    onDelete (cartItemId, productId, productPrice, quantity) {
      const payload = {
        CartItemId: cartItemId,
        ProductId: productId,
        ProductPrice: productPrice,
        quantity
      }
      this.$store.dispatch('deleteCartItem', payload)
    },

    onUpdate (cartItemId, productPrice) {
      const payload = {
        CartItemId: cartItemId,
        ProductPrice: productPrice,
        quantity: this.quantity
      }

      this.$store.dispatch('updateTotal', payload)
    },

    quantityValidation () {

    }
  },
  mounted () {
    this.quantity = this.$props.item.quantity
  },
  watch: {
    quantity (val, oldVal) {
      if (Number(val) < 0 || Number(val) > 10) {
        this.quantity = oldVal
      } else {
        this.quantity = val
      }
    }
  }
}
</script>

<style>

</style>
