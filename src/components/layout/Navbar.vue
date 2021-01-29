<template>
  <div id="Navbar" class="sticky-top">
    <!-- navbar -->
    <nav
      class="navbar navbar-light bg-light shadow"
      style="
        height: 56px;
        border-bottom-left-radius: 1.6em;
        border-bottom-right-radius: 1.6em;
      "
    >
      <div class="container-fluid container-style">
        <router-link to="/" class="logo-pc">
          <img src="@/assets/img_logoLineC.svg" height="24" />
        </router-link>
        <router-link to="/" class="logo-mobile">
          <img src="@/assets/img_logoC.svg" height="24" />
        </router-link>

        <!-- v-if="store nya udah login" -->
        <div
          class="d-flex align-items-center justify-content-between"
          style="width: auto"
          v-if="isLogin"
        >
          <router-link to="/wishlist">
            <div>
              <span
                class="badge bg-danger badge-notify"
                v-if="fetchTotalWishlists > 0"
                >{{ fetchTotalWishlists }}</span
              >
              <heart-icon
                class="nav-btn"
                size="1.5x"
                style="margin: auto 8px"
              ></heart-icon>
            </div>
          </router-link>
          <router-link to="/cart">
            <div>
              <span
                class="badge bg-danger badge-notify"
                v-if="fetchTotalCarts > 0"
                >{{ fetchTotalCarts }}</span
              >
              <shopping-cart-icon
                class="nav-btn"
                size="1.5x"
                style="margin: auto 8px"
              ></shopping-cart-icon>
            </div>
          </router-link>
          <router-link to="/history">
            <clock-icon
              class="nav-btn"
              size="1.5x"
              style="margin: auto 8px"
            ></clock-icon
          ></router-link>
          <div class="dropdown">
            <!-- user-info -->
            <div
              class="d-flex user-btn"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              role="button"
            >
              <img
                :src="fetchUserInfo.profpic"
                style="border-radius: 2.5rem"
                width="28"
                height="28"
              />
              <p style="margin: 0 0 0 8px; font-weight: 600" class="nav-name">
                {{ fetchUserInfo.firstname }}
              </p>
            </div>
            <!-- user-info// -->
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              <li>
                <div
                  class="dropdown-item text-center disabled"
                  style="width: inherit"
                >
                  <img
                    :src="fetchUserInfo.profpic"
                    style="border-radius: 2.5rem; margin: 16px auto"
                    width="48"
                    height="48"
                  />
                  <h6 style="margin: 0; font-size: 16px; color: #202124">
                    {{ fetchUserInfo.firstname }} {{ fetchUserInfo.lastname }}
                  </h6>
                  <p style="margin-bottom: 16px">{{ fetchUserInfo.email }}</p>
                </div>
                <div class="text-center">
                  <button
                    class="btn btn-outline-danger btn-sm text-center"
                    style="border-radius: 2.5rem; margin-bottom: 16px"
                    @click="logout"
                  >
                    Logout
                  </button>
                </div>
              </li>
              <div class="nav-drop">
                <li><hr class="dropdown-divider" /></li>
                <router-link to="/wishlist" style="text-decoration: none">
                  <li>
                    <a class="dropdown-item" href="">
                      <heart-icon
                        size="1x"
                        style="margin-right: 8px; margin-bottom: 3px"
                      ></heart-icon
                      >Wishlist</a
                    >
                  </li>
                </router-link>
                <router-link to="/cart" style="text-decoration: none">
                  <li>
                    <a class="dropdown-item" href=""
                      ><shopping-cart-icon
                        size="1x"
                        style="margin-right: 8px; margin-bottom: 3px"
                      ></shopping-cart-icon
                      >Cart</a
                    >
                  </li>
                </router-link>
                <router-link to="/history" style="text-decoration: none">
                  <li>
                    <a class="dropdown-item" href="">
                      <clock-icon
                        size="1x"
                        style="margin-right: 8px; margin-bottom: 3px"
                      ></clock-icon
                      >History</a
                    >
                  </li>
                </router-link>
              </div>
            </ul>
          </div>
        </div>

        <!-- v-if="store nya belom login" -->
        <div
          class="d-flex align-items-center justify-content-between"
          style="width: auto"
          v-if="!isLogin"
        >
          <router-link to="/register">
            <button
              class="btn btn-outline-secondary"
              style="font-weight: 600; color: black; border-radius: 2.5rem"
            >
              Register
            </button>
          </router-link>
          <router-link to="/login">
            <button
              class="btn btn-link"
              style="
                font-weight: 600;
                color: black;
                text-decoration: none;
                border-radius: 2.5rem;
                margin-left: 16px;
              "
            >
              Login
            </button>
          </router-link>
        </div>
      </div>
    </nav>
    <!-- navbar// -->
  </div>
</template>

<script>
import { HeartIcon, ShoppingCartIcon, ClockIcon } from 'vue-feather-icons'
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  props: ['isLogin'],
  components: {
    HeartIcon,
    ShoppingCartIcon,
    ClockIcon
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    ...mapGetters([
      'fetchUserInfo',
      'fetchTotalWishlists',
      'fetchTotalCarts'
    ])
  },
  created () {
    if (localStorage.getItem('access_token')) {
      this.$store.commit('isLogin', true)
      this.$store.dispatch('fetchUserInfo')
      this.$store.dispatch('fetchCarts')
      this.$store.dispatch('fetchWishlists')
    }
  }
}
</script>

<style scoped>
#Navbar {
  background-color: #f7fafc;
}

.shadow {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15) !important;
}

.container-style {
  margin: auto 32px;
}

@media screen and (max-width: 420px) {
  .container-style {
    margin: auto 12px;
  }
}

.logo-mobile {
  display: none;
}
@media screen and (max-width: 570px) {
  .logo-pc {
    display: none;
  }
  .logo-mobile {
    display: block;
  }
}

.user-btn {
  background-color: #eeeeee;
  border-radius: 2.5rem;
  padding: 4px 8px;
  margin-left: 8px;
}
.user-btn:hover {
  background-color: #e6e6e6;
}
.user-btn:active {
  background-color: #d6d6d6;
}
.user-btn:focus-visible {
  background-color: blue;
}

.badge-notify {
  position: absolute;
  top: 9px;
  font-size: 8px;
  border-radius: 2.4em;
  border: 3px #f8f9fa solid;
}

.nav-drop {
  display: none;
}
@media screen and (max-width: 310px) {
  .nav-name {
    display: none;
  }
}
@media screen and (max-width: 520px) {
  .nav-btn {
    display: none;
  }
  .nav-drop {
    display: block;
  }
  .badge-notify {
    display: none;
  }
}
</style>
