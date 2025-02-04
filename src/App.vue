<template>
  <div id="app" :class="{ loading: fullscreenLoading }">
    <Header @update-language="updateLanguage" />
    <Headertitle @update-language="updateLanguage" />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useStore } from "vuex";
import Header from "./components/Header.vue";
import Headertitle from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
defineEmits(["update-language"]);

const store = useStore();
const locale = computed(() => store.getters["language/locale"]);

const fullscreenLoading = ref(false);

const updateLanguage = () => {};

watch(locale, (newLocale) => {
  document.title = pageTitles[newLocale] || "Trang chủ";
});

onMounted(() => {
  fullscreenLoading.value = true;
  setTimeout(() => {
    fullscreenLoading.value = false;
  }, 500);
});
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  transition: opacity 0.5s ease;
  opacity: 0;
}

#app.loading {
  opacity: 0;
}

#app:not(.loading) {
  opacity: 1;
}
</style>
