<template>
  <div id="app">
    <LoadingOverlay :loading="loading" />
    <Header />
    <Headertitle @change-loading="setLoading" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
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

const setLoading = (value) => {
  loading.value = value;
};

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
