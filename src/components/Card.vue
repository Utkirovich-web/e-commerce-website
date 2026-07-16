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
          <router-link :to="`/products-details`" class="icon-link">
            <img src="@/assets/eye-icon.svg" alt="eye icon" />
          </router-link>
        </div>
      </div>
      <div>
        <img :src="productData.thumbnail" alt="img" />

        <div :class="props.showAddBtn" class="cart-action-wrapper">
          <div v-if="isInCart" class="quantity-controls">
            <button @click="decreaseQuantity(props.productData)">-</button>
            <span>{{ cartItemQuantity }}</span>
            <button @click="addToCart(props.productData)">+</button>
          </div>

          <button v-else @click="addToCart(props.productData)" class="add-btn">
            Add To Cart
          </button>
        </div>
      </div>
    </div>

    <h2>
      <router-link
        :to="{
          path: '/products-details',
          query: {
            title: productData.title,
            price: productData.price,
            image: productData.thumbnail,
          },
        }"
        class="stretched-link"
      >
        {{ productData.title }}
      </router-link>
    </h2>
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
import { cartData, addToCart, decreaseQuantity } from "@/store/CartStore";

const props = defineProps({
  productData: {
    type: Object,
    required: true,
  },
  disCountShow: {
    type: Boolean,
    required: true,
  },
  showAddBtn: {
    type: String,
    required: false,
  },
});

const isInCart = computed(() => {
  return cartData.some((item) => item.id === props.productData.id);
});

const cartItemQuantity = computed(() => {
  const item = cartData.find((item) => item.id === props.productData.id);
  return item ? item.quantity : 0;
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
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  flex-basis: 250px;
  flex-shrink: 0;
  flex-grow: 1;
  max-width: 320px;

  &:hover {
    .cart-action-wrapper {
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

      button,
      .icon-link {
        position: relative;
        z-index: 3;
        cursor: pointer;
        border: none;
        background: none;
        padding: 0;
        display: inline-flex;
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

  h2 {
    color: #000;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    margin: 0;

    .stretched-link {
      color: inherit;
      text-decoration: none;

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        content: "";
      }
    }
  }

  p {
    color: #db4444;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    margin: 0;

    span {
      color: #000;
      font-weight: 200;
      text-decoration: line-through;
      margin-left: 0.5rem;
    }
  }

  span {
    color: #ffad33;
  }
}

.cart-action-wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  z-index: 3;
}

.cart-action-wrapper.show-add-btn {
  opacity: 1;
  visibility: visible;
}

.add-btn {
  cursor: pointer;
  color: #fff;
  width: 100%;
  border: none;
  background-color: #000;
  padding-block: 1rem;
  font-size: 1.6rem;
  font-weight: 500;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #db4444;
  color: #fff;
  padding-block: 1rem;
  padding-inline: 1.5rem;
  font-size: 1.6rem;
  font-weight: 500;

  button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: bold;
    padding: 0 1rem;
  }
}
</style>
