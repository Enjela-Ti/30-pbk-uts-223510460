import { createRouter, createWebHistory } from 'vue-router';
import Album from '../components/Album.vue';
import PhotoDetail from '../components/AlbumDetail.vue';
import KegiatanTable from '../components/KegiatanTable.vue';
import Post from '../components/Post.vue';

const routes = [
  { path: '/', redirect: '/todos' },
  { path: '/todos', component: KegiatanTable },
  { path: '/posts', component: Post },
  { path: '/albums', component: Album },
  { path: '/albums/:id', component: PhotoDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
