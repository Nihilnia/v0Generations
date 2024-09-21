import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ParallaxCard from "@/pages/ParallaxCard.vue";
import PhotoGallery from "@/pages/PhotoGallery.vue";
import TypeWriter from "@/pages/TypeWriter.vue";

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
  {
    path: "/PhotoGallery",
    name: "PhotoGallery",
    component: PhotoGallery,
  },
  {
    path: "/TypeWriter",
    name: "TypeWriter",
    component: TypeWriter,
  },
];

const router = createRouter({
  history: createWebHistory(
    process.env.NODE_ENV === "production" ? "/v0Generations/" : "/"
  ), // Dynamically set base path
  routes,
});

export default router;
