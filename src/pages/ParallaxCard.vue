<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div
      ref="cardRef"
      class="w-[600px] h-[800px] rounded-xl overflow-hidden transition-all duration-200 ease-out shadow-xl"
      :style="cardStyle"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <div
        class="h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent"
      >
        <h2 class="text-2xl font-bold text-white mb-2">Parallax Card</h2>
        <p class="text-white mb-4">Hover over me to see the parallax effect!</p>
        <button
          class="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-200"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const cardRef = ref(null);
const rotation = reactive({ rotateX: 0, rotateY: 0, translateZ: 0 });

const cardStyle = computed(() => ({
  transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg) translateZ(${rotation.translateZ}px)`,
  backgroundImage: `url(${require("@/assets/parallaxCardIMG.jpg")})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const handleMouseMove = (event) => {
  if (!cardRef.value) return;

  const card = cardRef.value;
  const { left, top, width, height } = card.getBoundingClientRect();
  const centerX = left + width / 2;
  const centerY = top + height / 2;
  const mouseX = event.clientX - centerX;
  const mouseY = event.clientY - centerY;

  rotation.rotateX = -(mouseY / height) * 20; // Max rotation of 20 degrees
  rotation.rotateY = (mouseX / width) * 20;
  rotation.translateZ = 50;
};

const handleMouseLeave = () => {
  rotation.rotateX = 0;
  rotation.rotateY = 0;
  rotation.translateZ = 0;
};
</script>
