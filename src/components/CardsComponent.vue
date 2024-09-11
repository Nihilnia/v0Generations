<template>
  <div class="relative h-[300px] w-[300px] mx-auto">
    <div
      class="card absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ease-out"
      :style="{
        transform: `perspective(1000px) rotateX(${card.rotateX}deg) rotateY(${card.rotateY}deg)`,
      }"
      @mousemove="handleMouseMove($event, card)"
      @mouseleave="handleMouseLeave(card)"
    >
      <div class="p-6 h-full flex flex-col justify-between">
        <h2 class="text-2xl font-bold text-white mb-4">{{ title }}</h2>
        <p class="text-white">{{ subTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { defineProps } from "vue";

// Define props using defineProps
defineProps({
  title: {
    type: String,
    required: true,
    default: "Default Title",
  },
  subTitle: {
    type: String,
    required: false,
    default: "Default Subtitle",
  },
});

// Define reactive properties for the card
const card = reactive({
  rotateX: 0,
  rotateY: 0,
});

// Methods section
const handleMouseMove = (event) => {
  const cardRect = event.target.getBoundingClientRect();
  const cardCenterX = cardRect.left + cardRect.width / 2;
  const cardCenterY = cardRect.top + cardRect.height / 2;
  const mouseX = event.clientX - cardCenterX;
  const mouseY = event.clientY - cardCenterY;

  card.rotateY = (mouseX / cardRect.width) * 30; // Rotate based on X movement
  card.rotateX = -((mouseY / cardRect.height) * 30); // Rotate based on Y movement
};

const handleMouseLeave = () => {
  card.rotateX = 0;
  card.rotateY = 0;
};
</script>

<style scoped>
.card {
  will-change: transform;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: radial-gradient(
    circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  opacity: 0;
  transition: opacity 0.3s;
}

.card:hover::before {
  opacity: 1;
}
</style>
