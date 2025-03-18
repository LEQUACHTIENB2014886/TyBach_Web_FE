<!-- components/Navbar.vue -->
<template>
  <div>
    <LoadingOverlay :loading="loading" />
    <el-menu
      ellipsis
      class="el-menu-popper-demo"
      mode="horizontal"
      :popper-offset="16"
      :default-active="navbarStore.activeNav"
    >
      <el-menu-item index="home" @click="navigateTo('home', '/homepage')">
        {{ $t("home") }}
      </el-menu-item>

      <el-sub-menu index="introduce">
        <template #title>{{ $t("introduce") }}</template>
        <el-menu-item index="general_intro" @click="navigateTo('general_intro', '/introduce/overview')">
          {{ $t("general_intro") }}
        </el-menu-item>
        <el-menu-item index="history" @click="navigateTo('history', '/introduce/development-history')">
          {{ $t("history") }}
        </el-menu-item>
      </el-sub-menu>
      
      <el-sub-menu index="social_responsibility">
        <template #title>{{ $t("social_responsibility") }}</template>
        <el-menu-item index="labor_rights" @click="navigateTo('labor_rights', '/social-responsibility/labor-rights')">
          {{ $t("labor_rights") }}
        </el-menu-item>
        <el-menu-item index="health_safety" @click="navigateTo('health_safety', '/social-responsibility/occupational-health-safety')">
          {{ $t("health_safety") }}
        </el-menu-item>
        <el-menu-item index="environmental_protection" @click="navigateTo('environmental_protection', '/social-responsibility/environmental-protection')">
          {{ $t("environmental_protection") }}
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="party_cell_activities" @click="navigateTo('party_cell_activities', '/branch-activities')">
        {{ $t("party_cell_activities") }}
      </el-menu-item>

      <el-sub-menu index="company_activities">
        <template #title>{{ $t("company_activities") }}</template>
        <el-menu-item index="company_activities_page" @click="navigateTo('company_activities_page', '/company-activities/company-activities')">
          {{ $t("company_activities") }}
        </el-menu-item>
        <el-menu-item index="activity_videos" @click="navigateTo('activity_videos', '/company-activities/activity-videos')">
          {{ $t("activity_videos") }}
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="recruitment">
        <template #title>{{ $t("recruitment") }}</template>
        <el-menu-item index="recruitment_info" @click="navigateTo('recruitment_info', '/recruitment/job-information')">
          {{ $t("recruitment_info") }}
        </el-menu-item>
        <el-menu-item index="human_resources" @click="navigateTo('human_resources', '/recruitment/human-resources')">
          {{ $t("human_resources") }}
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="contact">
        <template #title>{{ $t("contact") }}</template>
        <el-menu-item index="contact_us" @click="navigateTo('contact_us', '/contact/contact-us')">
          {{ $t("contact_us") }}
        </el-menu-item>
        <el-menu-item index="submit_application" @click="navigateTo('submit_application', '/contact/submit-application')">
          {{ $t("submit_application") }}
        </el-menu-item>
      </el-sub-menu>

      <el-sub-menu index="language">
        <template #title>
          <img src="../assets/language.svg" alt="icon" class="icon" />
        </template>
        <el-menu-item index="vi" @click="changeLanguage('vi')">
          <a>
            <img src="../assets/Flag/VietNam_Flag.png" alt="icon" class="icon" />
            {{ $t("vietnamese") }}
          </a>
        </el-menu-item>
        <el-menu-item index="zh" @click="changeLanguage('zh')">
          <a>
            <img src="../assets/Flag/China_Flag.png" alt="icon" class="icon" />
            {{ $t("chinese") }}
          </a>
        </el-menu-item>
        <el-menu-item index="en" @click="changeLanguage('en')">
          <a>
            <img src="../assets/Flag/United_KingDom_Flag.png" alt="icon" class="icon" />
            {{ $t("english") }}
          </a>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useNavbarStore } from '../stores/navbar';
import LoadingOverlay from '@components/LoadingOverlay.vue';


const { t, locale } = useI18n();
const router = useRouter();
const navbarStore = useNavbarStore();
const loading = ref(false);

const navigateTo = (navKey, path) => {
  router.push(path);
  navbarStore.setActiveNav(navKey);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const updateTitle = () => {
  document.title = t(navbarStore.activeNav);
};

watch(locale, () => {
  updateTitle();
});

const changeLanguage = (lang) => {
  loading.value = true;
  setTimeout(() => {
    locale.value = lang;
    localStorage.setItem("language", lang);
    loading.value = false;
  }, 500);
};

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.icon {
  width: 22px;
  height: 16px;
}

.el-menu-popper-demo {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.el-menu-popper-demo.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.el-menu-item a {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.el-menu-item img.icon {
  margin-right: 8px;
  vertical-align: middle;
}
</style>
