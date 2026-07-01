<template>
  <section>
    <div class="wrapper">
      <SectionsName>
        <template #section>This Month</template>
        <template #title>Best Selling Products</template>
        <template #button>
          <button class="view-btn" @click="showAllProducts">
            {{ btnPar }}
          </button>
        </template>
      </SectionsName>
    </div>

    <Cards
      :limit-products="limitProductN"
      :view-all-btn="false"
      :show-product="true"
      :dis-count-show="false"
    />
  </section>
</template>

<script setup>
import { ref } from "vue";
import SectionsName from "./SectionsName.vue";
import Cards from "./Cards.vue";

const btnPar = ref("View All");
const limitProductN = ref(4);

const showAllProducts = () => {
  if (limitProductN.value === 4) {
    limitProductN.value = Infinity;
    btnPar.value = "Hide All";
  } else {
    limitProductN.value = 4;
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
