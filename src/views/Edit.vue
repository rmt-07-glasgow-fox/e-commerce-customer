<template>
    <div class="card col-4 mx-auto my-2">
        <h2 class="login-text mt-4">Edit Item Quantity</h2>
        <div class="card-body d-flex flex-row">
            <form class="col-12" @submit.prevent="editItem(item.id)">
                <div class="form-group">
                    <label for="edit-name">Quantity</label>
                    <input class="form-control" type="number" v-model="item.quantity">
                </div>
                <button type="submit" class="btn btn-success buttons container">Edit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    item () {
      return this.$store.state.item
    }
  },
  data () {
    return {
      quantity: ''
    }
  },
  methods: {
    editItem (id) {
      const payload = {
        id,
        quantity: this.item.quantity
      }
      console.log(payload)
      this.$store.dispatch('editItem', payload)
    }
  }
}
</script>

<style>

</style>
