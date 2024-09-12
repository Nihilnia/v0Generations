<template>
  <nav class="bg-white dark:bg-gray-800 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Left: Logo -->
        <div class="flex-shrink-0">
          <router-link to="/"
            ><span class="text-2xl font-bold text-gray-800 dark:text-white"
              >Nihil</span
            ></router-link
          >
        </div>

        <!-- Center: Navigation Items -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <div
              v-for="(item, index) in navItems"
              :key="index"
              class="relative group"
            >
              <button
                @mouseenter="item.isOpen = true"
                @mouseleave="item.isOpen = false"
                class="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                {{ item.name }}
              </button>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div
                  v-if="item.isOpen"
                  @mouseenter="item.isOpen = true"
                  @mouseleave="item.isOpen = false"
                  class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                >
                  <div
                    class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                  >
                    <div
                      class="relative grid gap-6 bg-white dark:bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8"
                    >
                      <a
                        v-for="subItem in item.subItems"
                        :key="subItem"
                        href="#"
                        class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        {{ subItem }}
                      </a>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>

        <!-- Right: Dark Mode Toggle -->
        <div class="flex items-center">
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-full dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition duration-150 ease-in-out"
          >
            <SunIcon v-if="isDarkMode" class="h-6 w-6 text-yellow-400" />
            <MoonIcon v-else class="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { SunIcon, MoonIcon } from "lucide-vue-next";

const isDarkMode = ref(false);

const navItems = ref([
  {
    name: "Products",
    isOpen: false,
    subItems: ["Featured", "Categories", "Deals"],
  },
  {
    name: "Solutions",
    isOpen: false,
    subItems: ["For Individuals", "For Teams", "For Enterprise"],
  },
  {
    name: "Resources",
    isOpen: false,
    subItems: ["Documentation", "Tutorials", "Blog"],
  },
  { name: "Company", isOpen: false, subItems: ["About", "Careers", "Contact"] },
]);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("darkMode", isDarkMode.value);
};

onMounted(() => {
  if (
    localStorage.getItem("darkMode") === "true" ||
    (!("darkMode" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    isDarkMode.value = true;
    document.documentElement.classList.add("dark");
  }
});
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
