<template>
  <div class="card">
    <div class="image-container">
      <div class="discount-wrapper">
        <div class="discount" v-if="props.disCountShow">
          {{ "-" + productData.discountPercentage + "%" }}
        </div>
        <div class="icons-wrapper">
          <button @click="changeWishlist">
            <img :src="wishlistStatus" alt="wishlist icon" />
          </button>
          <router-link to="#">
            <img src="@/assets/eye-icon.svg" alt="eye icon" />
          </router-link>
        </div>
      </div>
      <div>
        <img :src="productData.thumbnail" alt="img" />
        <button class="add-btn">Add To Cart</button>
      </div>
    </div>

    <h2>{{ productData.title }}</h2>
    <p>
      {{ productData.price + "$" }}
      <span>
        {{ oldPrice + "$" }}
      </span>
    </p>
    <span>{{ rating }} {{ "(" + productData.rating + ")" }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import emptyWishlist from "@/assets/Wishlist.svg";
import wishlistRed from "@/assets/wishlist-red-svg.svg";
import { wishlistData, toggleWishlist } from "@/store/WishlistStore";

const props = defineProps({
  productData: {
    type: Object,
    required: true,
  },
  disCountShow: {
    type: Boolean,
    required: true,
  },
});

const wishlistStatus = computed(() => {
  const isExist = wishlistData.some((item) => item.id === props.productData.id);
  return isExist ? wishlistRed : emptyWishlist;
});

const changeWishlist = () => {
  toggleWishlist(props.productData);
};

const rating = computed(() => {
  const currentRating = props.productData.rating;

  if (currentRating >= 4.5) return "★★★★★";
  if (currentRating >= 4.0) return "★★★★☆";
  if (currentRating >= 3.5) return "★★★⯪☆";
  if (currentRating >= 3.0) return "★★★☆☆";
  if (currentRating >= 2.5) return "★★⯪☆☆";
  return "★★☆☆☆";
});

const oldPrice = computed(() => {
  const currentPrice = props.productData.price;
  const discount = props.productData.discountPercentage;

  const calculated = currentPrice / (1 - discount / 100);

  return Math.round(calculated);
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  flex-basis: 250px;
  flex-shrink: 0;
  flex-grow: 1;
  max-width: 320px;

  &:hover {
    .add-btn {
      opacity: 1;
      visibility: visible;
    }
  }

  .image-container {
    position: relative;
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 4px;
    overflow: hidden;

    img {
      width: 100%;
      height: 250px;
      object-fit: contain;
      margin-bottom: 0;
    }
  }

  .discount-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem;
    z-index: 2;

    .icons-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      button {
        cursor: pointer;
        border: none;
        background: none;
        padding: 0;
      }

      img {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: #fff;
        padding: 8px;
      }
    }
  }

  .discount {
    text-align: center;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: #db4444;
    font-size: 1.2rem;
  }

  h2,
  p {
    color: #000;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
  }

  span {
    color: #ffad33;
  }

  p {
    color: #db4444;

    span {
      color: #000;
      font-weight: 200;
      text-decoration: line-through;
      margin-left: 0.5rem;
    }
  }
}

.add-btn {
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  color: #fff;
  width: 100%;
  border: none;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: #000;
  padding-block: 1rem;
  transition: all 0.4s ease;

  font-size: 1.6rem;
  font-weight: 2.4rem;
}
</style>
