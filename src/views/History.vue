<template>
  <div class="h-screen bg-white">
    <div class="py-12">
      <div class="mx-auto bg-white shadow-lg max-w-5xl">
        <div class="flex">
          <div class="w-full p-4 px-5 py-5">
            <div>
              <div class="p-5">
                <h1 class="text-xl font-semibold">shopping histories.</h1>
                <history-card
                v-for="history in histories"
                :key="history.id"
                :history="history"></history-card>
                <div
                  class="flex justify-between items-center mt-6 pt-6 border-t"
                >
                  <div class="flex items-center">
                    <i class="fa fa-arrow-left text-sm pr-2"></i>
                    <span role="button" @click.prevent="backShopping" class="text-md font-medium text-gray-500"
                      >continue shopping</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryCard from '../components/HistoryCard'
export default {
  name: 'History',
  computed: {
    histories () {
      return this.$store.state.histories
    }
  },
  components: {
    HistoryCard
  },
  methods: {
    backShopping () {
      this.$router.push('/')
    }
  },
  created () {
    this.$store.dispatch('getCarts')
  },
  beforeRouteEnter (to, from, next) {
    if (!localStorage.access_token && !localStorage.user) {
      next('/')
    } else {
      next()
    }
  }
}
</script>

<style>

</style>
