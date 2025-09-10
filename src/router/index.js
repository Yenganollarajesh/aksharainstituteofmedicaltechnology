import { createRouter, createWebHashHistory } from 'vue-router';
import HomeWrapper from '../views/HomeWrapper.vue';

const routes = [
  { path: '/', name: 'home', component: HomeWrapper },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
