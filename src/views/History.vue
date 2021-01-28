<template>
  <div class="container-fluit p-5">
    <div class="row">
      <div class="col" v-if="getHistory.length == 0"><h1>Your Your history is empty, Let's Shoping!!!</h1></div>
      <div class="col" v-if="getHistory.length > 0">
        <table class="table table-hover">
          <tbody>
            <tr class="clickable-row" v-for="histories in getHistory" :key="histories.id">
              <td>
                <div class="col ml-2" v-for="cart in histories.Products" :key="cart.id">
                  <img class="card-img-top" :src="cart.imageUrl" style="width:198px; height:198px;" alt="Card image" >
                  <h4 align="left">Name {{ cart.name }}</h4>
                  <div class="dropdown-divider"></div>
                  <h4 align="left">Price {{ cart.price }}</h4>
                  <div class="dropdown-divider"></div>
                  <h4 align="left">Qty {{ cart.CartList.qty }}</h4>
                  <div class="dropdown-divider"></div>
                  <h4 align="left">Total {{ (cart.CartList.qty * cart.price) }}</h4>
                  <div class="dropdown-divider"></div>
                  <h4 align="left">Time {{ cart.updatedAt }}</h4>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  computed: {
    getHistory () {
      return this.$store.state.history
    }
  },
  created: function () {
    if (localStorage.getItem('accesstoken')) {
      this.$store.dispatch('checktoken', localStorage.getItem('accesstoken'))
      this.$store.dispatch('findHistory', localStorage.getItem('accesstoken'))
    }
  }
}
</script>

<style>

</style>
