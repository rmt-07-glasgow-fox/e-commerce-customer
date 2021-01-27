<template>
  <div class="col-3">
    <div class="card" style="margin-top: 20px; margin-bottom: 20px;" height="300px">
    <img :src="item.Product.image_url" class="card-img-top" height="250px">
    <div class="card-body">
    <h5 class="card-title">{{item.Product.name}}</h5>
    <p class="card-text text-muted">Quantity:
      <a href="#" class=" btn-outline-danger btn-sm" @click.prevent="decrease(item.Product.id)" style="margin-right: 10px; text-decoration: none;">
        -
      </a>{{item.quantity}}
      <a href="#" class="btn-outline-success btn-sm" @click.prevent="increase(item.Product.id)" style="margin-right: 10px; text-decoration: none;">
        +
      </a></p>
    <p class="card-text" >Rp. {{item.Product.price}}</p>
    <div style="text-align: center; padding-left:20px">
      <a
      href="#"
      class="btn btn-outline-danger btn-sm"
      @click.prevent="deleting(item.Product.id)"
      style="padding: 10px; margin-right: 22px; text-decoration: none; border:none">
        <img
          src="../assets/deleted-img.png"
          style="width:25px;">
      </a>
    </div>
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
      this.$store.dispatch('minCart', id)
    },
    increase (id) {
      this.$store.dispatch('plusCart', id)
    },
    deleting (id) {
      this.$store.dispatch('deleteCarts', id)
    }
  }
}
</script>

<style>

</style>
