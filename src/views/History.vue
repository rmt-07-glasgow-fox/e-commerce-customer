<template>
  <div class="container-fluit p-5">
    <div class="row">
      <div class="col" v-if="carts.length == 0"><h1>Your Your history is empty, Let's Shoping!!!</h1></div>
      <div class="col" v-if="carts.length > 0">
        <table class="table table-hover">
          <tbody>
            <tr class="clickable-row" v-for="cart in carts" :key="cart.id">
              <td><img class="card-img-top" :src="cart.imageUrl" style="width:198px; height:198px;" alt="Card image"
                  data-toggle="modal" data-target="#modalEdit" @click="findOne(cart.id, cart.CartList.qty, cart.CartList.CartId)"></td>
              <td>
                <div class="col ml-2">
                  <h4 align="left">Name {{ cart.name }}</h4>
                  <div class="dropdown-divider"></div>
                  <h4 align="left">Price {{ cart.price }}</h4>
                  <!-- <div class="dropdown-divider"></div>
                  <h4 align="left">Stock {{ cart.stock }}</h4> -->
                  <div class="dropdown-divider"></div>
                  <h4 align="left">Qty {{ cart.CartList.qty }}</h4>
                  <div class="dropdown-divider"></div>
                  <h4 align="left">Total {{ (cart.CartList.qty * cart.price) }}</h4>
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

}
</script>

<style>

</style>
