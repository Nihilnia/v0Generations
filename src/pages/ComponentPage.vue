<!-- DynamicPage.vue -->
<template>
  <div>
    <h1>Dynamic Page</h1>
    <p>This is a page for ID: {{ pageId }}</p>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const pageId = route.params.id;

    return { pageId };
  },
};
</script>
