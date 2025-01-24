<template>
  <header>
    <el-row :gutter="20" class="flex-center">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
        <div class="logo-container">
          <img src="../assets/logo.png" class="logo" alt="logo" />
          <h1>Công ty TNHH Tỷ Bách 亿伯</h1>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="time-right">
        {{ currentTime }}
      </el-col>
    </el-row>
  </header>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const currentTime = computed(() => store.getters["clock/currentTime"]);

onMounted(() => {
  store.dispatch("clock/updateTime");
  setInterval(() => {
    store.dispatch("clock/updateTime");
  }, 1000);
});
</script>

<style scoped>
header {
  background-color: rgb(244, 246, 248);
  transition: background-color 0.5s ease, box-shadow 0.5s ease;
  padding: 1rem 0;
}

header:hover {
  background-color: rgb(235, 238, 240);
  border-color: rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  padding: 10px 0;
  border-radius: 10px;
  margin: 0;
  white-space: nowrap;
}

.logo {
  max-width: 80px;
  height: auto;
  margin: 0 15px;
}

.time-right {
  font-size: 1.2rem;
  color: #34495e;
  text-align: right;
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

.clock {
  font-size: 18px;
}
</style>
