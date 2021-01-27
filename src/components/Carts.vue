<template>
  <div class="card mb-3" style="width: 100%; height: 220px">
    <div class="row" style="height: 100%">
      <div class="col-md-4" style="height: 100%">
        <img :src="cart.Product.image_url" class="card-img" alt="edfdf" style="height: 100%; width: 100%; object-fit: contain">
      </div>
      <div class="col-md-4">
        <div class="card-body">
          <h2 class="card-title">{{ cart.Product.name }}</h2>
          <p class="card-text" style="text-align: left">Price: <span style="float: right">Rp {{ cart.Product.price }}</span></p>
          <p class="card-text" style="text-align: left">Quantity: <span style="float: right">{{ cart.quantity }}</span></p>
          <p class="card-text" style="text-align: left">Total Price: <span style="float: right">Rp {{ cart.totalPrice }}</span></p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card-body text-bold">
          <p>Change Quantity</p>
          <form action="#">
            <input type="number"><br><br>
            <button class="btn btn-success">Confirm</button>
          </form>
          <button class="btn btn-danger" style="float: right"><i class="fa fa-trash"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: ['cart']
}
</script>

<style>

</style>
