<template>
  <div class="">
    <v-row v-if="transactions.length > 0">
      <TransactionItem v-for="item in transactions" :key="item.id" :item="item"/>
    </v-row>
    <v-row v-else>
      <v-col cols="12" align="center" justify="center">
        NO DATA
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TransactionItem from '@/components/transactions/TransactionItem.vue'
import { mapState } from 'vuex'

export default {
  components: {
    TransactionItem
  },
  computed: {
    ...mapState({
      transactions: state => state.mTransaction.transactions
    })
  },
  created () {
    this.$store.dispatch('fetchTransaction', null, true)
  }
}
</script>

<style>

</style>
