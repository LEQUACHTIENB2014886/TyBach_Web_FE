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
        <RealTimeClock />
      </el-col>
    </el-row>
  </header>
</template>
  
<script setup>
  import RealTimeClock from "./RealTimeClock.vue";
</script>
  
<style scoped>
header {
  background-color: #42b983;
  padding: 1rem 0;
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
}

.logo {
  max-width: 80px;
  height: auto;
  margin: 0 10px;
}

h1 {
  font-size: 1.5rem;
  color: white;
  margin: 0;
  white-space: nowrap;
}

.time-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  right: 10px;
}

.clock {
  font-size: 24px;
  font-weight: bold;
  color: white;
}
</style>
  