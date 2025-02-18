const state = {
  language: localStorage.getItem('language') || 'vi', // Lấy ngôn ngữ từ localStorage
  title: 'Trang chủ'
};

const mutations = {
  setLanguage(state, language) {
    state.language = language;
    localStorage.setItem('language', language); // Lưu ngôn ngữ vào localStorage
  },
  setTitle(state, title) {
    state.title = title;
    document.title = title;
  }
};

const actions = {
  updateLanguage({ commit }, language) {
    commit('setLanguage', language);
    const titles = {
      vi: 'Trang chủ',
      en: 'Home',
      zh: '首页'
    };
    commit('setTitle', titles[language] || 'Trang chủ');
  }
};

const getters = {
  currentLanguage: (state) => state.language,
  pageTitle: (state) => state.title
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
