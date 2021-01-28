<template>
  <div>
    <div class="bg-light rounded d-flex flex-column">
            <div class="p-2 d-flex">
                <div class="col-8">{{carts.Product.name}}</div>
                <div class="ml-auto">{{carts.quantity * carts.Product.price}}</div>
            </div>
            <div class="border-top px-4 mx-3"></div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'CardTotalCart',
  data () {
    return {
      total: []
    }
  },
  props: ['carts'],
  methods: {
    totalPrice () {
      console.log(this.total)
    }
  },
  computed: {
  },
  created () {
    this.total.push(this.carts.Product.price * this.carts.quantity)
    console.log(this.total, '>>>>> cardTotal')
  }
}
</script>

<style>

</style>
