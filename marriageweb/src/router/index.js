import { createRouter, createWebHistory } from 'vue-router';
import RSVP from '../views/RSVP.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/rsvp', name: 'RSVP', component: RSVP }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;