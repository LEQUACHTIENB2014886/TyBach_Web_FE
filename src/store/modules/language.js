// store/modules/language.js
export default {
  state: () => ({
    locale: 'vi',  // Đảm bảo giá trị mặc định là chuỗi hợp lệ
  }),
  mutations: {
    setLocale(state, locale) {
      state.locale = locale;  // Lưu trữ locale dưới dạng chuỗi
    },
  },
  actions: {
    changeLanguage({ commit }, lang) {
      commit('setLocale', lang);  // Thay đổi locale thông qua mutation
    },
  },
  getters: {
    locale: (state) => state.locale,  // Trả về locale từ state
  },
};
