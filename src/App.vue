<template>
  <div id="app">
    <ScrollNavbar />
    <router-view v-slot="route">
      <transition name="fade" mode="out-in">
        <component :is="route.Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script setup>
import ScrollNavbar from "@/components/ScrollNavbar.vue";
import Footer from "@/components/Footer.vue";
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
