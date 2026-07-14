<template>
  <div class="cart-page">
    <Roadmap>
      <router-link to="/">Home</router-link>
      <span class="separator">/</span>
      <span to="/#" class="current">Cart</span>
    </Roadmap>

    <div class="cart-wrapper" v-if="cartData.length > 0">
      <div class="cart-main">
        <div class="cart-header">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        <div class="cart-list">
          <div v-for="item in cartData" :key="item.id" class="cart-item">
            <div class="product-info">
              <button class="remove-btn" @click="removeFromCart(item)">
                ×
              </button>
              <img :src="item.thumbnail" :alt="item.title" />
              <span class="product-title">{{ item.title }}</span>
            </div>

            <div class="product-price">${{ item.price }}</div>

            <div class="product-quantity">
              <div class="quantity-controls">
                <button @click="decreaseQuantity(item)">-</button>
                <span>{{ item.quantity }}</span>
                <button @click="addToCart(item)">+</button>
              </div>
            </div>

            <div class="product-subtotal">
              ${{ item.price * item.quantity }}
            </div>
          </div>
        </div>

        <div class="cart-actions">
          <router-link to="/" class="btn-secondary">Return To Shop</router-link>
          <button class="btn-secondary">Update Cart</button>
        </div>
      </div>

      <div class="cart-bottom-section">
        <div class="coupon-wrapper">
          <input type="text" placeholder="Coupon Code" />
          <button class="btn-primary">Apply Coupon</button>
        </div>

        <div class="cart-total-card">
          <h3>Cart Total</h3>
          <div class="total-row">
            <span>Subtotal:</span>
            <span>${{ cartTotal }}</span>
          </div>
          <div class="total-row">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div class="total-row final-total">
            <span>Total:</span>
            <span>${{ cartTotal }}</span>
          </div>
          <div class="checkout-wrapper">
            <router-link to="/checkout" class="btn-primary"
              >Procees to checkout</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <div class="empty-cart" v-else>
      <p>Your cart is empty</p>
      <router-link to="/" class="btn-primary">Go Shopping</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import {
  cartData,
  addToCart,
  removeFromCart,
  decreaseQuantity,
} from "@/store/CartStore";
import Roadmap from "./Roadmap.vue";

const cartTotal = computed(() => {
  return cartData.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.top {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 8rem;

  a {
    color: #00000090;
    text-decoration: none;
    font-size: 1.4rem;
  }

  .cart-span {
    color: #000;
    font-size: 1.4rem;
  }
}

.cart-header {
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1fr;
  padding: 2.4rem 4rem;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  font-weight: 400;
  font-size: 1.6rem;
  margin-bottom: 4rem;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 3rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1fr;
  align-items: center;
  padding: 2.4rem 4rem;
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  font-size: 1.6rem;
}

.product-info {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;

  img {
    width: 5.4rem;
    height: 5.4rem;
    object-fit: contain;
  }

  .product-title {
    color: #000;
  }

  .remove-btn {
    position: absolute;
    left: -1.2rem;
    top: -1.2rem;
    background: #db4444;
    color: white;
    border: none;
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.4rem;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    .remove-btn {
      opacity: 1;
    }
  }
}

.quantity-controls {
  display: flex;
  align-items: center;
  border: 1.5px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  width: fit-content;
  padding: 0.6rem 1.2rem;
  gap: 1.6rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.6rem;
  }
}

.cart-actions {
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 1fr;
  padding-inline: 4rem;
  margin-bottom: 8rem;
}

.btn-secondary {
  grid-column: 1;
  justify-self: start;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 1.6rem 4.8rem;
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: 500;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  &:last-child {
    grid-column: 4;
    justify-self: end;
  }
}

.btn-primary {
  background-color: #db4444;
  color: white;
  border: none;
  padding: 1.6rem 4.8rem;
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #c23b3b;
  }
}

.cart-bottom-section {
  display: grid;
  grid-template-columns: 2.5fr 1fr 1fr 2fr;
  gap: 4rem;
  width: 100%;
  align-items: flex-start;
}

.coupon-wrapper {
  grid-column: 1 / span 2;
  display: flex;
  gap: 1.6rem;
  align-items: flex-start;

  input {
    border: 1px solid #000;
    border-radius: 4px;
    padding: 1.6rem 2.4rem;
    font-size: 1.6rem;
    width: 300px;
    outline: none;
  }
}

.cart-total-card {
  grid-column: 3 / span 2;
  border: 1.5px solid #000;
  border-radius: 4px;
  padding: 3.2rem 2.4rem;
  width: 100%;
  box-sizing: border-box;

  h3 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 3.2rem;
  }

  .total-row {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    padding-bottom: 1.6rem;
    margin-bottom: 1.6rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);

    &:last-of-type {
      border-bottom: none;
    }
  }

  .final-total {
    border-bottom: none;
    margin-bottom: 3.2rem;
  }

  .checkout-wrapper {
    display: flex;
    justify-content: center;
  }
}

.empty-cart {
  text-align: center;
  padding: 10rem 2rem;
  font-size: 2.4rem;

  .btn-primary {
    display: inline-block;
    margin-top: 3rem;
    text-decoration: none;
  }
}

@media (max-width: 992px) {
  .cart-bottom-section {
    grid-template-columns: 1fr;
    gap: 4rem;
    justify-items: center;
  }

  .coupon-wrapper {
    grid-column: 1;
    width: 100%;
    justify-content: center;

    input {
      width: 60%;
    }
  }

  .cart-total-card {
    grid-column: 1;
    max-width: 470px;
  }
}

@media (max-width: 768px) {
  .cart-header {
    display: none;
  }

  .cart-actions {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-inline: 0;
  }

  .btn-secondary {
    grid-column: 1 !important;
    justify-self: center !important;
    width: 100%;
    text-align: center;
  }

  .cart-item {
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
    text-align: center;
    padding: 3rem;
  }

  .product-info {
    flex-direction: column;

    .remove-btn {
      opacity: 1;
      left: auto;
      right: -2rem;
      top: 0;
    }
  }

  .coupon-wrapper {
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
    }

    .btn-primary {
      width: 100%;
    }
  }
}
</style>
