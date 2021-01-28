<template>
  <div class="card m-2 col-8" style="width: 12rem;">
    <div class="row">
      <div><img class="m-3" :src="cart.Product.image_url" alt="Card image cap" width="150" height="150"></div>
      <div class="card-body" style="">
        <div class="">
          <h4>{{cart.Product.name}}</h4>
          <p class="card-text"><b>Rp {{total.toLocaleString('id-ID')}}</b></p>
          <!-- <p class="text-danger" v-if="quantity > cart.Product.stock">Quantity exceeds stock</p> -->
          <p class="card-text">Quantity: {{quantity}}</p>
          <p class="card-text">Bought at {{cart.updatedAt.slice(0, 10)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swal from 'sweetalert2'

export default {
  name: 'HistoryCard',
  props: ['cart'],
  data () {
    return {
      ProductId: +this.cart.Product.id,
      quantity: +this.cart.quantity,
      total: +this.cart.quantity * this.cart.Product.price,
      date: this.cart.updatedAt.slice(0, 10)
    }
  },
  methods: {},
  watch: {}
}
</script>

<style>
</style>
