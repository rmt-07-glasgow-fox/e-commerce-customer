<template>
  <v-card
    class="ma-5 my-2 d-flex align-center justify-center"
    elevation="0"
    width="100%"
  >
    <v-img
      height="100"
      width="100"
      :src="item.Product && item.Product.image_url"
    ></v-img>
    <v-card-text>
      <div class="text-body-1">{{ item.Product && item.Product.name }}</div>
      <div class="text-caption">Stock: {{ item.Product && item.Product.stock }}</div>
    </v-card-text>
    <v-card-text>
      <div class="text-caption">Rp. {{ item.Product && item.Product.price.toLocaleString("id-ID") }}</div>
    </v-card-text>
    <v-card-text class="d-flex align-stretch">
      <vue-numeric-input
        v-model="quantity"
        :min="1"
        :max="item.Product && item.Product.stock"
        :step="1"
        :focus="true"
        @change="updateQty(item.id)"
      ></vue-numeric-input>
      <!-- <button class="d-inline" @click="updateQty(item.id, -1)" :disabled="item.quantity <= 1">-</button> -->
        <!-- <v-btn slot="append" plain>+</v-btn>
      quantity: {{ item.quantity }} -->
      <!-- <button class="d-inline" @click="updateQty(item.id, 1)" :disabled="item.Product && (item.quantity >= item.Product.stock)">+</button> -->
    </v-card-text>
    <button @click="deleteWishlist(item.id)" >REMOVE</button>
  </v-card>
</template>

<script>
import VueNumericInput from 'vue-numeric-input'

export default {
  props: ['item'],
  data () {
    return {
      quantity: this.item.quantity || 1
    }
  },
  components: {
    VueNumericInput
  },
  methods: {
    deleteWishlist (id) {
      this.$store.dispatch('deleteWishlist', id, true)
    },
    updateQty (id) {
      this.$store.dispatch('updateQty', { id, quantity: this.quantity }, true)
    }
  }
}
</script>

<style>

</style>
