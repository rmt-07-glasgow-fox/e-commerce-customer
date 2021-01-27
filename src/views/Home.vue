<template>
  <div>
    <b-row>
      <b-col>
        <slider />
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col cols="3">
        <categories />
      </b-col>
      <b-col>
        <b-container>
          <b-row class="main-div">
            <b-col cols="4" class="mb-4">
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
              >
                <b-card-text>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col cols="4" class="mb-4">
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
              >
                <b-card-text>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col cols="4" class="mb-4">
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
              >
                <b-card-text>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col cols="4" class="mb-4">
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
              >
                <b-card-text>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col cols="4" class="mb-4">
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
              >
                <b-card-text>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
            <b-col cols="4" class="mb-4">
              <b-card
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
              >
                <b-card-text>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Slider from '../components/home/Slider.vue';
import Categories from '../components/home/Categories.vue';

export default {
  name: 'Home',
  components: { Slider, Categories },
};
</script>

<style></style>
