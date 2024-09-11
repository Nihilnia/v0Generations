<template>
  <div id="app">
    <header>
      <nav-bar></nav-bar>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue"; // Adjust the path based on your project structure
import NavBar from "./components/NavBar.vue"; // Adjust the path based on your project structure

export default {
  name: "App",
  components: {
    FooterComponent,
    NavBar,
  },
};
</script>

<style scoped>
/* Add your styles for App.vue here */
</style>
