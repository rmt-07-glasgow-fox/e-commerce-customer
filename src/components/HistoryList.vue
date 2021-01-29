<template>
  <div>
    <div class="row" v-if="histories.length > 0">
      <div class="col-md-9 d-flex flex-column align-items-center">
        <History
          v-for="(history, i) in histories"
          :key="i"
          :history="history"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import History from '../components/History'

export default {
  components: {
    History
  },
  computed: {
    ...mapState([
      'histories'
    ])
  }
}
</script>

<style scoped>
  .checkout{
    padding-left: 20px;
    height: 8em;
    font-size: 20px;
    font-weight: bold;
  }
</style>
