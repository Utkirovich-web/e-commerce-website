<template>
  <section>
    <div class="rectangle-wrapper">
      <div class="rectangle"></div>
      <p>{{ section }}</p>
    </div>
    <h2>{{ title }}</h2>
  </section>
</template>

<script setup>
defineProps({
  section: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
section {
  .rectangle-wrapper {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2.4rem;
  }
  .rectangle {
    border-radius: 0.5rem;
    background-color: #db4444;
    width: 2rem;
    height: 4rem;
  }

  p {
    color: #db4444;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2rem;
  }

  h2 {
    color: #000;
    font-weight: 600;
    font-size: 3.6rem;
    line-height: 4.8rem;
  }
}
</style>
