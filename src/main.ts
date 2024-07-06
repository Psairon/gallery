import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Paginate from 'vuejs-paginate-next';
import App from './App.vue';

const app = createApp(App);

app.use(Paginate);
app.use(createPinia());

app.mount('#app');
