<template>
  <div id="cart">
    <section class="form my-4 mx-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <img src="https://sole-u.com/wp-content/uploads/2015/01/nike-bhm-2015-collection-unveiled-37.jpg" class="image-fluid">
          </div>
          <div class="col-lg-7 px-5 pt-5">
            <FormLogin v-if="haveAccount" />
            <FormRegister v-else-if="!haveAccount" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import FormLogin from '../components/FormLogin'
import FormRegister from '../components/FormRegister'
import { mapState } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
    }
  },
  components: {
    FormLogin,
    FormRegister
  },
  computed: {
    ...mapState([
      'haveAccount'
    ])
  }
}
</script>

<style scoped>
#cart {
  display: flex;
  justify-content: center;
}
img {
  border-radius: 30px;
  width: 100%;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.row {
  /* background-color: grey; */
  border-radius: 30px;
  box-shadow: 12px 12px 22px grey;
}
</style>
