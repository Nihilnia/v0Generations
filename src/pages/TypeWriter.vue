<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div class="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
      <div class="p-6">
        <h1 class="text-2xl font-bold text-gray-800 mb-6 text-center">
          Typewriter Effect
        </h1>

        <div class="space-y-4 mb-6">
          <div>
            <label
              for="text-input"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Text</label
            >
            <input
              id="text-input"
              v-model="text"
              type="text"
              placeholder="Enter text here"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              for="speed-input"
              class="block text-sm font-medium text-gray-700 mb-1"
              >Speed (ms)</label
            >
            <input
              id="speed-input"
              v-model="speed"
              type="number"
              min="1"
              step="10"
              placeholder="Enter speed in milliseconds"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div class="bg-gray-100 p-4 rounded-md">
          <p
            class="text-lg text-gray-800 font-mono min-h-[3rem] relative"
            aria-live="polite"
          >
            {{ displayText }}
            <span
              :class="['cursor', { blinking: !isTyping }]"
              :style="{ left: `${cursorPosition}ch` }"
            ></span>
          </p>
        </div>

        <div class="mt-6 flex justify-center">
          <button
            @click="startTypewriter"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Start Typewriter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const text = ref("");
const speed = ref(100);
const currentIndex = ref(0);
const isTyping = ref(false);

const displayText = computed(() => {
  return text.value.slice(0, currentIndex.value);
});

const cursorPosition = computed(() => {
  return currentIndex.value;
});

const startTypewriter = () => {
  if (isTyping.value) return;

  isTyping.value = true;
  currentIndex.value = 0;

  const typeNextChar = () => {
    if (currentIndex.value < text.value.length) {
      currentIndex.value++;
      setTimeout(typeNextChar, speed.value);
    } else {
      isTyping.value = false;
    }
  };

  typeNextChar();
};
</script>

<style scoped>
.cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background-color: currentColor;
  position: absolute;
  top: 0.15em;
  transition: left 0.1s ease;
}

.blinking {
  animation: blink 0.7s steps(2, start) infinite;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}
</style>
