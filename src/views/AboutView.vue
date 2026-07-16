<script setup lang="ts">
import About from "@/components/About.vue";
import Roadmap from "@/components/Roadmap.vue";
import StatsSection from "@/components/StatsSection.vue";
import TeamCarusel from "@/components/TeamCarusel.vue";
import TrustBadges from "@/components/TrustBadges.vue";
</script>

<template>
  <div class="about">
    <Roadmap>
      <router-link to="/">Home</router-link>
      <span class="separator">/</span>
      <span class="current">About</span>
    </Roadmap>
    <About />
    <StatsSection />
    <TeamCarusel />
    <TrustBadges />
  </div>
</template>

<style></style>
