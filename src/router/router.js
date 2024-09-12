import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

import ParallaxCard from "@/pages/ParallaxCard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/ParallaxCard",
    name: "ParallaxCard",
    component: ParallaxCard,
  },
];

const router = createRouter({
  history: createWebHistory("/v0Generations/"), // Set the base to the GitHub Pages subdirectory
  routes,
});

export default router;
