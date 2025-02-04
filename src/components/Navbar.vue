<template>
  <el-menu 
    ellipsis
    class="el-menu-popper-demo"
    mode="horizontal"
    :popper-offset="16"
  >
    <el-menu-item index="1" @click="navigateTo('home', '/')">
      {{ $t("home") }}
    </el-menu-item>

    <el-sub-menu index="2">
      <template #title>{{ $t("introduce") }}</template>
      <el-menu-item
        index="2-1"
        @click="navigateTo('general_intro', '/introduce/overview')"
      >
        {{ $t("general_intro") }}
      </el-menu-item>
      <el-menu-item
        index="2-2"
        @click="navigateTo('history', '/introduce/development-history')"
      >
        {{ $t("history") }}
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="3">
      <template #title>{{ $t("social_responsibility") }}</template>
      <el-menu-item
        index="3-1"
        @click="
          navigateTo('labor_rights', '/social-responsibility/labor-rights')
        "
      >
        {{ $t("labor_rights") }}
      </el-menu-item>
      <el-menu-item
        index="3-2"
        @click="
          navigateTo(
            'health_safety',
            '/social-responsibility/occupational-health-safety'
          )
        "
      >
        {{ $t("health_safety") }}
      </el-menu-item>
      <el-menu-item
        index="3-3"
        @click="
          navigateTo(
            'environmental_protection',
            '/social-responsibility/environmental-protection'
          )
        "
      >
        {{ $t("environmental_protection") }}
      </el-menu-item>
    </el-sub-menu>

    <el-menu-item
      index="4"
      @click="navigateTo('party_cell_activities', '/branch-activities')"
    >
      {{ $t("party_cell_activities") }}
    </el-menu-item>

    <el-sub-menu index="5">
      <template #title>{{ $t("company_activities") }}</template>
      <el-menu-item
        index="5-1"
        @click="
          navigateTo('company_activities', '/company-activities/company-activities')
        "
      >
        {{ $t("company_activities") }}
      </el-menu-item>
      <el-menu-item
        index="5-2"
        @click="
          navigateTo('activity_videos', '/company-activities/activity-videos')
        "
      >
        {{ $t("activity_videos") }}
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="6">
      <template #title>{{ $t("recruitment") }}</template>
      <el-menu-item
        index="6-1"
        @click="navigateTo('recruitment_info', '/recruitment/job-information')"
      >
        {{ $t("recruitment_info") }}
      </el-menu-item>
      <el-menu-item
        index="6-2"
        @click="navigateTo('human_resources', '/recruitment/human-resources')"
      >
        {{ $t("human_resources") }}
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="7">
      <template #title>{{ $t("contact") }}</template>
      <el-menu-item
        index="7-1"
        @click="navigateTo('contact_us', '/contact/contact-us')"
      >
        {{ $t("contact_us") }}
      </el-menu-item>
      <el-menu-item
        index="7-2"
        @click="navigateTo('submit_application', '/contact/submit-application')"
      >
        {{ $t("submit_application") }}
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="8">
      <template #title>
        <img src="../assets/language.svg" alt="icon" class="icon" />
      </template>
      <el-menu-item index="8-1" @click="changeLanguage('vi')">
        <a>
          <img src="../assets/Flag/VietNam_Flag.png" alt="icon" class="icon" />
          {{ $t("vietnamese") }}
        </a>
      </el-menu-item>
      <el-menu-item index="8-2" @click="changeLanguage('zh')">
        <a>
          <img src="../assets/Flag/China_Flag.png" alt="icon" class="icon" />
          {{ $t("chinese") }}
        </a>
      </el-menu-item>
      <el-menu-item index="8-3" @click="changeLanguage('en')">
        <a>
          <img
            src="../assets/Flag/United_KingDom_Flag.png"
            alt="icon"
            class="icon"
          />
          {{ $t("english") }}
        </a>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template><script setup>
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { ref, watch } from "vue";

const { t, locale } = useI18n();
const router = useRouter();
const store = useStore();
const currentLanguageKey = ref("home");

const navigateTo = (titleKey, path) => {
  currentLanguageKey.value = titleKey;
  updateTitle();
  router.push(path);
};

const updateTitle = () => {
  document.title = t(currentLanguageKey.value);
};

watch(locale, () => {
  updateTitle();
});

const changeLanguage = (lang) => {
  locale.value = lang;
  updateTitle();
};
</script>
<style scoped>
.icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>

<style scoped>
.el-menu-popper-demo {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2000;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

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

.icon {
  width: 22px;
  height: 100%;
}
</style>
