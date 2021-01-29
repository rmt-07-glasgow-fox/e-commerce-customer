<template>
  <div class="center">
    <vs-dialog prevent-close v-model="active">
      <template #header>
        <img src="@/assets/h8logo.png" alt="" width="150">
      </template>
      <h4 class="not-margin">
        Welcome to <b>H8E-commerce</b>
      </h4>
      <div class="con-form">
        <vs-input v-model="email" placeholder="Email">
          <template #icon>
            @
          </template>
        </vs-input>
        <vs-input type="password" v-model="password" placeholder="Password">
          <template #icon>
            <i class='bx bxs-lock'></i>
          </template>
        </vs-input>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click.prevent="register">
            Submit
          </vs-button>

          <div class="new">
            Back to <a @click.prevent="redirectLogin">Sign In</a>
          </div>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      active: true,
      email: '',
      password: '',
      remember: false
    }
  },
  methods: {
    openNotification (position = null, color, icon, title, text) {
      this.$vs.notification({
        icon,
        color,
        position,
        title,
        text
      })
    },
    async register () {
      try {
        const user = {
          email: this.email,
          password: this.password
        }
        await this.$store.dispatch('register', user)
        this.$store.commit('fetchProducts', 'dari register')
        this.email = ''
        this.password = ''
        this.$router.replace('/')
      } catch (error) {
        // eslint-disable-next-line
        this.openNotification('top-center', 'danger', `<i class='bx bxs-bug' ></i>`, 'Error', error)
        // this.$swal.fire({
        //   icon: 'error',
        //   title: 'Oops...',
        //   text: error
        // })
      }
    },
    redirectLogin () {
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="stylus">
  getColor(vsColor, alpha = 1)
      unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
  getVar(var)
      unquote("var(--vs-"+var+")")
  .not-margin
    margin 0px
    font-weight normal
    padding 10px
  .con-form
    width 100%
    .flex
      display flex
      align-items center
      justify-content space-between
      a
        font-size .8rem
        opacity .7
        &:hover
          opacity 1
    .vs-checkbox-label
      font-size .8rem
    .vs-input-content
      margin 10px 0px
      width calc(100%)
      .vs-input
        width 100%
  .footer-dialog
    display flex
    align-items center
    justify-content center
    flex-direction column
    width calc(100%)
    .new
      margin 0px
      margin-top 20px
      padding: 0px
      font-size .7rem
      a
        color getColor('primary') !important
        margin-left 6px
        &:hover
          text-decoration underline
    .vs-button
      margin 0px
    .vs-button
      margin 10px
    i
      margin 2px
      font-size 1.2rem
      transform-origin center
      &.b-r
        transform rotate(90deg)
      &.t-r
        transform rotate(0deg)
      &.t-l
        transform rotate(-90deg)
      &.b-l
        transform rotate(-180deg)
</style>
