<template>
  <div id="app" :class="{ loading: fullscreenLoading }">
    <Header @update-language="updateLanguage" />
    <Headertitle @update-language="updateLanguage" />
    <router-view />
    <Footer />
    <el-button
      v-loading.fullscreen.lock="fullscreenLoading"
      type="primary"
      @click="openFullScreen1"
    >
      As a directive
    </el-button>
    <el-button type="primary" @click="openFullScreen2">As a service</el-button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useStore } from "vuex";
import { ElLoading } from "element-plus";
import Header from "./components/Header.vue";
import Headertitle from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const store = useStore();
const locale = computed(() => store.getters["language/locale"]);

const fullscreenLoading = ref(false);

const openFullScreen1 = () => {
  fullscreenLoading.value = true;
  setTimeout(() => {
    fullscreenLoading.value = false;
  }, 2000);
};

const openFullScreen2 = () => {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });
  setTimeout(() => {
    loading.close();
  }, 500);
};

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
