<template>
  <v-card
    class="ma-5 my-2 d-flex align-center justify-center"
    elevation="0"
    width="100%"
  >
    <v-img
      height="100"
      width="100"
      :src="item.image_url"
    ></v-img>
    <v-card-text>
      <div class="text-body-1">{{ item.name }}</div>
      <div class="text-caption">Rp. {{ item.price.toLocaleString("id-ID") }}</div>
    </v-card-text>
    <v-card-text>
      <div class="text-body-2">{{ new Date(item.createdAt).toString().slice(0, 25) }}</div>
    </v-card-text>
    <v-card-text>
      <div class="text-body-2">Quantity: {{ item.quantity }}</div>
    </v-card-text>
    <v-card-text>
      <div class="text-body-2">Rp. {{ item.total.toLocaleString("id-ID") }}</div>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  props: ['item'],
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<style>

</style>
