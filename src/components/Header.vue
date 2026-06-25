<template>
  <header>
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
        <router-link to="/signup">Sign Up</router-link>
      </nav>
      <div class="search-components">
        <div class="search">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="What are you looking for?"
          />
          <img src="@/assets/search_icon.svg" alt="search icon" />
        </div>
        <router-link to="#">
          <img :src="WishtlistIcon" alt="Wishlist icon" />
        </router-link>

        <router-link to="#">
          <img :src="ShopIcon" alt="shop icon" />
        </router-link>
      </div>
    </div>
    <div class="line"></div>
  </header>
</template>

<script setup>
import WishtlistIcon from "@/assets/Wishlist.svg";
import ShopIcon from "@/assets/shop_icon.svg";
</script>

<style lang="scss" scoped>
header {
  width: 100%;

  .top {
    width: 100%;
    background-color: #000;
    margin-bottom: 4rem;
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
    margin-bottom: 2rem;

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
</style>
