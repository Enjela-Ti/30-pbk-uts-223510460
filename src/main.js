import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar);

app.mount('#app');
