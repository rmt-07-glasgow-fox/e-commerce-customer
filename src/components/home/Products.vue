<template>
  <b-container>
    <b-row class="main-div">
      <b-col v-for="(product, i) in products" :key="i" cols="4" class="mb-4">
        <b-card
          :title="product.name"
          :sub-title="product.Category.name"
          :img-src="product.image_url"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
        >
          <b-card-text
            ><b-icon icon="cash-stack" aria-hidden="true"></b-icon> Price: Rp.{{
              formatPrice(product.price)
            }}
            <br /><b-icon icon="basket-fill" aria-hidden="true"></b-icon> Stock:
            {{ product.stock }}</b-card-text
          >
          <b-card-text></b-card-text>

          <b-button href="#" class="bg-fourth"
            ><b-icon icon="cart-plus-fill" aria-hidden="true"></b-icon> Add to Cart</b-button
          >
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.filteredProducts;
    },
  },
  methods: {
    formatPrice(value) {
      const val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },
};
</script>

<style></style>
