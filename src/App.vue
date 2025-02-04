<template>
  <div id="app">
    <Header @update-language="updateLanguage" />
    <Headertitle @update-language="updateLanguage" />

    <router-view></router-view>

    <Footer />
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import Header from "./components/Header.vue";
import Headertitle from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const store = useStore();
const locale = computed(() => store.getters["language/locale"]);

const updateLanguage = (newLang) => {
  store.dispatch("language/changeLanguage", newLang);
};

const pageTitles = {
  vi: "Trang chủ",
  en: "Home",
  zh: "首页",
};
watch(locale, (newLocale) => {
  document.title = pageTitles[newLocale] || "Trang chủ";
});
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
