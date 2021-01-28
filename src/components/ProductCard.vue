<template>
    <div class="listProduct">
        <b-card
          :title="product.name"
          :img-src="product.image_url"
          :img-alt="product.name"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          v-for="(product) in products"
          :key="product.id" :product="product"
        >
          <b-card-text>
            Price : {{rupiahFormat(product.price)}}
          </b-card-text>
          <b-card-text>
            stock : {{product.stock}}
          </b-card-text>

          <b-button  @click.prevent="addToCart(product.id)" variant="primary">Add To Cart</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    rupiahFormat (value) {
      return 'Rp. ' + value.toLocaleString()
    },
    addToCart (ProductId) {
      if (!localStorage.access_token) {
        this.$router.push('/login')
      } else {
        const payload = {
          quantity: 1,
          ProductId
        }
        this.$store.dispatch('createOrder', payload)
      }
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('getAllProduct')
  }
}
</script>

<style>
  .listProduct {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 750px) {
    .listProduct {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 600px) {
    .listProduct {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
