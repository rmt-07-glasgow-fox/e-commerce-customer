<template>
        <!-- loop this card -->
      <div class="card mb-3 col-10 mx-2 p-3" style="width: 95%; background-color: black;">
        <div class="row g-0">
          <div class="col-md-3">
            <img style="max-width: 100px; max-height: 100px;" :src="order.Product.imageUrl" class="card-img-top p-2 pt-4">
          </div>
          <div class="col-md-9 p-0">
            <div class="card-body" style="text-align: start;">
              <h5 class="card-title text-light">{{ order.Product.name }}</h5>
              <p class="card-text text-light m-0 mb-1">Price: {{ rupiahFormat(order.Product.price) }}</p>
              <label for="count" class="text-light smallText">Quantity:</label>
              <input class="mx-2 " style="max-width: 50px"
              v-model="count" type="number" name="count" id="count">
              <button @click.prevent="patchOrder(order.id)" class="btn btn-light btn-sm smallText">Update</button>
              <button @click.prevent="deleteOneOrder(order.id)" class="btn btn-danger btn-sm mx-2">
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- loop this card -->
</template>

<script>
export default {
  name: 'OrderCard',
  props: ['order'],
  data () {
    return {
      count: ''
    }
  },
  methods: {
    patchOrder (id) {
      const payload = {
        id,
        count: this.count
      }
      this.$store.dispatch('changeOrderQty', payload)
    },
    deleteOneOrder (id) {
      this.$store.dispatch('deleteOrder', id)
    },
    rupiahFormat (value) {
      return 'Rp. ' + value.toLocaleString()
    }
  },
  mounted () {
    this.count = this.order.count
  }
}
</script>

<style>
.smallText {
  font-size: smaller;
}
</style>
