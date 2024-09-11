<template>
  <nav-icon class="nav-icon"></nav-icon>
</template>

<script>
import NavIcon from "@/components/NavIcon.vue"; // Import NavIcon

export default {
  name: "FooterComponent",
  components: {
    NavIcon,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */
  height: 100%; /* Make sure the container takes the full height if necessary */
}

.nav-icon {
  /* You can add additional styles if needed */
}
</style>
