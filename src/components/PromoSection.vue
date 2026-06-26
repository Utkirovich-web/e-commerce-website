<template>
  <section>
    <div class="left">
      <p>Categories</p>
      <h1>Enhance Your Music Experience</h1>
      <TimerSimulator white-style="whiteStyle" :colon="false" />
      <router-link to="#">Buy Now</router-link>
    </div>
    <img src="@/assets/jbl.png" alt="jbl image" />
  </section>
</template>

<script setup>
import TimerSimulator from "./TimerSimulator.vue";
</script>

<style lang="scss" scoped>
section {
  background-color: #000;
  display: flex;
  padding: 7rem 6rem !important;
  margin-bottom: 7rem !important;
  min-height: 70vh;
  img {
    max-width: 40%;
    height: auto;
    flex-shrink: 0;
    object-fit: contain;
  }
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  flex-shrink: 0;
  width: 50%;

  p {
    color: #00ff66;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 600;
  }

  h1 {
    color: #fff;
    font-size: 4.8rem;
    line-height: 6rem;
    font-weight: 600;
  }

  a {
    color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    text-decoration: none;
    padding: 1.6rem 4.8rem;
    background-color: #00ff66;
    border-radius: 0.5rem;
  }
}
</style>
