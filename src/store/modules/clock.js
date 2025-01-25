const state = {
  currentDay: "", // Chỉ lưu trữ mã ngày
  currentDate: "", // Lưu trữ ngày tháng năm
};

const mutations = {
  SET_TIME(state, { day, date }) {
    state.currentDay = day;
    state.currentDate = date;
  },
};

const actions = {
  updateTime({ commit }) {
    const now = new Date();
    const daysOfWeek = [
      "CN", "T2", "T3", "T4", "T5", "T6", "T7",
    ];
    const dayOfWeek = daysOfWeek[now.getDay()];  // Lấy mã ngày
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;  // Chỉ định ngày tháng
    commit("SET_TIME", { day: dayOfWeek, date: formattedDate });
  },
};

const getters = {
  currentDay: (state) => state.currentDay,
  currentDate: (state) => state.currentDate,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
