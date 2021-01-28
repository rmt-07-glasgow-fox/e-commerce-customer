<template>
  <div class="home">
    <Navbar />
    <div id="slider">
      <section class="section-slide">
        <div class="wrap-slick1 rs2-slick1">
          <div class="slick1">
            <div
              class="item-slick1 bg-overlay1"
              style="background-image: url(images/slide-05.jpg);"
            >
              <div class="container h-full">
                <div class="flex-col-c-m h-full p-t-100 p-b-60 respon5" >
                  <div style="border: solid rgba(90, 90, 90, 0.1); background-color: rgba(0, 0, 0, 0.5); padding: 50px">
                    <span class="ltext-202 txt-center cl0 respon2">
                      Women Collection 2020
                    </span>
                    <h2 class="ltext-104 txt-center cl0 p-t-22 p-b-40 respon1">
                      New arrivals
                    </h2>
                  </div>
                  <br>
                  <div>
                    <a
                      @click.prevent='Login' class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn2 p-lr-15 trans-04"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  methods: {
    Login () {
      this.$router.push('/Products')
    }
  }
}
</script>
