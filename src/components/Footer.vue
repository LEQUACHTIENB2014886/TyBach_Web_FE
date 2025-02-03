<template>
  <footer>
    <el-row class="startfooter">
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="5" :xl="5" class="ft">
        <div class="title">{{ $t("introduce") }}</div>
        <div class="content" @click="navigateTo('/introduce/overview')">
          {{ $t("general_intro") }}
        </div>
        <div
          class="content"
          @click="navigateTo('/introduce/development-history')"
        >
          {{ $t("history") }}
        </div>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="5" :xl="5" class="ft">
        <div class="title">{{ $t("social_responsibility") }}</div>
        <div
          class="content"
          @click="
            navigateTo('/social-responsibility/occupational-health-safety')
          "
        >
          {{ $t("health_safety") }}
        </div>
        <div
          class="content"
          @click="navigateTo('/social-responsibility/environmental-protection')"
        >
          {{ $t("environmental_protection") }}
        </div>
        <div class="content" @click="navigateTo('/branch-activities')">
          {{ $t("party_cell_activities") }}
        </div>
        <div
          class="content"
          @click="navigateTo('/company-activities/company-activities')"
        >
          {{ $t("company_activities") }}
        </div>
        <div
          class="content"
          @click="navigateTo('/company-activities/activity-videos')"
        >
          {{ $t("activity_videos") }}
        </div>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="5" :xl="5" class="ft">
        <div class="title">{{ $t("recruitment") }}</div>
        <div
          class="content"
          @click="navigateTo('/recruitment/job-information')"
        >
          {{ $t("recruitment_info") }}
        </div>
        <div
          class="content"
          @click="navigateTo('/recruitment/human-resources')"
        >
          {{ $t("human_resources") }}
        </div>
      </el-col>
      <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="5" :xl="5" class="ft">
        <div class="title">{{ $t("contact") }}</div>
        <div class="content" @click="navigateTo('/contact/submit-application')">
          {{ $t("submit_application") }}
        </div>
      </el-col>
    </el-row>

    <hr />
    <el-row class="endfooter">
  <el-col :span="2" :xs="0"></el-col>
  <el-col :span="8" :xs="24" class="ft">
    <div class="title_2">
      <el-icon><Phone /></el-icon> {{ t("sdt") }}
    </div>
    <div class="contact">+84 270 375 2619</div>
    <div class="contact">+84 270 389 0878</div>
    <hr />
    <div class="title_2">
      <el-icon><Location /></el-icon> {{ t("dc") }}
    </div>
    <div class="contact">
      {{ t("dc2") }}
    </div>
    <hr />
    <div class="title_2">
      <el-icon><Message /></el-icon> {{ t("em") }}
    </div>
    <div class="contact">tuyendung@tybach.com.vn</div>
    <hr />
    <div class="title_2">
      <el-icon><Clock /></el-icon> {{ t("h") }}
    </div>
    <el-backtop :right="100" :bottom="100" />
    <div
      class="contact"
      :style="{
        color:
          operatingStatus === t('mc')
            ? '#7FFF00'
            : operatingStatus === t('cb')
            ? '#FFA500'
            : '#DC143C',
      }"
    >
      {{ operatingStatus }}
    </div>
  </el-col>
  <el-col :span="2" :xs="0"></el-col>
  <el-col :span="10" :xs="24">
    <iframe
      :src="`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.213556105925!2d106.6296673153505!3d10.77376526194847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fcf6cf1f01b%3A0xab7273613d4e0184!2zQ8O0bmcgdHkgVE7DqyB0xqFhY8QgxayOiAo4bmF0)5!5e0!3m2!1sen!2s!4v1677580073786!5m2!1sen!2s${
        locale === 'zh' ? 'zh' : locale === 'en' ? 'en' : 'vi'
      }!2sus!4v1692759592602!5m2!1s${
        locale === 'zh' ? 'zh' : locale === 'en' ? 'en' : 'vi'
      }!2sus`"
      width="100%"
      height="100%"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      class="ggmap"
    />
  </el-col>
  <el-col :span="2" :xs="0"></el-col>
    </el-row>
    <hr />
    <a style="font-style: italic">@ Lê Quách Tiến :D</a>
  </footer>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";
import { watch } from "vue";

const { t, locale, setLocale } = useI18n();
const router = useRouter();

const operatingStatus = ref("");
const isOpen = ref(false);

const navigateTo = (path) => {
  router.push(path);
};

const changeLanguage = (language) => {
  setLocale(language);
  updateOperatingStatus();
};

watch(locale, () => {
  updateOperatingStatus();
});

const updateOperatingStatus = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;
  const preparingTimeStart = 6 * 60;
  const preparingTimeEnd = 7 * 60 + 30;
  const openingTime = 7 * 60 + 30;
  const closingTime = 16 * 60 + 30;

  if (currentTime >= preparingTimeStart && currentTime < preparingTimeEnd) {
    operatingStatus.value = t("cb");
    isOpen.value = false;
  } else if (currentTime >= openingTime && currentTime < closingTime) {
    operatingStatus.value = t("mc");
    isOpen.value = true;
  } else {
    operatingStatus.value = t("dca");
    isOpen.value = false;
  }
};

onMounted(() => {
  updateOperatingStatus();
  setInterval(updateOperatingStatus, 60000);
});
</script>

<style scoped>
footer {
  background-color: #1c2631;
  transition: background-color 0.5s ease;
  padding: 1rem 0;
  color: white;
  text-align: center;
  margin-top: auto;
}

footer:hover {
  background-color: rgb(18, 26, 34);
}

.el-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ft {
  text-align: left;
  color: white;
  cursor: pointer;
}

.title {
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: 0.5rem;
  padding-top: 10px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.title:hover {
  color: #00bcd4;
  transform: scale(1.15);
}
.title_2 {
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: 0.5rem;
  padding-top: 10px;
}

.content {
  margin: 1rem 0 1rem 1px;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.content:hover {
  color: #00bcd4;
  transform: scale(1.15);
}

hr {
  border: 1px solid;
  margin: 1rem;
}

.contact {
  margin: 10px 0 10px 30px;
}

.ggmap {
  border-radius: 5px;
}
.endfooter {
  margin: 25px 0;
}

.startfooter {
  justify-content: center;
}
</style>