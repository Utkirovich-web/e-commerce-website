<template>
  <div class="wishlist">
    <div class="wishlist-header">
      <p>Wishlist ({{ wishlistData.length }})</p>
      <button>Move All To Bag</button>
    </div>
    <Cards
      :isWishlistPage="true"
      :viewAllBtn="false"
      showProduct
      :disCountShow="false"
      showAddBtn="show-add-btn"
    />

    <SectionsName class="just-for-you">
      <template #section>Just For You</template>
      <!-- <template #button><button class="see-btn">See All</button></template> -->
    </SectionsName>

    <Cards />
  </div>
</template>

<script setup>
import { wishlistData } from "@/store/WishlistStore.js";
import Cards from "./Cards.vue";
import SectionsName from "./SectionsName.vue";
</script>

<style lang="scss" scoped>
.wishlist-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 7rem;

  
  p {
    color: #000;
    font-size: 2rem;
    line-height: 2.6rem;
  }

  button {
    color: #000;
    cursor: pointer;
    font-size: 1.6rem;
    padding: 1.6rem 4.8rem;
    line-height: 2.4rem;
    background: none;
    border: 1px solid #00000050;
    border-radius: 5px;
    transition-duration: 0.3ms;

    &:hover {
      background-color: #00000021;
    }
  }
}

.see-btn {
  cursor: pointer;
  color: #000;
  background: none;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 1.6rem 4.8rem;
  border: 1px solid #00000050;
}

.just-for-you {
  align-items: center;
  margin-bottom: 5rem;
}
</style>
