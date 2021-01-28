<template>
    <router-view/>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['token_nikecommerce']),
    ...mapGetters(['isAuth'])
  }
}
</script>
