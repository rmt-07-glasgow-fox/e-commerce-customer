<template>
  <div class="col-3">
    <div class="card">
      <a href="" id="material-card" @click.prevent="toDetail(material.id)">
        <img class="card-img-top" :src="material.image_url" alt="Card image cap" />
        <div class="card-body">
        <h5 class="card-title">{{ material.name }}</h5>
        </div>
        <p id="material-price">Rp. {{ material.price }}</p>
      </a>
    </div>
    </div>
</template>

<script>

export default {
  name: 'MaterialCard',
  props: ['material'],
  methods: {
    toDetail (id) {
      this.$router.push(`/material/${id}`)
    }
  }
}
</script>

<style scoped>
    img {
      height: 200px;
      object-fit: cover;
    }

    .col-3 {
      margin-bottom: 40px;
    }

    .card-body {
      display: flex;
      justify-content: space-evenly;
      align-content: center;
    }

    #material-card {
      text-decoration: none;
    }

    #material-price {
      text-align: center;
    }

    .card {
      background-color: khaki;
    }

    .card-title, #material-price {
      color: black;
    }

</style>
