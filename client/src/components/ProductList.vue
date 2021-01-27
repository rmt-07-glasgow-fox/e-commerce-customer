<template>
  <div class="mt-3 col-md-3 col-sm-6 center">
    <div class="card" style="width: 18rem;">
      <img :src="product.image_url" class="card-img-top" height="160px" width="300px" style="object-fit: cover;">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text small m-0">Rp. {{ rpFormat(product.price) }}</p>
        <p class="card-text small m-0">stock: {{ product.stock }}</p>
        <a @click.prevent="addToCart(product.id)" href="#" class="btn btn-dark tombol"><i class="fas fa-cart-plus"></i> add to cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['product'],
  methods: {
    rpFormat (price) {
      return price.toLocaleString('id-ID')
    },
    addToCart (id) {
      const payload = {
        ProductId: id
      }
      if (localStorage.access_token) {
        this.$store.dispatch('addToCart', payload)
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style>
.center {
  text-align: center;
}
.tombol:hover {
  background: white;
  border: 1px solid;
  color: black;
}
</style>
