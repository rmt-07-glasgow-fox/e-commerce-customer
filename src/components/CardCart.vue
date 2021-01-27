<template>
  <div class="card mb-3 shadow-lg" style="max-width: 100%">
    <div class="row g-0 p-2">
      <div class="col-md-4">
        <img
          :src="baseURL + cart.Product.image_url"
          alt="..."
          class="card-img"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title">{{ cart.Product.name }}</h4>
          <h6 class="card-title">Total : {{ cart.totalPrice }}</h6>
          <small class="text-muted">price : {{ cart.Product.price }}/pcs</small>
          <div class="my-2">
            <form @submit.prevent="updateCart">
              Quantity :
              <button
                @click="plus"
                type="button"
                class="btn btn-sm btn-primary rounded-circle mx-2"
              >
                +
              </button>
              {{ cart.quantity }}
              <button
                @click="minus"
                type="button"
                class="btn btn-sm btn-danger rounded-circle mx-2"
              >
                -
              </button>
              <button type="submit" class="btn btn-warning mx-2">
                <b-icon icon="arrow-clockwise" /> update
              </button>
              <button type="button" class="btn btn-dark">
                <b-icon icon="trash-fill" /> delete
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["cart"],
  computed: { ...mapState(["baseURL"]) },
};
</script>

<style scoped>
.card,
.btn {
  border-radius: 20px;
}
</style>
