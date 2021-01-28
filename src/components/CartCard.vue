<template>
  <div class="row">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-4">
          <img :src="item.Product.image_url" alt="..." style="height: 200px;">
        </div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title text-center">{{ item.Product.name }}</h5>
            <p class="card-text">{{ item.Product.price.toLocaleString('id', { style: 'currency', currency: 'IDR' }) }} @each</p>
          </div>
          <div class="card-footer">
            <img src="../assets/icon/minus.png" alt="minus" style="width: 20px" @click="patchCart('-1')">
            <p>{{ item.quantity }}</p>
            <img src="../assets/icon/plus.png" alt="plus" style="width: 20px" @click="patchCart('1')">
            <img src="../assets/icon/delete.png" alt="del" style="width: 20px" @click="del">
          </div>
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
    patchCart (change) {
      this.$store.dispatch('patchCart', { change, ProductId: this.item.ProductId })
        .then(({ data }) => {
          console.log(data)
          this.$store.dispatch('fetchCart')
        })
        .catch(err => console.log(err))
    },
    del () {
      this.$store.dispatch('del', this.item.id)
        .then(({ data }) => {
          console.log(data)
          this.$router.push('/cart')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
