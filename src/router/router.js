// src/router.js

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ComponentPage from "@/pages/ComponentPage.vue";
import ParallaxCard from "@/pages/ParallaxCard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/component/:id", // Dynamic route with 'id' as a parameter
    name: "ComponentPage",
    component: ComponentPage,
  },
  {
    path: "/ParallaxCard", // Dynamic route with 'id' as a parameter
    name: "ParallaxCard",
    component: ParallaxCard,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
