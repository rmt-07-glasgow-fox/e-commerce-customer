<template>
  <div class="center">
    <h1>CartList</h1>
    <div class="center grid">
      <vs-row justify="center">
        <vs-col w="6">
          <vs-table
            v-model="selected"
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
                <vs-th sort @click="carts = $vs.sortData($event ,carts, 'product')">
                  Product
                </vs-th>
                <vs-th sort @click="carts = $vs.sortData($event ,carts, 'product')">
                  Name
                </vs-th>
                <vs-th sort @click="carts = $vs.sortData($event ,carts, 'price')">
                  Price
                </vs-th>
                <vs-th sort @click="carts = $vs.sortData($event ,carts, 'qty')">
                  Quantity
                </vs-th>
              </vs-tr>
            </template>
            <template #tbody>
              <vs-tr
                :key="i"
                v-for="(tr, i) in $vs.getPage($vs.getSearch(carts, search), page, max)"
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
                      <vs-button flat icon>
                        <i class='bx bx-lock-open-alt' ></i>
                      </vs-button>
                      <vs-button flat icon>
                        Send Email
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
      </vs-row>
    </div>
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
      selected: []
    }
  },
  methods: {
    removeCart (id) {
      this.$store.dispatch('removeCart', id)
    }
  },
  created () {
    this.$store.dispatch('fetchCarts')
  },
  computed: {
    carts () {
      return this.$store.state.carts
    },
    price () {
      // eslint-disable-next-line
      return 'IDR ' + this.product.price.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1\.')
    }
  }
}
</script>

<style>

</style>
