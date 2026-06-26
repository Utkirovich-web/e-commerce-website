<template>
  <div class="timer-wrapper">
    <div :class="props.whiteStyle">
      <p>Days:</p>
      <span>{{ days.toString().length > 1 ? days : "0" + days }}</span>
    </div>
    <span v-if="props.colon" class="colon">:</span>
    <div :class="props.whiteStyle">
      <p>Hours:</p>
      <span>{{ hours.toString().length > 1 ? hours : "0" + hours }}</span>
    </div>
    <span v-if="props.colon" class="colon">:</span>
    <div :class="props.whiteStyle">
      <p>Minutes:</p>
      <span>{{ minutes.toString().length > 1 ? minutes : "0" + minutes }}</span>
    </div>
    <span v-if="props.colon" class="colon">:</span>
    <div :class="props.whiteStyle">
      <p>Seconds:</p>
      <span>{{ seconds.toString().length > 1 ? seconds : "0" + seconds }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  whiteStyle: {
    type: String,
    default: "",
  },
  colon: {
    type: Boolean,
    default: true,
  },
});

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
</script>

<style lang="scss" scoped>
.timer-wrapper {
  display: flex;
  align-items: center;
  gap: 2rem;

  .whiteStyle {
    background-color: #fff;
    border-radius: 50%;
    padding: 1.2rem 2rem;
    text-align: center;

    p {
        font: 1rem;
    }

    span {
      font-size: 2.5rem;
    }
  }

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
</style>
