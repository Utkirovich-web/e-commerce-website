<template>
  <section>
    <div class="top">
      <SectionsName section="Categories" title="Browse By Category" />
      <div class="arrow-btns">
        <button @click="prevSlide">
          <img src="@/assets/arrow-left.svg" alt="arrow icon" />
        </button>
        <button @click="nextSlide">
          <img src="@/assets/arrow-right-full.svg" alt="arrow icon" />
        </button>
      </div>
    </div>

    <div class="bot" ref="carouselRef">
      <div
        class="categories-card"
        v-for="category in categoriesData"
        :key="category"
      >
        <p>
          {{ category.name }}
        </p>
      </div>
    </div>

    <div class="line"></div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import SectionsName from "./SectionsName.vue";

const categoriesData = ref([]);

async function fetchData() {
  try {
    const promise = await fetch("https://dummyjson.com/products/categories");
    const data = await promise.json();
    console.log(data);
    categoriesData.value = data;
  } catch (error) {
    console.error(error);
  }
}

fetchData();

const carouselRef = ref(null);

function nextSlide() {
  if (carouselRef.value) {
    carouselRef.value.scrollLeft += 200;
  }
}

function prevSlide() {
  if (carouselRef.value) {
    carouselRef.value.scrollLeft -= 200;
  }
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 6rem;
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

.bot {
  display: flex;
  gap: 3rem;
  overflow: hidden;
  flex-wrap: nowrap;
  scroll-behavior: smooth;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  .categories-card {
    border: 1px solid #00000031;
    width: 100%;
    max-width: 170px;
    min-height: 145px;
    flex-shrink: 0;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.3s;

    &:hover {
      background-color: #db4444;

      p {
        color: #fff;
      }
    }

    p {
      font-weight: 500;
      line-height: 2.4rem;
      font-size: 1.6rem;
      color: #000;
    }
  }
}

.line {
  border: 1px solid #00000054;
  margin-block: 7rem;
}
</style>
