<template>
  <div class="col-12 shadow mb-4">
    <div class="row text-center">
      <div class="col-sm-4 align-self-center"><img width="100%" :src="product.image_url" alt=""></div>
      <div class="col-sm-4 align-self-center">
        <p>
          <b>
            <a class="text-success" @click="detail">{{ product.name }}</a>
          </b><br>
          @Rp. {{price}},-<br>
          Quantity: {{quantity}} pcs<br>
          Warehouse Stock: {{stock}} pcs
        </p>
        <hr>
        <h4>Total: Rp. {{totalprice}},-</h4>
      </div>
      <div class="col-sm-4 align-self-center">
        <input type="number" class="form-control" min="0" :max="product.stock" v-model="product.Cart.quantity">
        <button class="btn mt-2 btn-outline-success" @click="editcart" :disabled="product.Cart.quantity > product.stock">Change Quantity</button>
        <button class="btn mt-2 btn-outline-danger" @click="destroycart">
          <i class="fas fa-trash text-danger mr-1"></i>Delete From Cart
        </button>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>

export default {
  name: 'CardCart',
  props: {
    product: Object
  },
  computed: {
    price () {
      return Number(this.product.price).toLocaleString()
    },
    totalprice () {
      return Number(this.product.Cart.total).toLocaleString()
    },
    quantity () {
      return Number(this.product.Cart.quantity).toLocaleString()
    },
    stock () {
      return Number(this.product.stock).toLocaleString()
    },
    profile () {
      return this.$store.state.profile
    }
  },
  methods: {
    detail () {
      const id = this.product.id
      this.$store.dispatch('GETPRODUCTBYID', { id })
      this.$router.push('/product/' + id).catch(() => { })
    },
    destroycart () {
      const id = this.product.Cart.id
      this.$store.dispatch('DELETECART', { id })
    },
    editcart () {
      const id = this.product.Cart.id
      const quantity = this.product.Cart.quantity
      this.$store.dispatch('EDITCART', { id, quantity })
    }
  }
}
</script>

<style>
a {
  cursor: pointer;
}
</style>
