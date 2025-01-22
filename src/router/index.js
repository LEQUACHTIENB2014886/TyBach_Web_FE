import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'Trang chủ' }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: { title: 'Giới thiệu' }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || 'Trang chủ'} | TyBach`;
  next();
});

export default router;
