import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import SignupView from "@/views/SignupView.vue";
import AboutView from "@/views/AboutView.vue";
import Login from "@/components/Login.vue";
import Wishlist from "@/components/Wishlist.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/wishlist",
      name: "wishlist",
      component: Wishlist,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("userToken");

  if (token && (to.path === "/login" || to.path === "/signup")) {
    next("/");
  } else {
    next();
  }
});

export default router;
