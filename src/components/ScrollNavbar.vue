<template>
    <div>
      <LoadingOverlay :loading="loading" />
      <Header :class="headerClass" />
      <Navbar :class="navbarClass" @change-loading="setLoading" />
      <div :class="contentClass">
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import Header from "./Header.vue";
  import Navbar from "./Navbar.vue";
  import LoadingOverlay from "./LoadingOverlay.vue";
  
  const loading = ref(true);
  const headerClass = ref("");
  const navbarClass = ref("");
  const contentClass = ref("");
  
  const handleScroll = () => {
    if (window.scrollY > 100) {
      navbarClass.value = "fixed"; 
      contentClass.value = "navbar-fixed"; 
    } else {
      navbarClass.value = "";
      contentClass.value = ""; 
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
    }, 300);
  });
  </script>
  
  <style scoped>
  .header {
    position: sticky;
    top: 0;
    z-index: 2;
  }
  
  .fixed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .navbar-fixed {
    padding-top: 60px; 
  }
  </style>
  