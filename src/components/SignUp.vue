<template>
  <div class="signup-container">
    <div class="signup-image">
      <img src="@/assets/login-image.png" alt="Shopping cart and phone" />
    </div>

    <div class="signup-form-wrapper">
      <div class="signup-form">
        <div class="form-header">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
        </div>

        <form @submit.prevent="handleSignup">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Email or Phone Number" required />

          <input type="password" placeholder="Password" required />

          <div class="form-actions">
            <button type="submit" class="primary-btn">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleSignup = () => {
  console.log("Ro'yxatdan o'tish...");
};
</script>

<style lang="scss" scoped>
.signup-container {
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  gap: 5rem;
  margin: normal !important;
  max-width: none !important;
}
</style>
