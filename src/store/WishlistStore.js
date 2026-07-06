import { reactive } from "vue";

const wishlistData = reactive(
  JSON.parse(localStorage.getItem("wishlist")) || [],
);

const toggleWishlist = (product) => {
  const index = wishlistData.findIndex((item) => item.id === product.id);

  if (index !== -1) {
    wishlistData.splice(index, 1);
  } else {
    wishlistData.push({
      id: product.id,
      title: product.title,
      image: product.thumbnail,
      price: product.price,
    });
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlistData));
};

const removeFromWishlist = (product) => {
  const index = wishlistData.findIndex((item) => item.id === product.id);

  if (index !== -1) {
    wishlistData.splice(index, 1);
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlistData));
};

export { wishlistData, toggleWishlist, removeFromWishlist };
