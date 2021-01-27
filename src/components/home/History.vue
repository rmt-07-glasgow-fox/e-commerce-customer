<template>
  <div id="History">
    <div class="container-fluid" style="padding: 0">
      <div class="row row-style">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap justify-content-center pt-3 pb-2 mb-3 border-bottom"
        >
          <h1 style="margin-bottom: 0; font-size: 36px">History</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <router-link to="/">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                style="border-radius: 2.4em; margin-top: 6px"
              >
                Home
              </button>
            </router-link>
          </div>
        </div>

        <history-card />
      </div>
    </div>
  </div>
</template>

<script>
import HistoryCard from './historyPage/HistoryCard.vue'

export default {
  name: 'History',
  components: {
    HistoryCard
  }
}
</script>

<style scoped>
.row-style {
  margin: 0 36px;
}

@media screen and (max-width: 420px) {
  .row-style {
    margin: 0 12px;
  }
}
</style>
