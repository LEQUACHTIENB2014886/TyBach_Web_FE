// stores/modules/clock.js
import { defineStore } from 'pinia';

export const useClockStore = defineStore('clock', {
  state: () => ({
    currentDay: "",  // Lưu mã ngày
    currentDate: ""  // Lưu ngày tháng năm
  }),
  actions: {
    updateTime() {
      const now = new Date();
      const daysOfWeek = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
      const dayOfWeek = daysOfWeek[now.getDay()];
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      const formattedDate = `${day}/${month}/${year}`;
      this.currentDay = dayOfWeek;
      this.currentDate = formattedDate;
    }
  },
  getters: {
    getCurrentDay: (state) => state.currentDay,
    getCurrentDate: (state) => state.currentDate
  }
});

