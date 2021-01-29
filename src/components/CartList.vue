<template>
  <div class="center grid">
    <vs-row justify="center">
      <vs-col w="6">
        <vs-table
          v-model="selected"
          :key="carts.length"
          >
          <template #header>
            <vs-input v-model="search" border placeholder="Search" />
          </template>
          <template #thead>
            <vs-tr>
              <vs-th>
                <vs-checkbox
                  :indeterminate="selected.length == carts.length" v-model="allCheck"
                  @change="selected = $vs.checkAll(selected, carts)"
                />
              </vs-th>
              <vs-th >
                Product
              </vs-th>
              <vs-th>
                Name
              </vs-th>
              <vs-th>
                Price
              </vs-th>
              <vs-th>
                Quantity
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getSearch(carts, search)"
              :data="tr"
              :is-selected="!!selected.includes(tr)"
              not-click-selected
              open-expand-only-td
            >
              <vs-td checkbox>
                <vs-checkbox :val="tr" v-model="selected" />
              </vs-td>
              <vs-td>
                <img :src="`${tr.Product.image_url}`" alt="" width="100">
              </vs-td>
              <vs-td>
                {{ tr.Product.name }}
              </vs-td>
              <vs-td>
              {{ 'IDR ' + tr.Product.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1\.') }}
              </vs-td>
              <vs-td>
              {{ tr.qty }}
              </vs-td>

              <template #expand>
                <div class="con-content">
                  <div>
                    <vs-button flat icon @click.prevent="increaseQty(i, tr)">
                      <i class='bx bx-plus' ></i>
                    </vs-button>
                    <vs-button flat icon @click.prevent="decreaseQty(i, tr)">
                      <i class='bx bx-minus' ></i>
                    </vs-button>
                    <vs-button border danger @click.prevent="removeCart(tr.id)">
                      Remove
                    </vs-button>
                  </div>
                </div>
              </template>
            </vs-tr>
          </template>
          <template #footer>
          </template>
        </vs-table>
      </vs-col>
      <vs-col w="3" justify="center" align="center">
        <h1>Total:</h1>
        <p>{{ total }}
          <vs-button icon>
            Checkout
          </vs-button>
        </p>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  data () {
    return {
      editActive: false,
      edit: null,
      editProp: {},
      search: '',
      allCheck: false,
      page: 1,
      max: 5,
      active: 0,
      selected: [],
      update: false
    }
  },
  methods: {
    removeCart (id) {
      this.$swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this cart!!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, remove it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.$swal.fire(
            'Removed!',
            'Your cart has been removed.',
            'success'
          )
          this.$store.dispatch('removeCart', id)
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === this.$swal.DismissReason.cancel) {
          this.$swal.fire(
            'Cancelled',
            'Your cart is safe :)',
            'error'
          )
        }
      })
      this.$store.dispatch('fetchCarts')
    },
    increaseQty (i) {
      this.carts[i].qty += 1
      if (this.carts[i].qty > this.carts[i].Product.stock) {
        this.$swal.fire(
          'Warning',
          'Out of stock!',
          'error'
        )
      } else {
        this.$store.dispatch('updateCart', this.carts[i])
      }
      this.$store.dispatch('fetchCarts')
    },
    decreaseQty (i) {
      this.carts[i].qty -= 1
      if (this.carts[i].qty <= 0) {
        this.removeCart(this.carts[i].id)
      } else {
        this.$store.dispatch('updateCart', this.carts[i])
      }
      this.$store.dispatch('fetchCarts')
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
  },
  computed: {
    total () {
      let total = 0
      for (let i = 0; i < this.selected.length; i++) {
        total += this.selected[i].qty * this.selected[i].Product.price
      }
      // eslint-disable-next-line
      return 'IDR ' + total.toLocaleString('id-ID')
    },
    carts () {
      return this.$store.state.carts
    },
    price () {
      // eslint-disable-next-line
      return 'IDR ' + this.product.price.toLocaleString('id-ID')
    }
  }
}
</script>

<style>

</style>
