<template>
  <div class="container mx-auto px-4 py-8">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        v-for="(photo, index) in photos"
        :key="photo.id"
        class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <img
          :src="photo.url"
          :alt="photo.title"
          class="w-full h-64 object-cover"
          @click="openCarousel(index)"
        />
        <div
          class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 bg-opacity-75"
        >
          <h3 class="text-white text-sm font-medium">{{ photo.title }}</h3>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div
        v-if="isCarouselOpen"
        class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      >
        <button
          @click="closeCarousel"
          class="absolute top-4 right-4 text-white text-2xl"
        >
          &times;
        </button>
        <button @click="prevPhoto" class="absolute left-4 text-white text-4xl">
          &lt;
        </button>
        <button @click="nextPhoto" class="absolute right-4 text-white text-4xl">
          &gt;
        </button>
        <Transition name="slide" mode="out-in">
          <img
            :key="currentPhotoIndex"
            :src="photos[currentPhotoIndex].url"
            :alt="photos[currentPhotoIndex].title"
            class="max-h-full max-w-full object-contain"
          />
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const photos = ref([
  { id: 1, title: "Photo 1", url: require("@/assets/photoGalleryIMG.jpeg") },
  { id: 2, title: "Photo 2", url: require("@/assets/photoGalleryIMG.jpeg") },
  { id: 3, title: "Photo 3", url: require("@/assets/photoGalleryIMG.jpeg") },
  { id: 4, title: "Photo 4", url: require("@/assets/photoGalleryIMG.jpeg") },
  { id: 5, title: "Photo 5", url: require("@/assets/photoGalleryIMG.jpeg") },
  { id: 6, title: "Photo 6", url: require("@/assets/photoGalleryIMG.jpeg") },
  { id: 7, title: "Photo 7", url: require("@/assets/photoGalleryIMG.jpeg") },
  { id: 8, title: "Photo 8", url: require("@/assets/photoGalleryIMG.jpeg") },
]);

const isCarouselOpen = ref(false);
const currentPhotoIndex = ref(0);

const openCarousel = (index) => {
  currentPhotoIndex.value = index;
  isCarouselOpen.value = true;
};

const closeCarousel = () => {
  isCarouselOpen.value = false;
};

const nextPhoto = () => {
  currentPhotoIndex.value = (currentPhotoIndex.value + 1) % photos.value.length;
};

const prevPhoto = () => {
  currentPhotoIndex.value =
    (currentPhotoIndex.value - 1 + photos.value.length) % photos.value.length;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
