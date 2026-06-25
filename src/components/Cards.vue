<template>
  <div class="cards" ref="carouselRef">
    <Card
      v-for="product in productsList"
      :key="product.id"
      :productData="product"
    />
  </div>
  <button class="view-btn">View All Products</button>
  <div class="line"></div>
</template>

<script setup>
import { ref } from "vue";
import Card from "./Card.vue";

const carouselRef = ref(null);
const productsList = ref([]);

const fetchData = async () => {
  try {
    const promise = await fetch("https://dummyjson.com/products");
    const data = await promise.json();

    productsList.value = data.products;
  } catch (error) {
    console.error(error);
  }
};

fetchData();

defineExpose({
  carouselRef,
});
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  gap: 3rem;
  flex-wrap: nowrap;
  align-items: center;
  scroll-behavior: smooth;
  overflow: hidden;
  overflow-x: auto;
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
      display: none;
    }
}

.view-btn {
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background-color: #db4444;
    padding: 1.8rem 4.8rem;
}

.line {
    border: 1px solid #00000054;
    margin-block: 7rem;
}
</style>
