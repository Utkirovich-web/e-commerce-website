<template>
  <header :class="{ 'header-scrolled': isScrolled }">
    <div class="top">
      <div class="container">
        <div class="shopnow">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <router-link to="#">ShopNow</router-link>
        </div>

        <div>
          <select name="language" id="language">
            <option value="english">English</option>
            <option value="russian">Russian</option>
            <option value="uzbek">Uzbek</option>
          </select>
        </div>
      </div>
    </div>

    <div class="bot">
      <router-link to="/" class="logo">Exclusive</router-link>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/about">About</router-link>
        <router-link v-if="!isLoggedIn" to="/signup">Sign Up</router-link>
      </nav>
      <div class="search-components" ref="searchComponentsRef">
        <div class="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="What are you looking for?"
          />
          <img src="@/assets/search_icon.svg" alt="search icon" />
        </div>
        <router-link to="/wishlist" class="wishlist-link">
          <img :src="WishtlistIcon" alt="Wishlist icon" />
          <span v-if="wishlistCount > 0" class="wishlist-badge">{{
            wishlistCount
          }}</span>
        </router-link>

        <router-link to="#">
          <img :src="ShopIcon" alt="shop icon" />
        </router-link>

        <button
          v-if="isLoggedIn"
          class="user-btn"
          :class="{ active: isActive }"
          @click="showUserMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          </svg>
        </button>

        <div v-if="isActive" class="hidden-user-menu">
          <router-link to="#">
            <img src="@/assets/user.svg" alt="user icon" />
            <span>Manage My Account</span>
          </router-link>
          <router-link to="#">
            <img src="@/assets/my-order.svg" alt="user icon" />
            <span>My Order</span>
          </router-link>
          <router-link to="#">
            <img src="@/assets/my-cancellations.svg" alt="user icon" />
            <span>My Cancellations</span>
          </router-link>
          <router-link to="#">
            <img src="@/assets/my-reviews.svg" alt="user icon" />
            <span>My Reviews</span>
          </router-link>
          <button @click.prevent="handleLogout">
            <img src="@/assets/logout.svg" alt="user icon" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
    <div class="line"></div>
  </header>
  <div class="header-placeholder"></div>
</template>

<script setup>
import WishtlistIcon from "@/assets/Wishlist.svg";
import ShopIcon from "@/assets/shop_icon.svg";
import router from "@/router";
import { ref, onMounted, onUnmounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { wishlistData } from "@/store/WishlistStore";

const route = useRoute();
const isActive = ref(false);
const isScrolled = ref(false);
const searchComponentsRef = ref(null);

const isLoggedIn = ref(!!localStorage.getItem("userToken"));

const wishlistCount = computed(() => wishlistData.length);

watch(
  () => route.path,
  () => {
    isLoggedIn.value = !!localStorage.getItem("userToken");
  },
);

const handleLogout = () => {
  localStorage.removeItem("userToken");
  isLoggedIn.value = false;
  isActive.value = false;
  router.push("/");
};

const showUserMenu = () => {
  isActive.value = !isActive.value;
};

const handleClickOutside = (event) => {
  if (
    searchComponentsRef.value &&
    !searchComponentsRef.value.contains(event.target)
  ) {
    isActive.value = false;
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #fff;
  transition:
    background-color 0.3s ease,
    backdrop-filter 0.3s ease;

  &.header-scrolled {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }

  .top {
    width: 100%;
    background-color: #000;
  }

  .container {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding: 1.2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .shopnow {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin: 0 auto;

      p {
        color: #fafafa;
        font-family: sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.4rem;
        margin: 0;
      }

      a {
        color: #fafafa;
        text-decoration: underline;
        font-family: sans-serif;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 2.4rem;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    select {
      background: transparent;
      color: #fafafa;
      border: none;
      font-family: sans-serif;
      font-size: 1.4rem;
      cursor: pointer;
      outline: none;

      option {
        background-color: #000;
        color: #fafafa;
      }
    }
  }

  .bot {
    max-width: 117rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding-inline: 2rem;
    padding-block: 2rem;

    .logo {
      text-decoration: none;
      color: #000;
      font-weight: 700;
      font-style: bold;
      font-size: 2.4rem;
      line-height: 2.4rem;
    }

    nav {
      display: flex;
      gap: 4.8rem;

      a {
        text-decoration: none;
        color: #000;
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding-block: 1rem;
      }

      a.router-link-active {
        border-bottom: #000 solid 1.5px;
      }
    }

    .search-components {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      position: relative;

      .wishlist-link {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        .wishlist-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background-color: #db4444;
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50%;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .hidden-user-menu {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 1rem;
        background-color: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 12px;
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
        padding: 1.5rem 2rem;
        min-width: 220px;
        z-index: 9999;

        a,
        button {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 1.5rem;
          color: #fff;
          text-decoration: none;
          font-size: 1.4rem;
          line-height: 2.1rem;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          padding: 0;

          &:last-child {
            margin-bottom: 0;
          }

          img {
            filter: brightness(0) invert(1);
          }
        }
      }

      .user-btn {
        cursor: pointer;
        border: none;
        background: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        color: #000;
        transition:
          background-color 0.3s ease,
          color 0.3s ease;
      }

      .active {
        color: #fff !important;
        background-color: #db4444;
        border-radius: 50%;
      }

      a img {
        display: block;
      }

      .search {
        display: flex;
        align-self: center;

        input {
          background-color: #f5f5f5;
          border: none;
          outline: none;
          padding-inline: 2rem;
        }

        img {
          padding: 1rem;
          background-color: #f5f5f5;
        }
      }
    }
  }

  .line {
    border: #0000004b solid 1px;
  }
}

.header-placeholder {
  height: 142px;
}
</style>
