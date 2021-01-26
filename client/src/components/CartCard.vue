<template>
  <div class="col-4">
    <div class="card" style="margin: 20px 10px; width:300px">
    <img :src="item.Product.image_url" class="card-img-left" alt="" height="300px">
    <div class="card-body">
    <h5 class="card-title">{{item.Product.name}}</h5>
    <p class="card-text text-muted"> Quantity: <a href="#" class=" btn-outline-primary btn-sm" @click.prevent="decrease(item.Product.id)" style="margin-right: 10px; text-decoration: none;">-</a> {{item.quantity}} <a href="#" class="btn-outline-primary btn-sm" @click.prevent="increase(item.Product.id)" style="margin-right: 10px; text-decoration: none;">+</a></p>
    <p class="card-text" >Rp. {{item.Product.price}}</p>
    <a href="#" class="btn btn-outline-secondary btn-sm" @click.prevent="hapus(item.Product.id)" style="margin-right: 10px; text-decoration: none; border:none"><img src="https://www.flaticon.com/svg/vstatic/svg/1345/1345874.svg?token=exp=1611665593~hmac=f116a76b098e8dca08e42c08fb69795e" style="width:20px;"></a>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  props: ['item'],
  methods: {
    decrease (id) {
      this.$store.dispatch('decrease', id)
    },
    increase (id) {
      this.$store.dispatch('increase', id)
    },
    hapus (id) {
      this.$store.dispatch('destroy', id)
    }
  }
}
</script>

<style>

</style>
