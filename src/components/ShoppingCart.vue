<template>
    <div class="col">
        <div class="card" style="width: 18rem;">
        <img :src="dataCart.image_url" class="card-img-top" alt="...">
            <div class="pt-3 mb-3">
            <p class="card-title">{{dataCart.name}}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Total Price: Rp.{{dataCart.totalPrice}}</li>
            <li class="list-group-item">Quantity: {{dataCart.quantity}}</li>
            <li class="list-group-item">Category: {{dataCart.category}}</li>
            </ul>
            <div class="card-body">
                <a href="#" @click.prevent="editItem(dataCart.id)" class="card-link">Edit</a>
                <a href="#" class="card-link" @click.prevent="deleteItem(dataCart.id)">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['dataCart'],
  methods: {
    editItem (id) {
      this.$store.commit('SET_ITEM', this.dataCart)
      this.$router.push({ path: `/edit/${id}` })
    },
    deleteItem (id) {
      const payload = {
        id
      }
      this.$store.dispatch('deleteItem', payload)
    }
  }
}
</script>

<style>

</style>
