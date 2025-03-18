// stores/navbar.js
import { defineStore } from 'pinia';

export const useNavbarStore = defineStore('navbar', {
  state: () => ({
    activeNav: localStorage.getItem('activeNav') || 'home'
  }),
  actions: {
    setActiveNav(navKey) {
      this.activeNav = navKey;
      localStorage.setItem('activeNav', navKey);
      document.title = navKey;
    }
  }
});
