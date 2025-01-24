<template>
  <el-menu
    ellipsis
    class="el-menu-popper-demo"
    mode="horizontal"
    :popper-offset="16"
  >
    <el-menu-item index="1" @click="$router.push('/')">{{
      $t("home")
    }}</el-menu-item>

    <el-sub-menu index="2">
      <template #title>{{ $t("introduce") }}</template>
      <el-menu-item index="2-1" @click="$router.push('/introduce/overview')">
        {{ $t("general_intro") }}
      </el-menu-item>
      <el-menu-item
        index="2-2"
        @click="$router.push('/introduce/development-history')"
      >
        {{ $t("history") }}
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="3">
      <template #title>{{ $t("social_responsibility") }}</template>
      <el-menu-item
        index="3-1"
        @click="$router.push('/social-responsibility/labor-rights')"
      >
        {{ $t("labor_rights") }}
      </el-menu-item>
      <el-menu-item
        index="3-2"
        @click="
          $router.push('/social-responsibility/occupational-health-safety')
        "
      >
        {{ $t("health_safety") }}
      </el-menu-item>
      <el-menu-item
        index="3-3"
        @click="$router.push('/social-responsibility/environmental-protection')"
      >
        {{ $t("environmental_protection") }}
      </el-menu-item>
    </el-sub-menu>

    <el-menu-item index="4" @click="$router.push('/branch-activities')">
      {{ $t("party_cell_activities") }}
    </el-menu-item>

    <el-sub-menu index="5">
      <template #title>{{ $t("union_activities") }}</template>
      <el-menu-item
        index="5-1"
        @click="$router.push('/company-activities/union-activities')"
      >
        {{ $t("union_activities") }}
      </el-menu-item>
      <el-menu-item
        index="5-2"
        @click="$router.push('/company-activities/activity-videos')"
      >
        {{ $t("activity_videos") }}
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="6">
      <template #title>{{ $t("recruitment") }}</template>
      <el-menu-item
        index="6-1"
        @click="$router.push('/recruitment/job-information')"
      >
        {{ $t("recruitment_info") }}
      </el-menu-item>
      <el-menu-item
        index="6-2"
        @click="$router.push('/recruitment/human-resources')"
      >
        {{ $t("human_resources") }}
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="7">
      <template #title>{{ $t("contact") }}</template>
      <el-menu-item index="7-1" @click="$router.push('/contact/contact-us')">
        {{ $t("contact_us") }}
      </el-menu-item>
      <el-menu-item
        index="7-2"
        @click="$router.push('/contact/submit-application')"
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
          {{ t("vietnamese") }}
        </a>
      </el-menu-item>
      <el-menu-item index="8-2" @click="changeLanguage('zh')">
        <a>
          <img src="../assets/Flag/China_Flag.png" alt="icon" class="icon" />
          {{ t("chinese") }}
        </a>
      </el-menu-item>
      <el-menu-item index="8-3" @click="changeLanguage('en')">
        <a>
          <img
            src="../assets/Flag/United_KingDom_Flag.png"
            alt="icon"
            class="icon"
          />
          {{ t("english") }}
        </a>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n(); 

const changeLanguage = (lang) => {
  locale.value = lang; 
};
</script>
<style scoped>
.el-menu-popper-demo {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
