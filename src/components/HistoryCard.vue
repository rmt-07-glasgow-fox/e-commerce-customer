<template>
      <div id="checkoutCard" class="flex justify-between items-center pt-6 mt-6 border-t">
      <div class="flex items-center">
        <img :src="history.Product.url" width="80">
          <div class="flex flex-col ml-6">
            <span class="text-md font-medium w-auto">{{ history.Product.name }}</span>
          </div>
      </div>
      <div class="flex justify-center items-center">
          <div class="pr-8 flex">
            <span>amount: {{ history.amount }}</span>
          </div>
          <div class="pr-8"> <span class="text-xs font-medium">IDR{{history.totalPrice}}</span> </div>
          <div><button
          @click.prevent="deleteHistory"
          class="p-2 bg-black text-sm text-white rounded font-semibold">delete history</button></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryCard',
  props: ['history'],
  methods: {
    deleteHistory () {
      this.$store.dispatch('deleteCart', this.history.id).catch(err => {
        err.response.data = Array.isArray(err.response.data) ? err.response.data[0] : err.response.data
        this.$swal({
          icon: 'warning',
          text: err.response.data.message
        })
      })
    }
  }
}
</script>

<style>

</style>
