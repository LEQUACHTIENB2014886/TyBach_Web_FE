<template>
  <Header />
  <HeaderTitle />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import Header from "./components/Header.vue";
import HeaderTitle from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const pageTitle = ref("Trang chủ");

watch(pageTitle, (newTitle) => {
  document.title = `${newTitle} | TyBach`;
});

onMounted(() => {
  document.title = `${pageTitle.value} | TyBach`;
});
</script>

<style>
body,
html,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

h1,
h2,
h3,
h4,
h5 {
  color: #1f2c39;
}
</style>
