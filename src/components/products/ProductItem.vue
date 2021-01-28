<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-2 my-6"
      max-width="190"
      min-width="190"
    >
        <!-- :aspect-ratio="16/9" -->
      <v-img
        height="190"
        :src="product.image_url"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            <v-btn outlined="" color="white" :to="{name: 'Detail Product', params: {id: product.id}}">LOOK</v-btn>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pa-2 pt-4" style="position: relative;">
        <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          small
          right
          top
          @click="addCart(product.id)"
          v-if="product.stock > 0"
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn
          absolute
          right
          top
          hover
          disabled
          x-small
          v-else
          style="margin-top: -25px"
        >
          Out Of Stock
        </v-btn>
        <div class="text-caption text-justify">{{ product.name }}</div>
        <div class="d-flex justify-space-between mt-4 align-center">
          <div class="text-body-2 font-weight-black red--text">Rp. {{ product.price.toLocaleString("id-ID") }}</div>
          <div class="text-caption ml-2">Stock: {{ product.stock }}</div>
        </div>
      </v-card-text>
    </v-card>
  </v-hover>

</template>

<script>
export default {
  props: ['product'],
  methods: {
    addCart (ProductId) {
      localStorage.access_token ? this.$store.dispatch('createCart', { ProductId, quantity: 1 }, true)
        : this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
  }
</style>
