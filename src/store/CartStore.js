import { reactive } from "vue";

const cartData = reactive(
  JSON.parse(localStorage.getItem("cart")) || []
);

const addToCart = (product) => {
  const existingItem = cartData.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartData.push({
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      quantity: 1 
    });
  }
  localStorage.setItem("cart", JSON.stringify(cartData));
};

const removeFromCart = (product) => {
  const index = cartData.findIndex((item) => item.id === product.id);
  if (index !== -1) {
    cartData.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cartData));
};

const decreaseQuantity = (product) => {
  const existingItem = cartData.find((item) => item.id === product.id);
  if (existingItem) {
    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else {
      removeFromCart(product);
      return;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cartData));
};

export { cartData, addToCart, removeFromCart, decreaseQuantity };   