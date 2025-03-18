// stores/index.js
import { createStore } from 'vuex';
import clock from './modules/clock';
import language from './modules/language';

export default createStore({
  modules: {
    clock,
    language,
  },
});
