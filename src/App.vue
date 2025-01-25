<template>
  <Header />
  <Headertitle @update-language="updatetitle" />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import { ref, watch} from "vue";
import Header from "./components/Header.vue";
import Headertitle from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const pagetitle = ref("Trang chủ");

const updatetitle = (newtitle) => {
  pagetitle.value = newtitle;
  document.title = `${newtitle}`;
};

watch(pagetitle, (newtitle) => {
  document.title = `${newtitle}`;
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
  color: #19232d;
}
* {
  font-family: Roboto;
}
</style>
