<template>
  <div class="input-group my-3">
    <div class="input-group-prepend ">
      <div class="input-group-text bg-fourth">
        <input
          @change="changeStatusCart(cart.id)"
          v-model="status"
          type="checkbox"
          :checked="cart.status"
        />
      </div>
      <div class="card" style="width: 40rem">
        <div class="card-body">
          <b-row>
            <b-col cols="4">
              <img :src="cart.Product.image_url" alt="..." class="img-thumbnail" />
            </b-col>
            <b-col cols="6">
              <h5 class="card-title">{{ cart.Product.name }}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Rp. {{ formatPrice(cart.Product.price) }}
              </h6>
              <label for="">Quantity: </label>
              <div class="input-group w-50 mb-3">
                <span class="input-group-btn">
                  <button
                    @click.prevent="decrementCart(cart.id)"
                    type="button"
                    class="btn btn-danger"
                  >
                    <b-icon icon="dash-circle"></b-icon>
                  </button>
                </span>
                <input
                  type="text"
                  class="form-control input-number"
                  :value="cart.quantity"
                  disabled
                  min="1"
                />
                <span class="input-group-btn">
                  <button
                    @click.prevent="incrementCart(cart.id)"
                    type="button"
                    class="btn btn-primary"
                  >
                    <b-icon icon="plus-circle"></b-icon>
                  </button>
                </span>
              </div>
              <a href="#" @click.prevent="deleteCart(cart.id)" class="card-link text-red"
                ><b-icon icon="trash"></b-icon> Delete</a
              ></b-col
            >
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['index', 'cart'],
  data() {
    return {
      status: this.cart.status,
    };
  },
  methods: {
    formatPrice(value) {
      const val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    async incrementCart(id) {
      await this.$store.dispatch('incrementCart', id);
    },
    async changeStatusCart(id) {
      const payload = {
        id,
        status: this.status,
      };
      await this.$store.dispatch('changeStatusCart', payload);
    },
    async decrementCart(id) {
      await this.$store.dispatch('decrementCart', id);
    },
    async deleteCart(id) {
      this.$swal
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!',
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              await this.$store.dispatch('deleteCart', id);
              this.$swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Cart has been deleted',
              });
            } catch (err) {
              this.$swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err,
              });
            }
          }
        });
    },
  },
};
</script>

<style></style>
