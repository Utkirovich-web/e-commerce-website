<template>
  <section>
    <div class="top">
      <div class="primary">
        <SectionsName section="Today's" title="Flash Sales" />
        <div class="timer-wrapper">
          <div>
            <p>Days:</p>
            <span>{{ days.toString().length > 1 ? days : "0" + days }}</span>
          </div>
          <span class="colon">:</span>
          <div>
            <p>Hours:</p>
            <span>{{ hours.toString().length > 1 ? hours : "0" + hours }}</span>
          </div>
          <span class="colon">:</span>
          <div>
            <p>Minutes:</p>
            <span>{{
              minutes.toString().length > 1 ? minutes : "0" + minutes
            }}</span>
          </div>
          <span class="colon">:</span>
          <div>
            <p>Seconds:</p>
            <span>{{
              seconds.toString().length > 1 ? seconds : "0" + seconds
            }}</span>
          </div>
        </div>
      </div>
      <div class="arrow-btns">
        <button @click="prevSlide">
          <img src="@/assets/arrow-left.svg" alt="arrow icon" />
        </button>
        <button @click="nextSlide">
          <img src="@/assets/arrow-right-full.svg" alt="arrow icon" />
        </button>
      </div>
    </div>

    <Cards ref="carouselRef" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import SectionsName from "./SectionsName.vue";
import Cards from "./Cards.vue";

const days = ref(3);
const hours = ref(23);
const minutes = ref(59);
const seconds = ref(56);

let timerId = null;

function timerSimulator() {
  seconds.value--;

  if (seconds.value < 0) {
    seconds.value = 59;
    minutes.value--;

    if (minutes.value < 0) {
      minutes.value = 59;
      hours.value--;

      if (hours.value < 0) {
        hours.value = 23;
        days.value--;
      }
    }
  }

  if (
    days.value === 0 &&
    hours.value === 0 &&
    minutes.value === 0 &&
    seconds.value === 0
  ) {
    clearInterval(timerId);
    console.log("Taymer tugadi!");
  }
}

timerId = setInterval(timerSimulator, 1000);

const carouselRef = ref(null);

function nextSlide() {
  if (carouselRef.value && carouselRef.value.carouselRef) {
    carouselRef.value.carouselRef.scrollLeft += 300;
  }
}

function prevSlide() {
  if (carouselRef.value && carouselRef.value.carouselRef) {
    carouselRef.value.carouselRef.scrollLeft -= 300;
  }
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 4rem;
  .primary {
    display: flex;
    align-items: end;
    gap: 8rem;

    .timer-wrapper {
      display: flex;
      align-items: center;
      gap: 2rem;
      p {
        color: #000;
        font-size: 1.2rem;
        font-weight: 500;
      }

      span {
        color: #000;
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 3rem;
      }

      .colon {
        color: #e07575;
        font-size: 3rem;
      }
    }
  }

  .arrow-btns {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    button {
      border: none;
      border-radius: 50%;
      padding: 1.5rem;
      background-color: #f5f5f5;
      cursor: pointer;

      img {
        display: block;
      }
    }
  }
}
</style>
