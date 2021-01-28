<template>
  <mdb-carousel
    :items="9"
    multi
    indicators
    controlls
    slide
    :interval="8000"
    class="mx-auto mt-5"
    style="width: 80%;"
  >
    <template #[i+1] v-for="(img, i) in basic">
      <mdb-card :key="i">
        <img
          :src="img"
          alt="Card image cap"
          height="500px"
          width="50%"
          class="mx-auto"
        />
        <mdb-card-body class="mb-2">
          <mdb-card-title>{{i + 1}}</mdb-card-title>
        </mdb-card-body>
      </mdb-card>
    </template>
  </mdb-carousel>
</template>

<script>
import {
  mdbCarousel,
  mdbCard,
  mdbCardBody
} from 'mdbvue'
export default {
  name: 'CarouselPage',
  components: {
    mdbCarousel,
    mdbCard,
    mdbCardBody
  },
  data () {
    return {
      basic: [
        'https://images-na.ssl-images-amazon.com/images/I/61PNnO40tbL._AC_SL1000_.jpg',
        'https://neveroutgrewtoys.files.wordpress.com/2012/10/figma-loot.jpg',
        'https://ae01.alicdn.com/kf/H0cfa879e92c047189081f24c0c304dcac/Satu-Buah-GK-Action-Figure-KO-BP-Studio-Zoro-Tiga-Gaya-Pedang-Naga-Anime-Figma-Model.jpg',
        'https://joypixel.id/wp-content/uploads/2018/05/Figma-Mainan-Buat-Anime-Lovers-02.-figma-SP001-Haruhi-Suzumiya.jpg',
        'https://joypixel.id/wp-content/uploads/2018/05/figma-anime-figure.jpg',
        'https://i5.walmartimages.com/asr/ab945430-0d5a-44d2-abfd-a6409ac517a6_1.31877dac962caa9aa452b4675be66df1.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
        'https://images-na.ssl-images-amazon.com/images/I/41Yk-FNk6kL._AC_UL600_SR414,600_.jpg',
        'https://m.media-amazon.com/images/I/51G3jCblsDL._AC_SX466_.jpg',
        'https://i.pinimg.com/originals/ba/3f/8c/ba3f8ccf55564278e82d597e732ef7d1.jpg'
      ]
    }
  }
}
</script>

<style>

</style>
