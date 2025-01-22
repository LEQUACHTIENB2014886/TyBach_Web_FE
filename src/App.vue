<template>
  <Header />
  <HomePage />
  <Footer />
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import HomePage from "./views/HomePage.vue";

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
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

main {
  flex-grow: 1; 
}

footer {
  background-color: #2c3e50;
  padding: 1rem 0;
  color: white;
  text-align: center;
  margin-top: auto; 
}

footer:hover {
  background-color: #34495e;
}
</style>
