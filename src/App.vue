<template>
  <div id="app">
    <LoadingOverlay :loading="loading" />
    <Header />
    <Headertitle />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Header from "./components/Header.vue";
import Headertitle from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import LoadingOverlay from "./components/LoadingOverlay.vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
</style>
