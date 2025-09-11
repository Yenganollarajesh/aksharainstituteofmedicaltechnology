import { createRouter, createWebHashHistory } from 'vue-router';
import HomeWrapper from '../views/HomeWrapper.vue';

const routes = [
  { path: '/', name: 'home', component: HomeWrapper },
  { path: '/about', redirect: '/#about' },
  { path: '/courses', redirect: '/#courses' },
  { path: '/admissions', redirect: '/#admissions' },
  { path: '/facilities', redirect: '/#facilities' },
  { path: '/contact', redirect: '/#contact' },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
