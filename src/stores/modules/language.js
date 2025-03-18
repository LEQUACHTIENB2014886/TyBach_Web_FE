// stores/modules/language.js
import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    language: localStorage.getItem('language') || 'vi',
    title: 'Trang chủ'
  }),
  actions: {
    updateLanguage(language) {
      this.language = language;
      localStorage.setItem('language', language);
      const titles = {
        vi: 'Trang chủ',
        en: 'Home',
        zh: '首页'
      };
      this.title = titles[language] || 'Trang chủ';
      document.title = this.title;
    },
    setTitle(title) {
      this.title = title;
      document.title = title;
    }
  },
  getters: {
    currentLanguage: (state) => state.language,
    pageTitle: (state) => state.title
  }
});
