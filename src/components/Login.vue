<template>
  <div class="signup-container">
    <div class="signup-image">
      <img src="@/assets/login-image.png" alt="Shopping cart and phone" />
    </div>

    <div class="signup-form-wrapper">
      <div class="signup-form">
        <div class="form-header">
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
        </div>

        <form @submit.prevent="handleLogin">
          <input type="text" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required />

          <div class="form-actions login-actions">
            <button type="submit" class="primary-btn">Log In</button>
            <router-link to="#" class="forgot-password-link"
              >Forget Password?</router-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleLogin = () => {
  console.log("Tizimga kirish...");
};
</script>

<style lang="scss" scoped>
.signup-container {
  display: flex;
  width: 100%;
  min-height: 80vh;
  align-items: center;
  margin-block: 6rem 14rem;

  h1 {
    color: #000;
    font-size: 3.6rem;
    font-weight: 500;
    line-height: 3rem;
    margin-bottom: 2.4rem;
  }

  p {
    color: #000;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  .signup-image {
    width: 50%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .signup-form-wrapper {
    width: 50%;
    display: flex;
    box-sizing: border-box;
    padding-right: calc(50vw - 1170px / 2);
    padding-left: 2rem;

    .form-header {
      margin-bottom: 4.8rem;
    }

    .signup-form {
      width: 100%;
      max-width: 371px;
      margin-left: auto;

      form {
        display: flex;
        flex-direction: column;
        gap: 4rem;

        input {
          padding: 1.5rem 0;
          border: none;
          border-bottom: 1px solid #d9d9d9;
          font-size: 1.6rem;
          width: 100%;
          box-sizing: border-box;
          outline: none;

          &::placeholder {
            color: #7d7d7d;
          }
        }

        .form-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;

          .primary-btn {
            background-color: #db4444;
            color: #fff;
            padding-block: 1.6rem;
            border: none;
            border-radius: 4px;
            font-size: 1.6rem;
            font-weight: 500;
            cursor: pointer;
            width: 100%;

            &:hover {
              background-color: #e04f4f;
            }
          }
        }

        .login-actions {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          .primary-btn {
            width: auto;
            padding-inline: 4.8rem;
          }

          .forgot-password-link {
            color: #db4444;
            text-decoration: none;
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 2.4rem;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .signup-container {
    .signup-form-wrapper {
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }
}

@media (max-width: 1024px) {
  .signup-container {
    flex-direction: column;

    .signup-image,
    .signup-form-wrapper {
      width: 100%;
    }

    .signup-form-wrapper {
      padding: 3rem 2rem;

      .signup-form {
        margin-left: auto;
        margin-right: auto;
        max-width: 400px;
      }
    }
  }
}
</style>
