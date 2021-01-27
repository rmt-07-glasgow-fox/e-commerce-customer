<template>
  <div>
    <b-card no-body class="overflow-hidden mt-4" style="width: 100%;">
      <b-row no-gutters>
        <b-col md="3">
          <img :src="pendingUserProduct.Product.image_url" width="150" alt="Image" class="rounded-0">
        </b-col>
        <b-col md="9">
          <b-card-body :title="shortening(pendingUserProduct.Product.name)">
            <b-card-text>
              <strong>{{money}}</strong>
              <div class="w-100 mr-3 d-flex justify-content-between">
              <p class="text-danger">{{ pendingUserProduct.Product.stock }} items remaining</p>
              <div class="d-flex">
                <div class="delete-btn" @click.prevent="deleteUserProduct(pendingUserProduct.id)">
                  <i class="fas fa-trash mr-3 align-middle mt-2" style="font-size: 20px; opacity: 0.8"></i>
                </div>
                <div class="mr-4" style="width: 100px">
                  <b-input-group size="sm" class="mb-2">
                    <b-input-group-prepend is-text class="count-icon"
                      @click.prevent="reduce(pendingUserProduct.Product)">
                      <i class="fas fa-minus"></i>
                    </b-input-group-prepend>
                    <b-form-input aria-label="Large text input with switch"
                      style="text-align: center"
                      v-model="pendingUserProduct.quantity"
                      @blur="checkStock(pendingUserProduct.Product)"></b-form-input>
                    <b-input-group-append is-text class="count-icon"
                      @click.prevent="add(pendingUserProduct.Product)">
                      <i class="fas fa-plus"></i>
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </div>
              </div>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  props: ['pendingUserProduct'],
  data () {
    return {}
  },
  computed: {
    money () {
      const options1 = { style: 'currency', currency: 'IDR' }
      const numberFormat1 = new Intl.NumberFormat('id-ID', options1)
      const string = numberFormat1.format(this.pendingUserProduct.Product.price)
      return string.substring(0, string.length - 3)
    }
  },
  methods: {
    add (product) {
      if (this.pendingUserProduct.quantity >= product.stock) {
        this.pendingUserProduct.quantity = product.stock
      } else {
        this.pendingUserProduct.quantity = this.pendingUserProduct.quantity + 1
        this.$store.dispatch('updateCart', {
          product,
          quantity: 1,
          paymentStatus: 'pending'
        })
      }
    },
    reduce (product) {
      if (this.pendingUserProduct.quantity <= 1) {
        this.pendingUserProduct.quantity = 1
      } else {
        this.pendingUserProduct.quantity = this.pendingUserProduct.quantity - 1
        this.$store.dispatch('updateCart', {
          product,
          quantity: -1,
          paymentStatus: 'pending'
        })
      }
    },
    checkStock (product, currentQty) {
      // const currentQty = this.productQuantity()
      console.log(currentQty)
      console.log(this.pendingUserProduct.quantity)
    },
    shortening (name) {
      if (name.length > 30) return name.substring(0, 30) + '...'
      return name
    },
    deleteUserProduct (id) {
      this.$store.dispatch('deleteUserProduct', id)
    }
  }
}
</script>

<style scoped>
  .count-icon:hover {
    cursor: pointer
  }
  .delete-btn {
    opacity: 0.7;
  }
  .delete-btn:hover {
    opacity: 1;
    cursor: pointer;
  }
</style>
