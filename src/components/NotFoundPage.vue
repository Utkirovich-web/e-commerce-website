<template>
  <section class="not-found-section">
    <Roadmap>
      <router-link to="/">Home</router-link>
      <span class="separator">/</span>
      <span class="current">404 Error</span>
    </Roadmap>

    <div class="not-found-container">
      <h1 class="error-code">404 Not Found</h1>
      <p class="error-message">
        Your visited page not found. You may go home page.
      </p>
      <router-link to="/" class="back-home-btn">
        Back to home page
      </router-link>
    </div>
  </section>
</template>

<script setup>
import Roadmap from "./Roadmap.vue";
</script>

<style lang="scss" scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 140px;
  margin-bottom: 140px;
}

.error-code {
  font-family: "Inter", sans-serif;
  font-size: 110px;
  font-weight: 500;
  line-height: 115px;
  letter-spacing: 0.03em;
  color: #000000;
  margin-bottom: 40px;
}

.error-message {
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 80px;
}

.back-home-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #db4444;
  color: #ffffff;
  text-decoration: none;
  height: 56px;
  padding: 0 48px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e05858;
  }
}

@media (max-width: 768px) {
  .not-found-container {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .error-code {
    font-size: 70px;
    line-height: 75px;
    margin-bottom: 24px;
  }

  .error-message {
    margin-bottom: 40px;
  }
}
</style>
