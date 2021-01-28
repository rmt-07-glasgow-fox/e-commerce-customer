<template>
  <div class="col-4">
    <div class="card" style="margin: 20px 10px; width:300px">
    <img :src="wish.Product.image_url" class="card-img-left" alt="" height="300px">
    <div class="card-body">
    <h5 class="card-title">{{wish.Product.name}}</h5>
    <p class="card-text" >Rp. {{wish.Product.price}}</p>
    <a href="#" class="btn btn-outline-secondary btn-sm" @click.prevent="hapusWish(wish.Product.id)" style="margin-right: 10px; text-decoration: none; border:none"><img src="../assets/delete.png" style="width:20px;"></a>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WishCard',
  props: ['wish'],
  methods: {
    hapusWish (id) {
      this.$store.dispatch('destroyWish', id)
    }
  }
}
</script>

<style>

</style>
