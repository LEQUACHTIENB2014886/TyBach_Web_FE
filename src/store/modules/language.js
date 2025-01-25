// store/modules/language.js
export default {
  state: () => ({
    locale: 'vi', 
  }),
  mutations: {
    setLocale(state, locale) {
      state.locale = locale;
    },
  },
  actions: {
    changeLanguage({ commit }, lang) {
      commit('setLocale', lang);  
    },
  },
  getters: {
    locale: (state) => state.locale,  
  },
};
