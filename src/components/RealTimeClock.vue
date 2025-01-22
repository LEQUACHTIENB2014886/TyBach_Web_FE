<template>
  <div class="clock">
    {{ formattedTime }}
  </div>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";

const formattedTime = ref("");

const updateClock = () => {
  const now = new Date();
  const daysOfWeek = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
  ];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();

  formattedTime.value = `${dayOfWeek}, ${day}/${month}/${year}`;
};

onMounted(() => {
  updateClock();
  setInterval(updateClock, 1000);
});
</script>
  
<style scoped>

</style>