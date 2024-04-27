import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import BuyPage from "../pages/BuyPage.vue";
const routes = [
  { path: "/", name: "home-page", component: HomePage },
  {
    path: "/shop",
    name: "shop-page",
    component: BuyPage,
  },
];

const router = createRouter({ routes, history: createWebHistory("/") });
export default router;
