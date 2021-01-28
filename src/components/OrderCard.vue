<template>
  <div class="card mb-3 col-10 mx-2 p-3" style="width: 95%;" >
        <div class="row g-0" >
          <div class="col-md-3">
            <img style="max-width: 100px; max-height: 100px;" :src="cart.Product.image_url" class="card-img-top p-2 pt-4">
          </div>
          <div class="col-md-9 p-0">
            <div class="card-body" style="text-align: start;">
              <h5 class="card-title text-dark">{{cart.Product.name}}</h5>
              <p class="card-text text-dark m-0 mb-1">Price: {{rupiahFormat(cart.Product.price)}}</p>
              <p class="card-text text-dark m-0 mb-1">In Your Cart: {{cart.quantity}}</p>
              <label for="quantity" class="text-dark smallText">Quantity:</label>
              <input class="mx-2 " style="max-width: 50px"
              v-model="quantity" type="number" name="quantity" id="quantity">
              <button class="btn btn-dark btn-sm smallText" @click.prevent="orderQti(cart.id)">Update</button>
              <button class="btn btn-danger btn-sm mx-2" @click.prevent="deleteOrder(cart.id)"> Delete Cart</button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'OrderCard',
  props: ['cart'],
  data () {
    return {
      quantity: ''
    }
  },
  methods: {
    orderQti (id) {
      const payload = {
        id,
        quantity: this.quantity
      }
      console.log(this.cart)
      this.$store.dispatch('changeQti', payload)
    },
    deleteOrder (id) {
      this.$store.dispatch('deleteOrder', id)
    },
    rupiahFormat (value) {
      return 'Rp. ' + value.toLocaleString()
    }
  },
  mounted () {
    this.quantity = this.cart.quantity
  }
}
</script>

<style>

</style>
