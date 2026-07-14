<template>
  <div class="checkout-page">
    <Roadmap>
      <router-link to="#">Account</router-link>
      <span class="separator">/</span>
      <router-link to="/account">My Account</router-link>
      <span class="separator">/</span>
      <router-link to="#">Product</router-link>
      <span class="separator">/</span>
      <router-link to="/cart">View Cart</router-link>
      <span class="separator">/</span>
      <span class="current">CheckOut</span>
    </Roadmap>

    <div class="checkout-wrapper">
      <div class="billing-container">
        <h2>Billing Details</h2>

        <form
          class="billing-form"
          id="checkoutForm"
          @submit.prevent="handlePlaceOrder"
        >
          <div class="form-group">
            <label for="firstName"
              >First Name <span class="required">*</span></label
            >
            <input
              type="text"
              id="firstName"
              v-model="form.firstName"
              required
            />
          </div>

          <div class="form-group">
            <label for="companyName">Company Name</label>
            <input type="text" id="companyName" v-model="form.companyName" />
          </div>

          <div class="form-group">
            <label for="streetAddress"
              >Street Address <span class="required">*</span></label
            >
            <input
              type="text"
              id="streetAddress"
              v-model="form.streetAddress"
              required
            />
          </div>

          <div class="form-group">
            <label for="apartment">Apartment, floor, etc. (optional)</label>
            <input type="text" id="apartment" v-model="form.apartment" />
          </div>

          <div class="form-group">
            <label for="city">Town/City <span class="required">*</span></label>
            <input type="text" id="city" v-model="form.city" required />
          </div>

          <div class="form-group">
            <label for="phone"
              >Phone Number <span class="required">*</span></label
            >
            <input type="tel" id="phone" v-model="form.phone" required />
          </div>

          <div class="form-group">
            <label for="email"
              >Email Address <span class="required">*</span></label
            >
            <input type="email" id="email" v-model="form.email" required />
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="saveInfo" v-model="form.saveInfo" />
            <label for="saveInfo"
              >Save this information for faster check-out next time</label
            >
          </div>
        </form>
      </div>

      <div class="cash-wrapper">
        <div class="products-list">
          <div
            v-for="product in visibleProducts"
            :key="product.id"
            class="checkout-product-item"
          >
            <div class="product-left">
              <img :src="product.thumbnail" :alt="product.title" />
              <h2 class="product-title">{{ product.title }}</h2>
            </div>
            <p class="product-price">${{ product.price }}</p>
          </div>
        </div>

        <button
          v-if="cartData.length > 2"
          @click="showAllProducts = !showAllProducts"
          class="see-all-btn"
          type="button"
        >
          {{
            showAllProducts ? "Show Less" : `See All (${cartData.length - 2})`
          }}
        </button>

        <div class="calculation-box">
          <div class="calc-row">
            <span>Subtotal:</span>
            <span>${{ subtotal }}</span>
          </div>
          <div class="calc-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div class="calc-row total-row">
            <span>Total:</span>
            <span>${{ subtotal }}</span>
          </div>
        </div>

        <div class="payment-options">
          <label class="payment-radio">
            <div class="radio-left">
              <input
                type="radio"
                v-model="form.paymentMethod"
                value="bank"
                name="payment"
              />
              <span>Bank</span>
            </div>
            <div class="payment-icons">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Visa_Inc._logo_%281992%E2%80%931999%29.svg/1280px-Visa_Inc._logo_%281992%E2%80%931999%29.svg.png"
                alt="Visa"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                alt="Mastercard"
              />
            </div>
          </label>

          <label class="payment-radio">
            <div class="radio-left">
              <input
                type="radio"
                v-model="form.paymentMethod"
                value="cash"
                name="payment"
              />
              <span>Cash on delivery</span>
            </div>
          </label>
        </div>

        <div class="coupon-box">
          <input type="text" v-model="couponCode" placeholder="Coupon Code" />
          <button type="button" @click="applyCoupon" class="coupon-btn">
            Apply Coupon
          </button>
        </div>

        <button type="submit" form="checkoutForm" class="place-order-btn">
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { cartData } from "@/store/CartStore";
import Roadmap from "./Roadmap.vue";

const showAllProducts = ref(false);
const couponCode = ref("");

const form = ref({
  firstName: "",
  companyName: "",
  streetAddress: "",
  apartment: "",
  city: "",
  phone: "",
  email: "",
  saveInfo: false,
  paymentMethod: "cash",
});

const visibleProducts = computed(() => {
  if (showAllProducts.value) {
    return cartData;
  }
  return cartData.slice(0, 2);
});

const subtotal = computed(() => {
  return cartData.reduce((total, item) => total + item.price, 0);
});

const applyCoupon = () => {
  console.log("Coupon applied:", couponCode.value);
};

const handlePlaceOrder = () => {
  console.log("Order Submitted:", form.value);
};
</script>

<style lang="scss" scoped>
.checkout-page {
  max-width: 1170px;
  margin: 0 auto;
  padding-inline: 2rem;
  font-family: "Poppins", sans-serif;
}

.checkout-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 14rem;
}

.billing-container {
  width: 100%;
  max-width: 470px;

  h2 {
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 4.4rem;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 4.2rem;
  }
}

.billing-form {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;

  label {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #00000080;
    font-weight: 400;

    .required {
      color: #db4444;
    }
  }

  input {
    width: 100%;
    background-color: #f5f5f5;
    border: none;
    border-radius: 4px;
    padding: 1.6rem 2.4rem;
    font-size: 1.6rem;
    color: #000000;
    outline: none;
    box-sizing: border-box;
    transition: background-color 0.2s ease;

    &:focus {
      background-color: #ededed;
    }
  }
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 0.8rem;

  input[type="checkbox"] {
    width: 2.4rem;
    height: 2.4rem;
    accent-color: #db4444;
    cursor: pointer;
  }

  label {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #000000;
    cursor: pointer;
    user-select: none;
  }
}

.cash-wrapper {
  width: 100%;
  max-width: 527px;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding-top: 8.6rem;
}

.products-list {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}

.checkout-product-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .product-left {
    display: flex;
    align-items: center;
    gap: 2.4rem;

    img {
      width: 54px;
      height: 54px;
      object-fit: contain;
    }

    .product-title {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.4rem;
      color: #000;
    }
  }

  .product-price {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    color: #000;
  }
}

.see-all-btn {
  cursor: pointer;
  text-decoration: underline;
  align-self: flex-start;
  border: none;
  background: none;
  color: #db4444;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0;
  margin-top: -1.6rem;

  &:hover {
    color: #b23737;
  }
}

.calculation-box {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  .calc-row {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #000;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid #00000020;
  }

  .total-row {
    border-bottom: none;
    font-weight: 500;
  }
}

.payment-options {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;

  .payment-radio {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;

    .radio-left {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      input[type="radio"] {
        width: 2.4rem;
        height: 2.4rem;
        accent-color: #000;
        cursor: pointer;
      }

      span {
        font-size: 1.6rem;
        color: #000;
      }
    }

    .payment-icons {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      img {
        height: 16px;
        object-fit: contain;
      }
    }
  }
}

.coupon-box {
  display: flex;
  gap: 1.6rem;
  width: 100%;

  input {
    flex: 1;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 1.6rem 2.4rem;
    font-size: 1.6rem;
    outline: none;
    background: transparent;

    &::placeholder {
      color: #00000080;
    }
  }

  .coupon-btn {
    background-color: #db4444;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 1.6rem 4.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #b23737;
    }
  }
}

.place-order-btn {
  background-color: #db4444;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 1.6rem 4.8rem;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #b23737;
  }
}

@media (max-width: 992px) {
  .checkout-wrapper {
    flex-direction: column;
    gap: 6rem;
    align-items: center;
  }

  .billing-container,
  .cash-wrapper {
    max-width: 100%;
  }

  .cash-wrapper {
    padding-top: 0;
  }

  .coupon-box {
    flex-direction: column;

    .coupon-btn {
      width: 100%;
    }
  }

  .place-order-btn {
    width: 100%;
  }
}
</style>