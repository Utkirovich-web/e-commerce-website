<template>
  <section>
    <div class="wrapper">
      <SectionsName section="This Month" title="Best Selling Products" />
      <button class="view-btn" @click="showAllProducts">{{ btnPar }}</button>
    </div>

    <Cards :limit-products="limitProduct" :view-all-btn="false" :show-product="true" :dis-count-show="false" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import SectionsName from "./SectionsName.vue";
import Cards from "./Cards.vue";

const btnPar = ref("View All");

const limitProduct = ref(true);

const showAllProducts = () => {
  limitProduct.value = !limitProduct.value;

  if (btnPar.value === "View All") {
    btnPar.value = "Hide All";
  } else {
    btnPar.value = "View All";
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 6rem;
}

.view-btn {
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background-color: #db4444;
  padding: 1.6rem 4.8rem;
}
</style>
