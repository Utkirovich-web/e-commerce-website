<template>
  <section>
    <SectionsName section="Our Products" title="Explore Our Products">
      <template #section>Our Products</template>
      <template #title>Explore Our Products</template>
    </SectionsName>
    <Cards
      :limit-products="8"
      :view-all-btn="true"
      :show-product="true"
      :dis-count-show="false"
    />
  </section>
</template>

<script setup>
import Cards from "./Cards.vue";
import SectionsName from "./SectionsName.vue";
</script>

<style lang="scss" scoped></style>
