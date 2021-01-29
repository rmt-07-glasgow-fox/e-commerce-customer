<template>
    <div class="d-flex mb-3 card shadow-sm w-75 flex-row">
        <div class="img-container d-flex align-items-center justify-content-center p-2 bg-light">
          <img class="card-img-top img-thumbnail" :src="product.image_url" alt="Card image cap">
        </div>
        <div class="card-body text-left">
            <span style="font-size:28px;">{{product.name}}</span> <br>
            Rp {{price}} @each<br>
            <div class="d-flex mt-2 align-items-center">
              <div class="d-flex justify-content-between w-25">
                <span class=" btn btn-quantity border-secondary bi-dash" @click="minQuantity(product.id)"></span>
                {{cart.quantity}}
                <span class=" btn btn-quantity border-secondary bi-plus" @click="addQuantity(product.id)"></span>
              </div>
              <button class="btn btn-danger ml-5" @click="deleteCart(product.id)">Delete cart</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  props: [
    'cart'
  ],
  methods: {
    findProduct (array) {
      return array.find(el => el.id === this.cart.ProductId)
    },
    priceIDR (number) {
      return number.toLocaleString('id-ID', { currency: 'IDR' })
    },

    ...mapMutations([
      'addQuantity',
      'minQuantity'
    ]),

    ...mapActions([
      'deleteCart'
    ])
  },
  computed: {
    ...mapState([
      'products',
      'carts'
    ]),
    product () {
      return this.findProduct(this.products)
    },
    price () {
      return this.priceIDR(this.product.price)
    }
  },
  watch: {
    'cart.quantity': function (quantity) {
      const { ProductId } = this.cart
      this.$store.dispatch('updateQuantity', { quantity, ProductId })
    }
  }
}
</script>

<style scoped>
  img{
    height: inherit;
    width: auto;
  }
  .img-container{
    width: 200px;
    overflow: hidden;
  }
  .card{
    height: 9em;
  }
  .card-body{
    line-height: 180%;
    font-weight: bolder;
    font-size: 18px;
  }
  .img-thumbnail{
    border: 0;
  }
  .btn.btn-quantity{
    width: 30px;
    height: 30px;
    padding: 0;
  }
</style>
