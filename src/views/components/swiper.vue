<template>
  <div class="app-container">
    <el-divider>卡片风格</el-divider>
    <swiper :effect="'cards'" :grabCursor="true" :modules="cardModules" class="cardSwiper">
      <swiper-slide v-for="item in 10" :key="item">Slide {{ item }}</swiper-slide>
    </swiper>
    <el-divider>Thumbs gallery loop</el-divider>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="thModules"
      class="thumbSwiper thumbSwiper1"
    >
      <swiper-slide v-for="item in 10" :key="item">
        <img :src="`https://swiperjs.com/demos/images/nature-${item}.jpg`" />
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="thModules"
      class="thumbSwiper thumbSwiper2"
    >
      <swiper-slide v-for="item in 10" :key="item">
        <img :src="`https://swiperjs.com/demos/images/nature-${item}.jpg`" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { EffectCards, FreeMode, Navigation, Thumbs } from 'swiper'
import { reactive, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cards'
//Thumbs
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
let thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
const cardModules = reactive([EffectCards])
const thModules = reactive([FreeMode, Navigation, Thumbs])
</script>
<style lang="scss" scoped>
.cardSwiper {
  width: 240px;
  height: 320px;
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
  }

  .swiper-slide:nth-child(1n) {
    background-color: rgb(206, 17, 17);
  }

  .swiper-slide:nth-child(2n) {
    background-color: rgb(0, 140, 255);
  }

  .swiper-slide:nth-child(3n) {
    background-color: rgb(10, 184, 111);
  }

  .swiper-slide:nth-child(4n) {
    background-color: rgb(211, 122, 7);
  }

  .swiper-slide:nth-child(5n) {
    background-color: rgb(118, 163, 12);
  }

  .swiper-slide:nth-child(6n) {
    background-color: rgb(180, 10, 47);
  }

  .swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
  }

  .swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
  }

  .swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
  }

  .swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
  }
}

.thumbSwiper {
  width: 100%;
  &.thumbSwiper1 {
    height: 300px;
  }

  &.thumbSwiper2 {
    height: 100px;
    box-sizing: border-box;
    padding: 10px 0;
    .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    .swiper-slide-thumb-active {
      opacity: 1;
    }
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    background-size: cover;
    background-position: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
