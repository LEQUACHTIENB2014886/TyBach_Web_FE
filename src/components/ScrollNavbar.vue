<template>
    <div>
      <LoadingOverlay :loading="loading" />
      <Header :class="headerClass" />
      <Navbar :class="navbarClass" @change-loading="setLoading" />
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
    }, 300);
  });
  </script>
  
  <style scoped>
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
  </style>
  