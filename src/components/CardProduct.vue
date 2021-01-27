<template>
  <div class="col-2">
    <div class="card mx-auto my-2" style="width: 12rem">
      <img
        :src="baseURL + product.image_url"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">Price : {{product.price}}</p>
        <p class="card-text">Stock : {{product.stock}}</p>
      </div>
      <button  class="btn btn-success">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['product'],
  computed: { ...mapState(['baseURL']) }
}
</script>
