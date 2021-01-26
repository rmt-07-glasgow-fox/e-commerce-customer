<template>
    <div class="col-3">
    <div class="card" style="margin-top: 30px; margin-bottom: 10px;">
    <img :src="product.image_url" class="card-img-top" alt="" height="300px">
    <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">Rp.{{product.price}}</p>
    <p class="card-text text-muted"> stock: {{product.stock}}</p>
    <a href="#" class="btn btn-outline-secondary btn-sm-2" @click.prevent="addToCart(product.id)" style="margin-right: 10px; border:none;"><img src="https://www.flaticon.com/svg/vstatic/svg/57/57563.svg?token=exp=1611665779~hmac=2c76045303d57955737e14315d2439ad" style="width:40px;"></a>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product'],
  methods: {
    addToCart (id) {
      const ProductId = id
      this.$store.dispatch('add', ProductId)
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
