import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import router from './router';
import store from './store';
import { createI18n } from 'vue-i18n';

import vi from './locales/vi.json';
import en from './locales/en.json';
import zh from './locales/zh.json';

const messages = {
  vi,
  en,
  zh,
};

// Lấy locale từ Vuex store
const initialLocale = store.state.language.locale; // Đảm bảo rằng locale đã được gán giá trị mặc định từ store

// Khởi tạo i18n với locale lấy từ Vuex
const i18n = createI18n({
  legacy: false, // Dùng Composition API
  locale: initialLocale,  // Sử dụng giá trị locale từ Vuex
  messages,
});

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app');
