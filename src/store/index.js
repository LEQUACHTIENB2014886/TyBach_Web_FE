import { createStore } from 'vuex';
import clock from './modules/clock';

export default createStore({
  modules: {
    clock,
  },
});
