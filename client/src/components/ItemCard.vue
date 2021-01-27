<template>
  <div class="card my-3 mx-2" style="max-width: 15rem; min-width: 3rem;">
    <img :src="product.image_url" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">Stock: {{ product.stock }} Price: {{ product.price }} </p>
      <p class="card-text">Category: {{ product.Category.name }}</p>
      <div class="d-flex justify-content-around">
        <a class="btn" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
          </svg> Cart
        </a>
        <a class="btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-fill" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"/>
          </svg> Buy Now
        </a>
      </div>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          <form @submit.prevent="postCart(product.id)">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingAmount" placeholder="Amount" v-model="amount" required>
              <label for="floatingPassword">Amount</label>
            </div>
            <a class="btn btn-secondary m-1" @click="amount = ''" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Cancel</a>
            <button type="submit" class="btn btn-primary m-1">Add</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../api/axios'
import swal from 'sweetalert'

export default {
  name: 'ItemCard',
  data () {
    return {
      amount: ''
    }
  },
  props: ['product'],
  methods: {
    postCart (id) {
      if (!localStorage.access_token) {
        return this.$router.push({ name: 'Login' })
      }

      axios({
        method: 'post',
        url: '/carts',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          productId: id,
          amount: this.amount
        }
      })
        .then(() => {
          this.$router.push({ name: 'Cart' })
        })
        .catch((err) => {
          if (typeof err.response.data.msg !== 'string') {
            swal(err.response.data.msg.join(', '), '', 'error')
          } else {
            swal(err.response.data.msg, '', 'error')
          }
        })
    }
  }
}
</script>

<style>

</style>
