<template>
<div>
  <navbar/>
    <div class="container text-center">
      <h1 class="mt-4 mb-2">Wishlist</h1>
      <b-table :items="items" :fields="fields">
        <template #cell(productPrice)="data">
          {{ data.item.productPrice.toLocaleString() }}
        </template>
        <template #cell(image)="data">
          <img width="90px" height="90px" :src="data.item.image">
        </template>
        <template #cell(delete)="data">
          <a class="text" href="" @click.prevent="deleteWishlist(data.item.id)"><font-awesome-icon icon="trash"/></a>
        </template>
      </b-table>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  data () {
    return {
      fields: ['productName', 'productPrice', 'image', 'Delete']
    }
  },
  methods: {
    fetchAllWishlist () {
      this.$store.dispatch('getWishlist')
    },
    async deleteWishlist (id) {
      await this.$store.dispatch('deleteWishlist', id)
      this.fetchAllWishlist()
    }
  },
  computed: {
    items () {
      return this.$store.state.wishlist
    }
  },
  created () {
    this.fetchAllWishlist()
  }
}
</script>

<style>

</style>
