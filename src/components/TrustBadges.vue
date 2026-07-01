<template>
  <section class="trust-badges">
    <div class="badge">
      <div class="icon-wrapper">
        <img src="@/assets/icon-delivery.svg" alt="Delivery" />
      </div>
      <div>
        <h2>FREE AND FAST DELIVERY</h2>
        <p>Free delivery for all orders over $140</p>
      </div>
    </div>
    <div class="badge">
      <div class="icon-wrapper">
        <img src="@/assets/Icon-Customer-service.svg" alt="Customer Service" />
      </div>
      <div>
        <h2>24/7 CUSTOMER SERVICE</h2>
        <p>Friendly 24/7 customer support</p>
      </div>
    </div>
    <div class="badge">
      <div class="icon-wrapper">
        <img src="@/assets/icon-secure.svg" alt="Secure" />
      </div>
      <div>
        <h2>Money Back Guarantee</h2>
        <p>We return money within 30 days</p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.trust-badges {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  .badge {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2rem;
    border-radius: 4px;
    margin-block: 10rem;

    .icon-wrapper {
      background-color: #2f2e3049;
      border-radius: 50%;
      padding: 1.5rem;
    }

    img {
      background-color: #000;
      border-radius: 50%;
      padding: 1.5rem;
    }

    h2 {
      color: #000;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 0.8rem;
    }

    p {
      color: #000;
      font-weight: 400;
      font-size: 1.4rem;
      color: #666;
      line-height: 2.1rem;
    }
  }

  div {
    .icon-wrapper {
      background-color: #2f2e3049;
      border-radius: 50%;
      padding: 1.5rem;
    }

    img {
      background-color: #000;
      border-radius: 50%;
      padding: 1.5rem;
    }

    h2 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      color: #666;
    }
  }
}
</style>
