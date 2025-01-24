const state = {
    language: 'vi', 
  };
  
  const mutations = {
    SET_LANGUAGE(state, lang) {
      state.language = lang;
    }
  };
  
  const actions = {
    changeLanguage({ commit }, lang) {
      commit('SET_LANGUAGE', lang);
    }
  };
  
  const getters = {
    currentLanguage: (state) => state.language
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  };
  