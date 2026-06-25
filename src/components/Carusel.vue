<script setup>
import { ref } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

import slide1 from "@/assets/hero-image.png";
import slide2 from "@/assets/iphone-image.jpg";
import slide3 from "@/assets/iphone-image1.jpg";

const slides = ref([
  { image: slide1, title: "Up to 10% off Voucher" },
  { image: slide2, title: "Up to 10% off Voucher" },
  { image: slide3, title: "Up to 10% off Voucher" },
]);

const splideOptions = {
  type: "loop",
  autoplay: true,
  interval: 3000,
  arrows: true,
  pagination: true,
  perPage: 1,
};
</script>

<template>
  <div class="carousel-wrapper">
    <Splide :options="splideOptions" class="hero-carousel">
      <SplideSlide v-for="(slide, index) in slides" :key="index">
        <div class="carousel__item">
          <img :src="slide.image" alt="slide image" class="slide-img" />
          <div class="slide-content">
            <p class="slide-title">{{ slide.title }}</p>
            <router-link to="#" class="slide-btn">Shop Now &#8594;</router-link>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  width: 100%;
  /* padding: 20px 0; */
}
.hero-carousel {
  border-radius: 8px;
  overflow: hidden;
}
.carousel__item {
  position: relative;
  width: 100%;
  height: 450px;
}
.slide-img {
  width: 100%;
  height: 100%;
}
.slide-content {
  position: absolute;
  bottom: 60px;
  left: 60px;
  text-align: left;
  background: rgba(0, 0, 0, 0.5);
  padding: 24px;
  border-radius: 8px;
  backdrop-filter: blur(6px);
  max-width: 450px;
  z-index: 5;
}
.slide-title {
  color: #fff;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 16px;
  line-height: 1.3;
}
.slide-btn {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding-bottom: 1rem;
  font-weight: 600;
  border-bottom: 1px solid white;
}
:deep(.splide__arrow) {
    display: none;
}
:deep(.splide__pagination__page.is-active) {
  background: #fff !important;
}
</style>
