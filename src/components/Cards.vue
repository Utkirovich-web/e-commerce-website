<template>
  <div :class="wrapperClass" ref="carouselRef">
    <Card
      v-for="product in displayedProducts"
      :key="product.id"
      :productData="product"
      :disCountShow="props.disCountShow"
      :showAddBtn="props.showAddBtn"
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
import { wishlistData } from "@/store/WishlistStore.js";

const carouselRef = ref(null);
const productsList = ref([]);

const btnPar = ref("View All Products");
const isExpanded = ref(false);

const props = defineProps({
  limitProducts: {
    type: Number,
    default: 0,
  },
  viewAllBtn: {
    type: Boolean,
    default: true,
  },
  showProduct: {
    type: Boolean,
    default: false,
  },
  disCountShow: {
    type: Boolean,
    default: true,
  },
  isWishlistPage: {
    type: Boolean,
    default: false,
  },
  showAddBtn: {
    type: String,
    default: "",
  },
});

const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    productsList.value = data.products;
  } catch (error) {
    console.error(error);
  }
};

fetchData();

const displayedProducts = computed(() => {
  const baseProducts = props.isWishlistPage ? wishlistData : productsList.value;

  if (isExpanded.value) {
    return baseProducts;
  }

  if (props.limitProducts > 0) {
    return baseProducts.slice(0, props.limitProducts);
  }

  return baseProducts;
});

const wrapperClass = computed(() => {
  if (isExpanded.value) return "show";

  return props.showProduct ? "show" : "cards";
});

const showAllProducts = () => {
  isExpanded.value = !isExpanded.value;

  btnPar.value = isExpanded.value ? "Hide All Products" : "View All Products";
};

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
