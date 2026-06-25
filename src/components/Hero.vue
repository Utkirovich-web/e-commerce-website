<template>
  <section class="hero-section">
    <div class="left_sec">
      <div class="fashions-menu">
        <div class="fashion">
          Woman's Fashion
          <img :src="ArrowRight" alt="arrow icon" />
        </div>
        <div class="somthing">
          <div>Somthing W1</div>
          <div>Somthing W2</div>
          <div>Somthing W3</div>
        </div>
      </div>

      <div class="fashions-menu">
        <div class="fashion">
          Men’s Fashion
          <img :src="ArrowRight" alt="arrow icon" />
        </div>
        <div class="somthing">
          <div>Somthing M1</div>
          <div>Somthing M2</div>
          <div>Somthing M3</div>
        </div>
      </div>

      <div class="single-item">Electronics</div>
      <div class="single-item">Home & Lifestyle</div>
      <div class="single-item">Medicine</div>
      <div class="single-item">Sports & Outdoor</div>
      <div class="single-item">Baby’s & Toys</div>
      <div class="single-item">Groceries & Pets</div>
      <div class="single-item">Health & Beauty</div>
    </div>

    <div class="carousel-container">
      <Carusel />
    </div>
  </section>
</template>

<script setup>
import ArrowRight from "@/assets/arrow-right.svg";
import Carusel from "./Carusel.vue";
</script>

<style lang="scss" scoped>
.hero-section {
  padding-block: 4rem;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  position: relative;
}

.left_sec {
  border-right: 1px solid #0000004b;
  padding-right: 3rem;
  width: max-content;
  position: relative;

  .fashions-menu,
  .single-item {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    margin-bottom: 1.6rem;
    position: relative;
  }

  .fashion {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    cursor: pointer;
    width: 100%;

    img {
      display: block;
    }
  }

  .somthing {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 100%;
    padding: 2.5rem;
    background-color: #ffffff;
    box-shadow:
      0 15px 35px rgba(0, 0, 0, 0.1),
      0 5px 15px rgba(0, 0, 0, 0.06);
    border-radius: 8px;
    margin-left: 1rem;
    min-width: 220px;
    z-index: 999;
    transition:
      opacity 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
      visibility 0.3s;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -2rem;
      width: 2rem;
      height: 100%;
    }

    div {
      margin-bottom: 1.2rem;
      color: #333;
      cursor: pointer;
      font-size: 1.5rem;
      transition: color 0.2s ease;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        color: #f01919;
      }
    }
  }

  .fashions-menu:hover {
    .somthing {
      opacity: 1;
      visibility: visible;
    }
    .fashion {
      color: #f01919;
    }
  }
}

.carousel-container {
  position: relative;
  z-index: 1;
  padding-left: 2rem;
}
</style>
