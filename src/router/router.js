// src/router.js

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ComponentPage from "@/pages/ComponentPage.vue";

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
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
