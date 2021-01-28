<template>
  <div class="mt-5">
    <b-row class="main-div">
      <b-card class="my-5 w-100">
        <h4>Information</h4>
        <form @submit.prevent="checkout">
          <div class="form-group">
            <label class="text-muted">Address</label
            ><textarea
              class="form-control"
              v-model="address"
              placeholder="Enter Address"
              required
            />
          </div>
          <div class="form-group">
            <label class="text-muted">Phone Number</label
            ><input
              type="tel"
              id="phone"
              name="phone"
              class="form-control"
              v-model="phone"
              placeholder="Enter phone number"
              required
            />
          </div>
          <div class="form-group">
            <label class="text-muted" for="inputCategories">Payment Method:</label>
            <select id="inputCategories" class="form-control" v-model="paymentMethod" required>
              <option :selected="paymentMethod === '0'" value="0"
                >-- Choose a payment method --</option
              >
              <option :selected="paymentMethod === 'Transfer Bank'" value="Transfer Bank"
                >Transfer Bank</option
              >
              <option :selected="paymentMethod === 'Gopay'" value="Gopay">Gopay</option>
              <option :selected="paymentMethod === 'OVO'" value="OVO">OVO</option>
            </select>
          </div>
          <div class="form-group">
            <label class="text-muted">Notes</label
            ><textarea class="form-control" v-model="notes" placeholder="Enter Notes" />
          </div>
          <hr />
          <h4>Shopping summary</h4>
          <b-row class="mt-2">
            <b-col>Total Price ({{ getQty }} qty)</b-col>
            <b-col class="card-subtitle text-muted">Rp. {{ formatPrice(getTotal) }}</b-col>
          </b-row>
          <hr />
          <b-row class="mt-2">
            <b-col> <h4>Grand Total</h4></b-col>
            <b-col class="text-yellow"
              ><h4>Rp. {{ formatPrice(getTotal) }}</h4></b-col
            >
          </b-row>
          <span>I agree to the terms and conditions.</span>
          <b-button :disabled="getQty === 0" type="submit" class="bg-fourth mt-4 text-center w-100"
            ><strong>Checkout</strong></b-button
          >
        </form>
      </b-card></b-row
    >
  </div>
</template>

<script>
export default {
  name: 'CheckoutForm',
  data() {
    return {
      address: '',
      phone: '',
      paymentMethod: '0',
      notes: '',
      total: this.getTotal,
    };
  },
  methods: {
    async checkout() {
      try {
        const payload = {
          address: this.address,
          phone: this.phone,
          paymentMethod: this.paymentMethod,
          notes: this.notes,
          amount: this.getTotal,
        };
        console.log(payload);
        await this.$store.dispatch('checkout', payload);
        this.clearForm();
        this.$router.replace('/orders');
      } catch (err) {
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err,
        });
      }
    },
    clearForm() {
      this.address = '';
      this.phone = '';
      this.paymentMethod = '0';
      this.notes = '';
      this.total = this.getTotal;
    },

    formatPrice(value) {
      const val = (value / 1).toFixed(2).replace('.', ',');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },
  computed: {
    getTotal() {
      let total = 0;
      this.$store.getters.carts.forEach((c) => {
        if (c.status) total += c.Product.price * c.quantity;
      });
      return total;
    },
    getQty() {
      let qty = 0;
      this.$store.getters.carts.forEach((c) => {
        if (c.status) qty += c.quantity;
      });
      return qty;
    },
  },
};
</script>

<style></style>
