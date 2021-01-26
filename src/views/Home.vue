<template>
  <div>
    <b-row>
      <b-col>
        <slider />
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="3">
        <b-container>
          <div class="p-4">
            <h1 class="mb-4">Category</h1>
            <b-list-group>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Morbi leo risus</b-list-group-item>
              <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
          </div>
        </b-container>
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

export default {
  components: { Slider },
};
</script>

<style></style>
