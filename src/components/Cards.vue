<template>
  <div :class="showProductsAll ? 'show' : 'cards'" ref="carouselRef">
    <Card
      v-for="product in displayedProducts"
      :key="product.id"
      :productData="product"
      :discountShow="props.discountShow"
    />
  </div>
  <button v-if="props.viewAllBtn" class="view-btn" @click="showAllProducts">
    {{ btnPar }}
  </button>
  <div class="line"></div>
</template>

<script setup>
import { ref, computed } from "vue";
import Card from "./Card.vue";

const carouselRef = ref(null);
const productsList = ref([]);

// const showProduct = ref(false);
const btnPar = ref("View All Products");

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

const props = defineProps({
  limitProducts: {
    type: Boolean,
    default: false,
  },
  viewAllBtn: {
    type: Boolean,
    default: true,
  },
  showProduct: {
    type: Boolean,
    default: false,
  },
  discountShow: {
    type: Boolean,
    default: true,
  },
});

const showProductsAll = ref(props.showProduct);

const displayedProducts = computed(() => {
  if (props.limitProducts) {
    return productsList.value.slice(0, 4);
  } else {
    return productsList.value;
  }
});

defineExpose({
  carouselRef,
});

const showAllProducts = () => {
  showProductsAll.value = !showProductsAll.value;

  if (btnPar.value === "View All Products") {
    btnPar.value = "Hide All Products";
  } else {
    btnPar.value = "View All Products";
  }
};
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

.show {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  align-items: center;
  scroll-behavior: smooth;
  margin-bottom: 2rem;
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
