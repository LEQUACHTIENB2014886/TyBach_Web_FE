<template>
  <Header />
  <Headertitle @update-language="updateLanguage" />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import Header from './components/Header.vue';
import Headertitle from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const store = useStore();
const locale = computed(() => store.getters['language/locale']);

const updateLanguage = (newLang) => {
  store.dispatch('language/changeLanguage', newLang);
};

const pageTitles = {
  vi: 'Trang chủ',
  en: 'Home',
  zh: '首页'
};
watch(locale, (newLocale) => {
  document.title = pageTitles[newLocale] || 'Trang chủ';
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
