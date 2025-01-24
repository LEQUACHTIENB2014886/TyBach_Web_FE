const state = {
    currentTime: "",
  };
  
  const mutations = {
    SET_TIME(state, time) {
      state.currentTime = time;
    },
  };
  
  const actions = {
    updateTime({ commit }) {
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
  
      const formattedTime = `${dayOfWeek}, ${day}/${month}/${year}`;
      commit("SET_TIME", formattedTime);
    },
  };
  
  const getters = {
    currentTime: (state) => state.currentTime,
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  };
  