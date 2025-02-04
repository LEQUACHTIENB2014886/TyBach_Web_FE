<template>
  <div id="app">
    <LoadingOverlay :loading="loading" />
    <Header :class="headerClass" />
    <Navbar :class="navbarClass" @change-loading="setLoading" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import LoadingOverlay from "./components/LoadingOverlay.vue";

const loading = ref(true);
const headerClass = ref("");
const navbarClass = ref("");

const handleScroll = () => {
  if (window.scrollY > 50) {
    headerClass.value = "hidden"; 
    navbarClass.value = "fixed";  
  } else {
    headerClass.value = "";
    navbarClass.value = "";
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

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
.hidden {
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

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
