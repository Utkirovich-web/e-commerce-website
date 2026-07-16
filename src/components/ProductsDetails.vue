<template>
  <section class="product-details-section">
    <Roadmap>
      <router-link to="/">Home</router-link>
      <span class="separator">/</span>
      <router-link to="#">Gaming</router-link>
      <span class="separator">/</span>
      <span class="current">{{ productName }}</span>
    </Roadmap>

    <div class="product-details-container">
      <div class="product-gallery">
        <div class="thumbnail-list">
          <div
            v-for="(img, idx) in productImages"
            :key="idx"
            class="thumb-item"
            :class="{ active: activeImageIndex === idx }"
            @click="activeImageIndex = idx"
          >
            <img :src="img" alt="thumbnail" />
          </div>
        </div>
        <div class="main-image-wrapper">
          <img :src="productImages[activeImageIndex]" alt="main product" />
        </div>
      </div>

      <div class="product-info-panel">
        <h1 class="product-title">{{ productName }}</h1>

        <div class="rating-reviews">
          <div class="stars">
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star filled">★</span>
            <span class="star">★</span>
          </div>
          <span class="reviews-count">(150 Reviews)</span>
          <span class="divider">|</span>
          <span class="stock-status">In Stock</span>
        </div>

        <div class="product-price">${{ productPrice.toFixed(2) }}</div>

        <p class="product-description">
          PlayStation 5 Controller Features Added Trigger Effect With Three
          Dynamic Levels That Senses Tension. Real-time feedback lets you feel
          every impact.
        </p>

        <div class="line"></div>

        <div class="option-row">
          <span class="option-label">Colours:</span>
          <div class="color-options">
            <button
              v-for="color in colors"
              :key="color"
              :style="{ backgroundColor: color }"
              class="color-dot"
              :class="{ active: selectedColor === color }"
              @click="selectedColor = color"
            ></button>
          </div>
        </div>

        <div class="option-row">
          <span class="option-label">Size:</span>
          <div class="size-options">
            <button
              v-for="size in sizes"
              :key="size"
              class="size-btn"
              :class="{ active: selectedSize === size }"
              @click="selectedSize = size"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <div class="purchase-row">
          <div class="quantity-selector">
            <button class="qty-btn" @click="decrementQty">-</button>
            <span class="qty-num">{{ quantity }}</span>
            <button class="qty-btn plus" @click="incrementQty">+</button>
          </div>
          <button class="buy-btn">Buy Now</button>
          <button class="wishlist-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div class="delivery-features">
          <div class="feature-item">
            <div class="feature-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6667 11.6667H21.6667V21.6667H11.6667V11.6667Z"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21.6667 15H28.3333L31.6667 18.3333V25H21.6667V15Z"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="15"
                  cy="28.3333"
                  r="3.33333"
                  stroke="#000"
                  stroke-width="2"
                />
                <circle
                  cx="25"
                  cy="28.3333"
                  r="3.33333"
                  stroke="#000"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div class="feature-text">
              <h4>Free Delivery</h4>
              <p>Enter your postal code for Delivery Availability</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M20 6V10M20 30V34M6 20H10M30 20H34"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="feature-text">
              <h4>Return Delivery</h4>
              <p>Free 30 Days Delivery Returns. Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import Roadmap from "./Roadmap.vue";

const route = useRoute();

const productName = computed(() => {
  return route.query.title || "Havic HV G-92 Gamepad";
});

const productThumbnail = computed(() => {
  return (
    route.query.image ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ucAqGFVdC68ZnKRc49l8sozcYZL9ZBkQVHHX0MikXQ&s=10"
  );
});

const productPrice = computed(() => {
  return route.query.price ? Number(route.query.price) : 192.0;
});

const props = defineProps({
  productName: {
    type: String,
    default: "Havic HV G-92 Gamepad",
  },
  productPrice: {
    type: Number,
    default: 192.0,
  },
});

const productImages = computed(() => {
  const imgUrl = productThumbnail.value;
  return [imgUrl, imgUrl, imgUrl, imgUrl];
});

const activeImageIndex = ref(0);
const colors = ref(["#A0B1B9", "#E07575"]);
const selectedColor = ref("#A0B1B9");
const sizes = ref(["XS", "S", "M", "L", "XL"]);
const selectedSize = ref("M");
const quantity = ref(1);

const incrementQty = () => {
  quantity.value++;
};

const decrementQty = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};
</script>

<style lang="scss" scoped>
section {
    margin-bottom: 14rem !important;
}

.product-details-container {
  display: grid;
  grid-template-columns: 700px 1fr;
  gap: 70px;
  margin-top: 80px;
}

.product-gallery {
  display: grid;
  grid-template-columns: 170px 1fr;
  gap: 30px;
}

.thumbnail-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.thumb-item {
  background-color: #f5f5f5;
  border-radius: 4px;
  height: 138px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid transparent;
  transition: border-color 0.2s;

  &.active {
    border-color: #db4444;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}

.main-image-wrapper {
  background-color: #f5f5f5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  overflow: hidden;

  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
}

.product-info-panel {
  display: flex;
  flex-direction: column;
}

.product-title {
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.03em;
  color: #000;
  margin-bottom: 16px;
}

.rating-reviews {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  .stars {
    display: flex;
    color: #ffad33;
    font-size: 18px;

    .star {
      opacity: 0.25;
      &.filled {
        opacity: 1;
      }
    }
  }

  .reviews-count {
    font-size: 14px;
    color: #000;
    opacity: 0.5;
  }

  .divider {
    color: #000;
    opacity: 0.5;
  }

  .stock-status {
    font-size: 14px;
    color: #00ff66;
    font-weight: 400;
  }
}

.product-price {
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  color: #000;
  margin-bottom: 24px;
}

.product-description {
  font-size: 14px;
  line-height: 21px;
  color: #000;
  margin-bottom: 24px;
}

.line {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  margin-bottom: 24px;
  width: 100%;
}

.option-row {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
}

.option-label {
  font-family: "Inter", sans-serif;
  font-size: 20px;
  line-height: 20px;
  color: #000;
  min-width: 80px;
}

.color-options {
  display: flex;
  gap: 8px;
}

.color-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  padding: 0;
  outline: none;

  &.active {
    border-color: #000;
    box-shadow: 0 0 0 2px #fff inset;
  }
}

.size-options {
  display: flex;
  gap: 16px;
}

.size-btn {
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  background: transparent;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  transition: all 0.2s;

  &.active {
    background-color: #db4444;
    border-color: #db4444;
    color: #fff;
  }
}

.purchase-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
}

.quantity-selector {
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  overflow: hidden;
  height: 44px;

  .qty-btn {
    border: none;
    background: transparent;
    width: 40px;
    font-size: 20px;
    cursor: pointer;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &.plus {
      background-color: #db4444;
      color: #fff;

      &:hover {
        background-color: #e05858;
      }
    }
  }

  .qty-num {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    color: #000;
    border-left: 1px solid rgba(0, 0, 0, 0.5);
    border-right: 1px solid rgba(0, 0, 0, 0.5);
  }
}

.buy-btn {
  background-color: #db4444;
  color: #fff;
  border: none;
  border-radius: 4px;
  height: 44px;
  padding: 0 48px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #e05858;
  }
}

.wishlist-btn {
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  width: 44px;
  height: 44px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

.delivery-features {
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  overflow: hidden;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;

  &:first-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  .feature-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .feature-text {
    h4 {
      font-size: 16px;
      font-weight: 500;
      color: #000;
      margin-bottom: 8px;
    }

    p {
      font-size: 12px;
      font-weight: 500;
      color: #000;
      margin: 0;
    }
  }
}

@media (max-width: 1200px) {
  .product-details-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .product-gallery {
    grid-template-columns: 1fr;

    .thumbnail-list {
      flex-direction: row;
      overflow-x: auto;
    }

    .thumb-item {
      width: 100px;
      height: 100px;
      flex-shrink: 0;
    }

    .main-image-wrapper {
      height: 350px;
    }
  }

  .purchase-row {
    flex-wrap: wrap;

    .buy-btn {
      width: 100%;
      order: 3;
    }
  }
}
</style>
