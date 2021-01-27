<template>
  <div id="WishlistCard">
    <div class="container-fluid" style="padding: 0">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <!-- card -->
        <div class="col-12 col-sm-6 col-md-6 col-lg-3">
          <div class="card h-100" style="border-radius: 1rem">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/d/dc/Guitar_hero_aerosmith_cover_neutral.jpg"
              class="card-img-top card-img-size"
              style="
                border-top-left-radius: 1rem;
                border-top-right-radius: 1rem;
              "
            />
            <div class="card-body">
              <p
                class="card-text text-muted"
                style="font-weight: 600; margin-bottom: 8px"
              >
                Rhythm
              </p>
              <h5
                class="card-title"
                style="
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  color: #e55c3e;
                "
              >
                Guitar Hero: Aerosmith
              </h5>
              <p class="card-text" style="font-weight: 600; margin-bottom: 4px">
                Rp. 450.000
              </p>
              <p class="card-text" style="font-weight: 600; margin-bottom: 8px">
                250
              </p>

              <div class="btn-group btn-group-sm w-100" role="group">
                <button
                  class="btn btn-outline-primary"
                  style="marign-bottom: 4px; border-top-left-radius: 2.4rem; border-bottom-left-radius: 2.4rem; "
                >
                  <shopping-cart-icon
                    size="1x"
                    style="margin-bottom: 2px; margin-right: 4px;"
                  ></shopping-cart-icon>
                  Add
                </button>
                <button
                  class="btn btn-outline-danger"
                  style="marign-bottom: 4px;border-top-right-radius: 2.4rem; border-bottom-right-radius: 2.4rem; "
                >
                  <heart-icon
                    size="1x"
                    style="margin-bottom: 2px; margin-right: 4px"
                  ></heart-icon>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- card// -->
      </div>
    </div>
  </div>
</template>

<script>
import { ShoppingCartIcon, HeartIcon } from 'vue-feather-icons'

export default {
  name: 'WishlistCard',
  components: {
    ShoppingCartIcon,
    HeartIcon
  }
}
</script>

<style scoped>
.card-img-size {
  height: 45vh;
  max-width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 766) {
  .card-img-size {
    height: 500vh;
  }
}
@media screen and (max-width: 960px) {
  .card-img-size {
    height: 35vh;
  }
}
</style>
