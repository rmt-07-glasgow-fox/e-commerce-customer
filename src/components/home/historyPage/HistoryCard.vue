<template>
  <div id="HistoryCard">
    <div class="container-fluid" style="padding: 0">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <!-- card -->
        <div
          v-for="History in fetchHistory"
          :key="History.id"
          class="col-12 col-sm-6 col-md-6 col-lg-3"
        >
          <div class="card h-100" style="border-radius: 1rem">
            <img
              :src="History.Product.image_url"
              class="card-img-top card-img-size"
              style="
                border-top-left-radius: 1rem;
                border-top-right-radius: 1rem;
              "
            />
            <div class="card-body">
              <h5
                class="card-title"
                style="
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  color: #e55c3e;
                "
              >
                {{ History.Product.name }}
              </h5>
              <p class="card-text" style="font-weight: 600; margin-bottom: 4px">
                {{ sumFormatter(History) }}
              </p>
              <p class="card-text" style="font-weight: 600; margin-bottom: 4px">
                {{ totalFormatter(History) }}
              </p>
              <p class="card-text" style="font-weight: 600; margin-bottom: 8px">
                {{ History.Product.updatedAt.split("T")[0] }}
              </p>
            </div>
          </div>
        </div>
        <!-- card// -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HistoryCard',
  methods: {
    sumFormatter (payload) {
      if (payload.quantity === 1) return `Rp. ${payload.Product.price.toLocaleString('id')} × ${payload.quantity} item`

      return `Rp. ${payload.Product.price.toLocaleString('id')} × ${payload.quantity} items`
    },
    totalFormatter (payload) {
      const total = payload.Product.price * payload.quantity

      return `Rp. ${total.toLocaleString('id')}`
    }
  },
  computed: {
    ...mapGetters([
      'fetchHistory'
    ])
  },
  created () {
    this.$store.dispatch('fetchCarts')
  }
}
</script>

<style scoped>
.card-img-size {
  height: 45vh;
  max-width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 766) {
  .card-img-size {
    height: 500vh;
  }
}
@media screen and (max-width: 960px) {
  .card-img-size {
    height: 35vh;
  }
}
</style>
