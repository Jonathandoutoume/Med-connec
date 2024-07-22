import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './views/Accueil.vue';
import bienvenu from './views/bienvenu.vue';

const routes = [
  { path: '/', component: Accueil },
  { path: '/about', component: bienvenu },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
