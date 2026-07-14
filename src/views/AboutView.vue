<script setup lang="ts">
import About from "@/components/About.vue";
import Roadmap from "@/components/Roadmap.vue";
</script>

<template>
  <div class="about">
    <Roadmap>
      <router-link to="/">Home</router-link>
      <span class="separator">/</span>
      <span class="current">About</span>
    </Roadmap>
    <About />
  </div>
</template>

<style></style>
