import { createRouter, createWebHistory } from 'vue-router';
import RSVP from '../views/RSVP.vue';
import HomeView from '../views/HomeView.vue';
import StoryView from '@/views/StoryView.vue';
import GalleryView from '@/views/GalleryView.vue';
import PagesView from '@/views/PagesView.vue';
import WeddingView from '@/views/WeddingView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/rsvp', name: 'RSVP', component: RSVP },
  { path: '/story', name: 'Story', component: StoryView },
  { path: '/wedding', name: 'Wedding', component: WeddingView },
  { path: '/gallery', name: 'Gallery', component: GalleryView },
  { path: '/pages', name: 'Pages', component: PagesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;