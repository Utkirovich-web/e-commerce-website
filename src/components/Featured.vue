<template>
  <section class="featured-grid">
    <div class="grid-item item-large">
      <img src="@/assets/ps5.png" alt="PlayStation 5" class="item-img" />
      <div class="item-content">
        <h3 class="item-title">PlayStation 5</h3>
        <p class="item-desc">
          Black and White version of the PS5 coming out on sale.
        </p>
        <router-link to="#" class="shop-now-btn">Shop Now</router-link>
      </div>
    </div>

    <div class="grid-item item-wide">
      <img
        src="@/assets/women.png"
        alt="Women's Collections"
        class="item-img" />
      <div class="item-content">
        <h3 class="item-title">Women’s Collections</h3>
        <p class="item-desc">
          Featured woman collections that give you another vibe.
        </p>
        <router-link to="#" class="shop-now-btn">Shop Now</router-link>
      </div>
    </div>

    <div class="grid-item item-small">
      <img src="@/assets/speaker-item.png" alt="Speakers" class="item-img" />
      <div class="item-content">
        <h3 class="item-title">Speakers</h3>
        <p class="item-desc">Amazon wireless speakers</p>
        <router-link to="#" class="shop-now-btn">Shop Now</router-link>
      </div>
    </div>

    <div class="grid-item item-small">
      <img src="@/assets/perfume.png" alt="Perfume" class="item-img" />
      <div class="item-content">
        <h3 class="item-title">Perfume</h3>
        <p class="item-desc">GUCCI INTENSE OUD EDP</p>
        <router-link to="#" class="shop-now-btn">Shop Now</router-link>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>

.featured-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 284px);
  gap: 3rem;
  margin-bottom: 14rem;

  .grid-item {
    position: relative;
    background-color: #0d0d0d;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    padding: 30px;

    img {
      padding: 3rem;
    }

    .item-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.3s ease;
      z-index: 1;
    }

    &:hover .item-img {
      transform: scale(1.03);
    }

    .item-content {
      position: relative;
      z-index: 2;
      color: #fff;
      max-width: 242px;

      .item-title {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.03em;
        margin-bottom: 8px;
      }

      .item-desc {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        color: #f5f5f5;
        margin-bottom: 16px;
      }

      .shop-now-btn {
        font-size: 16px;
        font-weight: 500;
        color: #fff;
        text-decoration: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        display: inline-block;
        padding-bottom: 4px;
        transition: border-color 0.3s ease;

        &:hover {
          border-bottom-color: #fff;
        }
      }
    }

    &.item-large {
      grid-column: span 2;
      grid-row: span 2;

      .item-content {
        max-width: 242px;
      }
    }

    &.item-wide {
      grid-column: span 2;

      .item-content {
        max-width: 255px;
      }
    }

    &.item-small {
      grid-column: span 1;
    }
  }

  // @media (max-width: 992px) {
  //   grid-template-columns: repeat(2, 1fr);
  //   grid-template-rows: auto;
  //   gap: 20px;

  //   .grid-item.item-large,
  //   .grid-item.item-wide {
  //     grid-column: span 2;
  //     height: 350px;
  //   }

  //   .grid-item.item-small {
  //     grid-column: span 1;
  //     height: 280px;
  //   }
  // }

  // @media (max-width: 576px) {
  //   grid-template-columns: 1fr;

  //   .grid-item.item-large,
  //   .grid-item.item-wide,
  //   .grid-item.item-small {
  //     grid-column: span 1;
  //     height: 300px;
  //   }
  // }
}
</style>
