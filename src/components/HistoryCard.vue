<template>
  <div class="row mb-4">
      <div class="col-md-5 col-lg-3 col-xl-3">
        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
          <img class="img-fluid w-100"
            :src="checkout.Product.image_url">
        </div>
      </div>
      <div class="col-md-7 col-lg-9 col-xl-9">
        <div>
          <div class="d-flex justify-content-between">
            <div class="mt-5">
              <h5>{{checkout.Product.name}}</h5>
              <p class="mb-3 text-muted text-uppercase small">Quantity: {{checkout.quantity}}</p>
            </div>
          <div class="ml-2 d-flex justify-content-between align-items-center">
            <p class="mb-0"><span><strong>IDR {{checkout.Product.price * checkout.quantity}}</strong></span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryCard',
  props: ['checkout']
}
</script>

<style>

</style>
