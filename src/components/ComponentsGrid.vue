<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Passing props correctly -->
      <cards-component
        title="Parallax Effect"
        subTitle="This is a cool effect!"
      ></cards-component>
      <cards-component
        title="Parallax Effect"
        subTitle="This is a cool effect!"
      ></cards-component>
      <cards-component
        title="Parallax Effect"
        subTitle="This is a cool effect!"
      ></cards-component>
      <cards-component
        title="Parallax Effect"
        subTitle="This is a cool effect!"
      ></cards-component>
    </div>
  </div>
</template>

<script>
import CardsComponent from "./CardsComponent.vue";

export default {
  components: { CardsComponent },
};
</script>
