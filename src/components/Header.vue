<template>
  <header>
    <el-row :gutter="20" class="flex-center">
      <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
        <div class="logo-container">
          <img src="../assets/logo.png" class="logo" alt="logo" />
          <h1>{{ $t("ct") }}</h1>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" class="time-right">
        {{ currentDay ? $t(currentDay) : "" }}, {{ currentDate }}
      </el-col>
    </el-row>
  </header>
</template>

<script setup>
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";

const store = useStore();
const { locale } = useI18n();

const currentDay = computed(() => store.getters["clock/currentDay"]);
const currentDate = computed(() => store.getters["clock/currentDate"]);

onMounted(() => {
  store.dispatch("clock/updateTime");
  setInterval(() => {
    store.dispatch("clock/updateTime");
  }, 1000);
});

watch(locale, () => {
  store.dispatch("clock/updateTime");
});
</script>

<style scoped>
header {
  background-color: rgb(244, 246, 248);
  transition: background-color 0.5s ease, box-shadow 0.5s ease;
  padding: 1rem 0;
  z-index: 999;
}

header:hover {
  background-color: rgb(235, 238, 240);
  border-color: rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  padding: 10px 0;
  border-radius: 10px;
  margin: 0;
  max-width: 100%;
}

.logo {
  max-width: 80px;
  height: auto;
  margin: 0 15px;
}

.time-right {
  font-size: 1rem;
  color: #34495e;
  text-align: right;

  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.el-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.el-col {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-left: 15px;
}

@media (min-width: 2000px) {
  .el-row {
    flex-direction: column;
  }

  .el-col {
    width: 100%;
  }

  h1 {
    font-size: 4rem;
  }

  .time-right {
    font-size: 1.2rem;
  }
}
</style>
