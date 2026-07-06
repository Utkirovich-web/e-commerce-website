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
          <input type="text" placeholder="Name" ref="nameInput" required />
          <input
            type="text"
            placeholder="Email or Phone Number"
            ref="emailInput"
            required
          />
          <input
            type="password"
            placeholder="Password"
            ref="passwordInput"
            required
          />

          <div class="form-actions">
            <button type="submit" class="primary-btn">Create Account</button>
            <button type="button" class="primary-btn with-google">
              <img src="@/assets/Icon-google.svg" alt="google icon" /> Sign up
              with Google
            </button>
          </div>

          <div class="login">
            <p>
              Already have account?
              <router-link to="/login">Log in</router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const nameInput = ref(null);
const emailInput = ref(null);
const passwordInput = ref(null);

const errorMessage = ref("");

const signupInfo = reactive({
  name: "",
  email: "",
  password: "",
});

const handleSignup = async () => {
  try {
    errorMessage.value = "";

    signupInfo.name = nameInput.value.value;
    signupInfo.email = emailInput.value.value;
    signupInfo.password = passwordInput.value.value;

    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signupInfo.email,
        username: signupInfo.name.toLowerCase().replace(/\s+/g, ""),
        password: signupInfo.password,
        name: {
          firstname: signupInfo.name,
          lastname: "User",
        },
        address: {
          city: "Tashkent",
          street: "Unknown",
          number: 1,
          zipcode: "100000",
          geolocation: { lat: "0", long: "0" },
        },
        phone: "0000000",
      }),
    });

    if (!response.ok) {
      throw new Error("Ro'yxatdan o'tishda xatolik yuz berdi!");
    }

    const data = await response.json();

    localStorage.setItem("userToken", "fake-token-id-" + data.id);

    window.dispatchEvent(new Event("auth-change"));

    router.go(-1);
  } catch (error) {
    errorMessage.value = error.message;
  }
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

        .login {
          text-align: center;
          p {
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 2.4rem;
            color: #7d7d7d;

            a {
              color: #5c5a5a;
              text-decoration: none;
              font-size: 1.6rem;
              font-weight: 500;
              line-height: 2.4rem;
              border-bottom: 1px solid #5c5a5a;
              padding-bottom: 0.5rem;
            }
          }
        }

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

          .with-google {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.6rem;
            background-color: #fff;
            color: #000;
            border: 1px solid #00000040;
            padding-block: 1.4rem;

            &:hover {
              background-color: #00000009;
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
