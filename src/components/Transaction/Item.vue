<template>
  <div class="w3-container" id="Stocks" style="margin-top: 75px">
    <h1 class="w3-xxxlarge w3-text-red"><b>Purchase History.</b></h1>
    <hr style="width: 50px; border: 5px solid red" class="w3-round" />
    <table class="table table-image" id="table" >
      <thead id="theader">
        <tr style="background-color: #F44336; color: #FEF6FF">
          <th scope="col">Id</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Equipment</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
        <Table
        v-for="cart in itemTransaction"
        :key="cart.id"
        :cart='cart'
        />
    </table>
  </div>
</template>

<script>
import Table from '@/components/Transaction/Table.vue'

export default {
  name: 'Item',
  components: {
    Table
  },
  computed: {
    itemTransaction () {
      const raw = this.$store.state.userData.itemoncart.filter(el => el.Cart.isBought === true)
      return raw
    }
  }
}
</script>

<style>

</style>
